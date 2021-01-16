import Application from 'koa';
import logger from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import Router from './routes';
import ErrorHandler from './helpers/ErrorHandler';
import DatabaseClient from './clients/database';
import { ServerConfig } from '../config/server.d';

class Server {
  private config: ServerConfig;
  private app: Application;

  constructor(app: Application, config: ServerConfig) {
    this.app = app;
    this.config = config;
    this.setupMiddlewares();
    this.setupDatabase();
    this.setupErrorHandling();
    this.configureRouting();
  }

  private setupDatabase() {
    const databaseClient = new DatabaseClient();
    databaseClient.setupDatabase();
  }

  private configureRouting() {
    const router = new Router(this.app);
    router.setupRoutes();
  }

  private setupErrorHandling() {
    const errorHandler = new ErrorHandler(this.app);
    errorHandler.setup();
  }

  private setupMiddlewares() {
    this.app.use(logger());
    this.app.use(bodyParser());
  }

  public start(): void {
    this.app.listen(this.config.port);
    console.log(`Server started on port ${this.config.port}`);
  }
}

export default Server;