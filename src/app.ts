import express, { Application } from 'express';
import { connect } from './database/connection';
import { errorMiddleware } from './middleware/error.middleware';
import { EventRoutes } from './routes/event.routes';

class App {
  public app: Application;
  private eventRoutes = new EventRoutes();

  constructor(){
    this.app = express();
    this.initializeMiddleware();
    this.initializeRoutes();
    this.interceptionError();
    connect();
  };

  initializeMiddleware(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true })); 
  };

  initializeRoutes(){
    this.app.use('/events', this.eventRoutes.router);
  };

  interceptionError(){
    this.app.use(errorMiddleware);
  }

  listen(){
    this.app.listen(3333, () => console.log('server is running...'));
  };
}

export { App };