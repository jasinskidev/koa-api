const path = require('path');
require('dotenv').config();

module.exports = {
   type: "postgres",
   url: process.env.DATABASE_URL,
   synchronize: false,
   logging: false,
   entities: [
      "src/entities/*.ts"
   ],
   migrations: [
      "src/migrations/*.ts"
   ],
   migrationsTableName: "typeorm_migrations",
   subscribers: [
      "src/subscribers/**/*.ts"
   ],
   cli: {
      entitiesDir: "src/entities",
      migrationsDir: "src/migrations",
      subscribersDir: "src/subscribers"
   }
}