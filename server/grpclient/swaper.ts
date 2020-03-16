import * as config from '../config'
import { SwaperClient } from '../protos/swaper_grpc_pb'

function newSwaperClient(): SwaperClient {
  const swaperClient = new SwaperClient(config.swaper.address, config.swaper.credentials)
  return swaperClient
}

export default newSwaperClient()

export {}
