import Router from 'koa-router';
import EmployeeController from '../controllers/EmployeeController';

class EmployeeRouter extends Router {
  private controller;

  constructor() {
    super();
    this.controller = new EmployeeController();
    this.prepareRoutes();
  }

  private prepareRoutes() {
    this
      .get('/employees', this.controller.getEmployees)
      .get('/employees/:id', this.controller.getSpecificEmployee)
      .post('/employees', this.controller.addEmployee)
      .patch('/employees/:id', this.controller.updateEmployee)
      .delete('/employees/:id', this.controller.deleteEmployee);
  }
}

export default EmployeeRouter;
