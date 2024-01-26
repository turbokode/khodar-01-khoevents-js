import { SessionsController } from '../controllers/SessionsController.js';
import { auth } from '../hooks/auth.js';
const sessionController = new SessionsController();

export async function sessionRoutes(fastify, opts) {
  fastify.post('/', (request, reply) => sessionController.login(request, reply));
  fastify.delete('/', { preHandler: auth }, (request, reply) => sessionController.logout(request, reply));

  // fastify.get('/', (request, reply) => eventsController.list(request, reply));

  // fastify.get('/:id', (request, reply) => communitiesController.show(request, reply));
}
