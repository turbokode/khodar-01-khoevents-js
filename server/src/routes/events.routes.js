import { EventController } from '../controllers/EventController.js';

const eventController = new EventController();

export async function eventRoutes(fastify, options) {
  fastify.post('/', (request, reply) => eventController.create(request, reply));

  fastify.get('/', (request, reply) => eventController.list(request, reply));
}
