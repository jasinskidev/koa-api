import Server from './src/server';
import config from './config/server';

const server = new Server(config)
server.start();