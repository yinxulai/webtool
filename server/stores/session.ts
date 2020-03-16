// import express from 'express'
import { Store } from 'express-session'
import * as accountPb from '../protos/account_pb';

export interface ISession extends Express.Session {
  user: accountPb.User.AsObject
}

export class SessionStore extends Store {
  // constructor(config?: any) { }

  // regenerate(req: express.Request, fn: (err?: any) => any) { }
  // load(sid: string, fn: (err: any, session?: Express.SessionData | null) => any) { }
  // createSession(req: express.Request, sess: Express.SessionData) { }

  // get(sid: string, callback: (err: any, session?: Express.SessionData | null) => void) { }
  // set(sid: string, session: Express.SessionData, callback?: (err?: any) => void) { }
  // destroy(sid: string, callback?: (err?: any) => void) { }
  // all(callback: (err: any, obj?: { [sid: string]: Express.SessionData; } | null) => void) { }
  // length(callback: (err: any, length?: number | null) => void) { }
  // clear(callback?: (err?: any) => void) { }
  // touch(sid: string, session: Express.SessionData, callback?: (err?: any) => void) { }
}

export default new SessionStore()
