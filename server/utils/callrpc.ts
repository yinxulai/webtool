import * as grpc from 'grpc';
import { HttpError } from 'routing-controllers';

export async function CallRPC<T, V>(request: T, call: (request: T, callback: (error: Error | null, response: V) => void) => grpc.ClientUnaryCall): Promise<V> {
  return new Promise((resolve, reject) => {
    // 丢失了 this....
    return call(request, (err, respone: V) => {
      if (err) { return reject(err) }
      return resolve(respone)
    })
  })
}

interface ErrorData {
  state: any,
  message: string
}

export class RPCError extends HttpError {
  public message: string
  public error: ErrorData
  public name = 'RPCError'

  constructor(error: ErrorData) {
    super(500)
    this.error = error
    this.message = error.message
    Reflect.setPrototypeOf(this, RPCError.prototype);
  }

  toJSON() {
    return this.error
  }
}
