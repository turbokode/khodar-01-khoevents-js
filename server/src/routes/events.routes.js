import { EventsController } from '../controllers/EventsController.js';
import { auth } from '../hooks/auth.js';
import { upload } from '../hooks/upload.js';

const eventsController = new EventsController();

export async function eventRoutes(fastify, opts) {
  fastify.get('/', (request, reply) => eventsController.list(request, reply));

  fastify.register(authRoutes);
}

async function authRoutes(fastify) {
  fastify.decorateRequest('communityId', '');
  fastify.addHook('preHandler', auth);
  fastify.post('/', { preHandler: upload('banner') }, (request, reply) => eventsController.create(request, reply));
}
