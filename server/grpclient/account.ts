import * as config from '../config'
import { AccountClient } from '../protos/account_grpc_pb'

function newAccountClient(): AccountClient {
  const accountClient = new AccountClient(config.account.address, config.account.credentials)
  return accountClient
}

export default newAccountClient()
