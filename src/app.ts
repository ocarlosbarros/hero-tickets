import express, { Application } from 'express';
import { connect } from './database';

class App {
  public app: Application;
  
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
    //this.app.use('/', () => {});
  };

  interceptionError(){
    // this.app.use();
  }

  listen(){
    this.app.listen(3333, () => console.log('server is running...'));
  };
}

export { App };