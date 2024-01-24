import { EventsController } from '../controllers/EventsController.js';
const eventsController = new EventsController();
import { upload } from '../hooks/upload.js';

export async function eventRoutes(fastify, opts) {
  fastify.post('/', { preHandler: upload('banner') }, (request, reply) => eventsController.create(request, reply));

  // fastify.get('/', (request, reply) => communitiesController.list(request, reply));

  // fastify.get('/:id', (request, reply) => communitiesController.show(request, reply));
}
