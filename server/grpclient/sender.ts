import * as config from '../config'
import { SenderClient } from '../protos/sender_grpc_pb'

function newSenderClient(): SenderClient {
  const senderClient = new SenderClient(config.sender.address, config.sender.credentials)
  return senderClient
}

export default newSenderClient()

export {}
