import next from 'next'
import 'reflect-metadata'
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
    await nextServer.render(req, res, '/', req.query)
  })

  pages.get('/applications/:name', async (req, res) => {
    const appName = req.param('name')
    if (!appName) { res.redirect('/') }
    else { await nextServer.render(req, res, `/applications/${appName}`, req.query) }
  })

  pages.get('*', async (req, res) => {
    await handle(req, res)
  })

  server.use(pages).use(session)
  server.listen(port, () => console.log(`> Ready on http://localhost:${port}`))
})
