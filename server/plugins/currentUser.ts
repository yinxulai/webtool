import { swaper } from '../grpclient'
import { CallRPC } from '../utils/callrpc'
import { Action } from "routing-controllers";
import * as swaperPb from '../protos/swaper_pb';
import * as accountPb from '../protos/account_pb';

export default async function (action: Action, value?: any): Promise<accountPb.User.AsObject> {
  console.log(value)

  const token = action.request.headers["authorization"];
  if (!token) {
    return
  }

  // 其实在构建 protobuf 报
  const queryRequest = new swaperPb.GetUnitDataByKeyRequest
  queryRequest.setKey(token)

  const result = await CallRPC<
    swaperPb.GetUnitDataByKeyRequest,
    swaperPb.GetUnitDataByKeyResponse
  >(queryRequest, swaper.getUnitDataByKey.bind(swaper))

  const resultObj = result.toObject(false)

  // 取出 token 的 body
  const { body = '' } = resultObj.data
  let userData: Partial<accountPb.User.AsObject> = {}

  try {
    userData = JSON.parse(body)
  } catch (e) {
    return null
  }

  if (!userData.id) {
    return null
  }

  return userData as any
}
