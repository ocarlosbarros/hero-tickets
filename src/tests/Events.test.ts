import request from 'supertest';

import { App } from '../app';

describe('Events test', () => {
  const app = new App();
  const server = app.app;

  it('/POST Creates an event', async () => {

    const event = {
      title: 'Jorge & Mateus',
      date: new Date(),
      city: 'Belo Horizonte',
      description: 'Gravação do novo DVD',
      categories: ['Show', 'Sertanejo'],
      flyers: [],
      location: {
        latitude: '-19.8658619',
        longitude: '-43.9737064',
      },
      participants: [],
      price: [{ sector: 'Pista', amount: 20 }],
      coupons: [],
    };
    
      const response = await request(server)
      .post('/events')
      .field('title', event.title)
      .field('description', event.description)
      .field('city', event.city)
      .field('location[latitude]', event.location.latitude)
      .field('location[longitude]', event.location.longitude)
      .field('price[sector]', event.price[0].sector)
      .field('price[amount]', event.price[0].amount)
      .attach(
        'banner',
        '/home/carlosbarros/Pictures/jorge-e-mateus-banner.png',
      )
      .attach(
        'flyers',
        '/home/carlosbarros/Pictures/jorge-e-mateus-flyer-1.jpeg',
      )
      .attach(
        'flyers',
        '/home/carlosbarros/Pictures/jorge-e-mateus-flyer-2.jpeg',
      )
        
      if(response.error)  {
        console.log('file: Events.tests.ts error:', response.error);
      }

      expect(response.status).toBe(201);
      expect(response.body).toEqual({ message: 'Evento criado com sucesso!' });  
    
  });
});
