import Application from 'koa';
import EmployeeRouter from "./EmployeeRouter";
import BasicRouter from "./BasicRouter";

class MainRouter {
  constructor(private server: Application) {}

  public setupRoutes(): void {
    const basicRouter = new BasicRouter();
    const employeeRouter = new EmployeeRouter();
    this.server.use(basicRouter.routes());
    this.server.use(employeeRouter.routes());
  }
}

export default MainRouter;
