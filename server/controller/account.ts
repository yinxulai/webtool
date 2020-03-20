import { Response } from 'express'
import * as rtc from 'routing-controllers'
import { ISession } from '../stores/session'
import { account, swaper } from '../grpclient'
import * as swaperPb from '../protos/swaper_pb'
import * as accountPb from '../protos/account_pb'
import { CallRPC, RPCError } from '../utils/callrpc'
import { AuthorizationCookieName } from '../../config/cookie'


// routing-controllers 文档
// https://github.com/typestack/routing-controllers#make-parameter-required

@rtc.JsonController('/api')
export default class Account {
  constructor() {
    // 初始化
  }

  //登陆
  @rtc.Post('/signin') async Signin(
    @rtc.Res() response: Response,
    @rtc.BodyParam('username') username: string,
    @rtc.BodyParam('password') password: string
  ) {
    // 其实在构建 protobuf 报文
    const verifyRequest = new accountPb.VerifyUserPasswordByUsernameRequest()
    verifyRequest.setUsername(username)
    verifyRequest.setPassword(password)

    const verify = await CallRPC<
      accountPb.VerifyUserPasswordByUsernameRequest,
      accountPb.VerifyUserPasswordByUsernameResponse
    >(verifyRequest, account.verifyUserPasswordByUsername.bind(account))

    // 密码不成功
    if (verify.getState() != accountPb.State.SUCCESS) {
      throw new RPCError(verify.toObject())
    }

    const queryRequest = new accountPb.QueryUserByUsernameRequest()
    queryRequest.setUsername(username)

    const data = await CallRPC<
      accountPb.QueryUserByUsernameRequest,
      accountPb.QueryUserByUsernameResponse
    >(queryRequest, account.queryUserByUsername.bind(account))

    if (data.getState() != accountPb.State.SUCCESS) {
      throw new RPCError(data.toObject())
    }

    const dataObj = data.toObject(false)

    // 登陆成功 存储数据到 swaper
    const unitDataRequest = new swaperPb.CreateUnitDataRequest()
    unitDataRequest.setBody(JSON.stringify(dataObj.data || ''))

    const unitData = await CallRPC<
      swaperPb.CreateUnitDataRequest,
      swaperPb.CreateUnitDataResponse
    >(unitDataRequest, swaper.createUnitData.bind(swaper))

    if (unitData.getState() != swaperPb.State.SUCCESS) {
      throw new RPCError({ ...unitData.toObject(), message: '登陆失败，服务器内部错误' })
    }

    // 设置 cookie
    response.cookie(AuthorizationCookieName, unitData.getKey())
    return data.toObject(false)
  }

  // 注册
  @rtc.Post('/signup') async Signup(
    @rtc.BodyParam('inviter') inviter: number,
    @rtc.BodyParam('category') category: string,
    @rtc.BodyParam('nickname') nickname: string,
    @rtc.BodyParam('username') username: string,
    @rtc.BodyParam('password') password: string
  ) {
    const request = new accountPb.CreateUserRequest()
    request.setInviter(inviter)
    request.setCategory(category)
    request.setNickname(nickname)
    request.setUsername(username)
    request.setPassword(password)

    const data = await CallRPC<
      accountPb.CreateUserRequest,
      accountPb.CreateUserResponse
    >(request, account.createUser.bind(account))

    if (data.getState() != accountPb.State.SUCCESS) {
      throw new RPCError(data.toObject())
    }

    return data.toObject(false)
  }

  // 获取自己的信息
  @rtc.Authorized()
  @rtc.Get('/user/info') async Info(
    @rtc.Session() session: ISession,
  ) {
    const request = new accountPb.QueryUserByIDRequest()
    request.setId(session.user.id)

    const data = await CallRPC<
      accountPb.QueryUserByIDRequest,
      accountPb.QueryUserByIDResponse
    >(request, account.queryUserByID.bind(account))

    if (data.getState() != accountPb.State.SUCCESS) {
      throw new RPCError(data.toObject())
    }

    return data.toObject(false)
  }

  // 修改邀请码
  @rtc.Authorized()
  @rtc.Put('/user/inviter') async UpdateInviter(
    @rtc.Session() session: ISession,
    @rtc.BodyParam('inviter') inviter: number
  ) {

    const request = new accountPb.UpdateUserInviterByIDRequest()
    request.setId(session.user.id)
    request.setInviter(inviter)

    const data = await CallRPC<
      accountPb.UpdateUserInviterByIDRequest,
      accountPb.UpdateUserInviterByIDResponse
    >(request, account.updateUserInviterByID.bind(account))

    if (data.getState() != accountPb.State.SUCCESS) {
      throw new RPCError(data.toObject())
    }

    return data.toObject(false)
  }

  // 修改分类
  @rtc.Authorized()
  @rtc.Put('/user/category') async UpdateCategory(
    @rtc.Session() session: ISession,
    @rtc.BodyParam('category') category: string
  ) {
    const request = new accountPb.UpdateUserCategoryByIDRequest()
    request.setId(session.user.id)
    request.setCategory(category)

    const data = await CallRPC<
      accountPb.UpdateUserCategoryByIDRequest,
      accountPb.UpdateUserCategoryByIDResponse
    >(request, account.updateUserCategoryByID.bind(account))

    if (data.getState() != accountPb.State.SUCCESS) {
      throw new RPCError(data.toObject())
    }

    return data.toObject(false)
  }

  // 修改昵称
  @rtc.Authorized()
  @rtc.Put('/user/nickname') async UpdateNickname(
    @rtc.Session() session: ISession,
    @rtc.BodyParam('nickname') nickname: string
  ) {
    const request = new accountPb.UpdateUserNicknameByIDRequest()
    request.setId(session.user.id)
    request.setNickname(nickname)

    const data = await CallRPC<
      accountPb.UpdateUserNicknameByIDRequest,
      accountPb.UpdateUserNicknameByIDResponse
    >(request, account.updateUserNicknameByID.bind(account))

    if (data.getState() != accountPb.State.SUCCESS) {
      throw new RPCError(data.toObject())
    }

    return data.toObject(false)
  }

  // 修改密码
  @rtc.Authorized()
  @rtc.Put('/user/password') async UpdatePassword(
    @rtc.Session() session: ISession,
    @rtc.BodyParam('password') password: string
  ) {
    const request = new accountPb.UpdateUserPasswordByIDRequest()
    request.setId(session.user.id)
    request.setPassword(password)

    const data = await CallRPC<
      accountPb.UpdateUserPasswordByIDRequest,
      accountPb.UpdateUserPasswordByIDResponse
    >(request, account.updateUserPasswordByID.bind(account))

    if (data.getState() != accountPb.State.SUCCESS) {
      throw new RPCError(data.toObject())
    }

    return data.toObject(false)
  }
}

