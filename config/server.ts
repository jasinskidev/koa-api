import * as dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  HOST,
} = process.env;

export default {
  port: PORT || 3000,
  host: HOST || 'localhost',
}