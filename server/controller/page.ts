import { Controller, Res, Req, Get } from 'routing-controllers'
import Server from 'next/dist/next-server/server/next-server'
import { isDevelop } from '../../utils/node'
import { ParsedUrlQuery } from 'querystring'
import { Request, Response } from 'express'
import { UrlWithParsedQuery } from 'url'
import next from 'next'

// TODO: 理想状态

@Controller()
export default class Page {
  private nextServer: Server
  private isPrepared: boolean
  private prepareProcess: Promise<void>

  constructor() {
    // 初始化
    this.isPrepared = false
    this.nextServer = next({ dev: isDevelop() })

    // 绑定 this
    this.render = this.render.bind(this)
    this.prepare = this.prepare.bind(this)
  }

  async prepare(): Promise<void> {
    if (this.isPrepared) {
      return
    }

    if (!this.prepareProcess) {
      // 不存在就先 prepare
      this.prepareProcess = this.nextServer.prepare()
    }

    await this.prepareProcess
    this.isPrepared = true
    return
  }

  async render(view: string, request: Request, response: Response, query?: ParsedUrlQuery, parsedUrl?: UrlWithParsedQuery): Promise<void> {
    await this.prepare()
    return this.nextServer.render(request, response, view, query, parsedUrl)
  }

  @Get('/playground') async playground(@Req() req: Request, @Res() res: Response) {
    return await this.render('/playground', req, res)
  }

  @Get('/signin') async signin(@Req() req: Request, @Res() res: Response) {
    return await this.render('/signin', req, res)
  }

  @Get('/signup') async signup(@Req() req: Request, @Res() res: Response) {
    return await this.render('/signup', req, res)
  }

  // 首页
  @Get('/') async index(@Req() req: Request, @Res() res: Response) {
    return await this.render('/', req, res, req.query)
  }

  // 静态资源
  @Get('*') async static(@Req() req: Request, @Res() res: Response) {
    return await this.nextServer.getRequestHandler()(req, res)
  }
}
