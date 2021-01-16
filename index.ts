import Koa from 'koa';
import Server from './src/Server';
import config from './config/server';

const app = new Koa();
const server = new Server(app, config)

server.start();