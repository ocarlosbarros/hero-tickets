import { IEventRepository } from "../repositories/IEventRepository";
import { Event } from "../database/entities/Event";

class EventService {
  constructor(private eventRepository: IEventRepository){}

  async create(event: Event): Promise<Event | null>{
    const created = await this.eventRepository.create(event)
    if(!created){
      return null;
    }
    return created;
  }
}

export { EventService }