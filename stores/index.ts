import { isNodeEnv } from '../utils'
import { IUserInfo } from '../types/user'
import { observable, action } from 'mobx'
import axios, { AxiosInstance } from 'axios'
import { useStaticRendering } from 'mobx-react'
import { error } from 'react-pitaya/lib/helper/toaster'

useStaticRendering(isNodeEnv())

// 为什么把 autoToaster 加在最底层（api）
// 因为理论上外面对接口错误的 toaster 没有处理的需要
// 如果你需要某个接口需要忽略某种错误，应该在 api 层就忽略
// 如果只在某种特殊情况下忽略，一般意味着你使用的方式并不是符合当前接口设计
// 例如使用 getFileDetail 接口当作 isExitsFile ? 如果获取到了说明文件存在，否则不存在
// 这种情况其实已经脱离了原始接口的设计，后期很容易出现问题，所以更推荐的做法是在（api）这里
// 使用 getFileDetail 相同的服务端接口实现一个 isExitsFile 的前端接口
// 其次 这里并不处理成功时的消息、因为成功的消息总是伴随使用场景变化的

// 自动处理 toaster
function autoToaster(target: any, __: string, descriptor: PropertyDescriptor) {
  const rawValue = descriptor.value
  if (typeof rawValue !== 'function') return
  descriptor.value = async function (...args: any[]) {
    const result = rawValue.call(target, ...args)
    if (result instanceof Promise) {
      result.catch(({ response = {} }) => {
        const data = response.data || {}

        error({
          context: data.message,
          statusCode: data.state
        })

      })
    }

    return result
  }
}


export interface IStoreState {
  light?: boolean
  userInfo?: IUserInfo
}

export class Store {
  @observable light = false
  @observable.ref userInfo: IUserInfo = {}

  // 混合 state
  @autoToaster
  @action.bound
  hydrate(serializedStore: IStoreState) {
    if (serializedStore) {
      const { light } = serializedStore
      this.light = !!light
    }
  }

  get axios(): AxiosInstance {
    return axios.create({
      withCredentials: true
    })
  }

  // 退出登陆
  @autoToaster
  @action.bound
  async signOut() {
    await this.axios.post('/api/signout')
  }

  // 登录
  @action.bound
  @autoToaster
  async signIn(params: { username: string, password: string }) {
    const data = await this.axios.post('/api/signin', params)
    this.userInfo = data.data
  }

  // 注册
  @action.bound
  @autoToaster
  async signUp(params: { inviter?: number, category?: string, nickname?: string, username: string, password: string }) {
    const data = await this.axios.post('/api/signup', params)
    this.userInfo = data.data
  }

  // 刷新用户信息
  @action.bound
  @autoToaster
  async refreshUserInfo() {
    const data = await this.axios.get('/api/user/info')
    this.userInfo = data.data
  }

  @action.bound
  @autoToaster
  async fetchInitial(): Promise<IStoreState> {
    // 获取初始数据并返回
    return {
      light: false
    }
  }
}

const store = new Store()
export default store
export const fetchInitial = store.fetchInitial
