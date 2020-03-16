import next from 'next'
import 'reflect-metadata'
import qs from 'querystring'
import express from 'express'
import session from './plugins/session'
import Account from './controller/account'
import { isDevelop } from '../utils/node'
import currentUser from './plugins/currentUser'
import { useExpressServer } from 'routing-controllers'

const server = express()
const isDev = isDevelop()
const nextServer = next({ dev: isDev })
const handle = nextServer.getRequestHandler()
const port = parseInt(process.env.PORT || '3000', 10)
useExpressServer(server, { development: isDev, controllers: [Account], currentUserChecker: currentUser })

// 启动特别慢、考虑挪走
nextServer.prepare().then(() => {
  // 这里面主要是装载 page router 等
  const pages = express.Router()

  pages.get('/', async (req, res) => {
    res.redirect(`/signin?${qs.stringify(req.query)}`)
  })

  pages.get('/signin', async (req, res) => {
    await nextServer.render(req, res, '/signin', req.query)
  })

  pages.get('/signup', async (req, res) => {
    await nextServer.render(req, res, '/signup', req.query)
  })

  pages.get('/playground', async (req, res) => {
    await nextServer.render(req, res, '/playground', req.query)
  })

  pages.get('*', async (req, res) => {
    await handle(req, res)
  })

  server.use(pages).use(session)
  server.listen(port, () => console.log(`> Ready on http://localhost:${port}`))
})
