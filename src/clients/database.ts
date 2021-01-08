import "reflect-metadata";
import { createConnection } from 'typeorm';

class DatabaseClient {
  async setupDatabase(): Promise<void> {
    try {
      await createConnection();
    } catch(err) {
      console.error(err);
    }
  }
}

export default DatabaseClient;
