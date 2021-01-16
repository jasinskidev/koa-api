import { DefaultContext } from "koa";

class EmployeeRouter {
  public async getEmployees(ctx: DefaultContext): Promise<void> {
    ctx.body = 'Welcome to TypeScript REST API';
  }

  public async getSpecificEmployee(ctx: DefaultContext): Promise<void> {
    ctx.body = 'Welcome to TypeScript REST API';
  }

  public async addEmployee(ctx: DefaultContext): Promise<void> {
    ctx.body = 'Welcome to TypeScript REST API';
  }

  public async updateEmployee(ctx: DefaultContext): Promise<void> {
    ctx.body = 'Welcome to TypeScript REST API';
  }

  public async deleteEmployee(ctx: DefaultContext): Promise<void> {
    ctx.body = 'Welcome to TypeScript REST API';
  }
}

export default EmployeeRouter;
