import request from 'supertest';

import { App } from '../app';

describe('Events test', () => {
  const app = new App();
  const server = app.app;

  it('/POST Event', async () => {

    const validEvent = {
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
      .field('title', validEvent.title)
      .field('description', validEvent.description)
      .field('city', validEvent.city)
      .field('location[latitude]', validEvent.location.latitude)
      .field('location[longitude]', validEvent.location.longitude)
      .field('price[sector]', validEvent.price[0].sector)
      .field('price[amount]', validEvent.price[0].amount)
      .attach(
        'banner',
        '/home/carlosbarros/Pictures/jorge-e-mateus-banner.png',
      )
        
      if(response.error)  {
        console.log('file: Events.tests.ts error:', response.error);
      }

      expect(response.status).toBe(201);
      expect(response.body).toEqual({ message: 'Evento criado com sucesso!' });  
    
  });
});
