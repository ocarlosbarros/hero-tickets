import { Router } from 'express';
import { EventRepositoryMongoose } from '../repositories/EventRepositoryMongoose';
import { EventController } from '../controllers/EventController';
import { EventService } from '../services/EventService';
import { upload } from '../database/config/multer';

class EventRoutes {
  public router: Router;
  private eventController: EventController;

  constructor() {
    this.router = Router();
    const eventRepository = new EventRepositoryMongoose();
    const eventService = new EventService(eventRepository);
    this.eventController = new EventController(eventService);
    this.initRoutes();
  }

  initRoutes() {
    this.router.post(
      '/',
      upload.fields([
        {
          name: 'banner',
          maxCount: 1,
        },
        {
          name: 'flyers',
          maxCount: 3,
        },
      ]),
      this.eventController.create.bind(this.eventController),
    );
  }
}

export { EventRoutes };
