import { Router } from 'express';
import { EventRepositoryMongoose } from '../repositories/EventRepositoryMongoose';
import { EventController } from '../controllers/EventController';
import { EventService } from '../services/EventService';

class EventRoutes {
  public router: Router; 
  private eventController: EventController;

  constructor(){
    this.router = Router();
    const eventRepository = new EventRepositoryMongoose();
    const eventService = new EventService(eventRepository);
    this.eventController = new EventController(eventService);
    this.initRoutes();
  };

  initRoutes(){
    this.router.get('/');
    this.router.post('/', this.eventController.create.bind(this.eventController));
  };

}

export { EventRoutes }