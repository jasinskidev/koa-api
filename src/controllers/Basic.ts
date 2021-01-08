import { BaseContext } from "koa";

class BasicController {
  public async check(ctx: BaseContext): Promise<void> {
    ctx.body = 'OK';
  }

  public async robots(ctx: BaseContext): Promise<void> {
    ctx.body = 'User-agent: *\nDisallow: /';
  }
}

export default BasicController;
