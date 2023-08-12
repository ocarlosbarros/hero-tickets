import { Request, Response, NextFunction } from 'express';
import { Event } from '../database/entities/Event';
import { EventService } from '../services/EventService';

class EventController {
  constructor(private eventService: EventService) {}
  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const event: Event = request.body;
      const created = await this.eventService.create(event);

      if (!created) {
        return response.status(400).json({ message: 'Bad Request' });
      }
      return response
        .status(201)
        .json({ message: 'Evento criado com sucesso!' });
    } catch (error) {
      return next(error);
    }
  }
}

export { EventController };
