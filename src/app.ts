import express, { Application } from 'express';
import { router } from './routes';

class App {
  public app: Application = express();
  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(router);
  }
}

export default new App().app;
