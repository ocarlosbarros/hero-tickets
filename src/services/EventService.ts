import { IEventRepository } from "../repositories/IEventRepository";
import { Event } from "../database/entities/Event";
import { HttpException } from "../interfaces/HttpException";
import axios from "axios";
import config from '../database/config/environment-variables';
import e from "express";

class EventService {
  constructor(private eventRepository: IEventRepository){}

  async create(event: Event): Promise<Event | null>{

    if(!event.title) throw new HttpException(400, 'Title is required');

    if(!event.date) throw new HttpException(400, 'Date is required');

    if(!event.banner) throw new HttpException(400, 'Banner is required');
    
    if(!event.flyers) throw new HttpException(400, 'Flyers is required');

    if(!event.location) throw new HttpException(400, 'Location is required');

    const { latitude, longitude } = event.location;

    const cityName = await this.getCityNameByCoordinates(latitude, longitude)
    
    event = {
      ...event,
      city: cityName,
    };

    const created = await this.eventRepository.create(event)

    if(!created){
      return null;
    }
    return created;
  }

  private async getCityNameByCoordinates(latitude: string, longitude: string): Promise<string> {
    let cityName = ''

    try {
      const response = await axios.get(`http://dev.virtualearth.net/REST/v1/Locations/${latitude},${longitude}?key=${config.BING_API_KEY}`);
      const { resources } = response.data.resourceSets[0];
      if (response.data.statusDescription === 'OK' && resources.length > 0){
        cityName = resources[0].address.locality;
        return cityName;
      }
      throw new HttpException(404, 'City not found')
    } catch (error) {
      throw new HttpException(401, 'Error request city name');
      
    }
  }
}

export { EventService }