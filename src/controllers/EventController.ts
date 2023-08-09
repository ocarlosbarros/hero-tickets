import { Request, Response, NextFunction } from "express";
import { EventService } from "../services/EventService";

class EventController {
  constructor(private eventService: EventService){}
  async create(request: Request, response: Response, next: NextFunction){
    try {
      const event = request.body;
      const created = await this.eventService.create(event);

      if(!created){
        return response.status(400).json({ message: 'Bad Request'});
      }
      return response.status(201).json({ message: 'Evento criado com sucesso!'});

    } catch (error) {
      next(error);
    }
  }


}

export { EventController }