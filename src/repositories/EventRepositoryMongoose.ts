import mongoose from 'mongoose';

import { IEventRepository } from './IEventRepository';
import { Event } from '../database/entities/Event';

const eventSchema = new mongoose.Schema({
  title: String,
  date: Date,
  city: String,
  description: String,
  banner: String,
  categories: [String],
  flyers: [String],
  coupons: [String],
  location: {
    latitude: String,
    longitude: String,
  },
  participants: {
    type: Array,
    ref: 'User',
  },
  price: {
    type: Array,
    ref: 'Price',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const EventModel = mongoose.model('Event', eventSchema);

class EventRepositoryMongoose implements IEventRepository {
  async create(event: Event): Promise<Event> {
    const eventModel = new EventModel(event);

    await eventModel.save();
    console.log(event);
    return event;
  }
}

export { EventRepositoryMongoose };
