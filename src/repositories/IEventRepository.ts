import { Event } from '../database/entities/Event';

interface IEventRepository {
  create(event: Event): Promise<Event>;
}

export { IEventRepository }