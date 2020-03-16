import session from 'express-session'
// import { SessionStore } from 'server/stores/session';

const CONFIG = {
  // store: new SessionStore(),
  resave: true, // 强制保存、不管有没有修改
  name: 'session', // session 的 cookie name
  secret: 'yinxulai', // 加密使用的密码 string | string[]
  rolling: true, // 强制给每个会话添加 session
  saveUninitialized: false, // 强制将“未初始化”的会话保存到存储中
};


export default session(CONFIG)



