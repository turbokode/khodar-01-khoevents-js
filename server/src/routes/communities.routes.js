import { CommunityController } from '../controllers/CommunityController.js';

const communityController = new CommunityController();

export async function communityRoutes(fastify, options) {
  fastify.post('/', (request, reply) => communityController.create(request, reply));

  fastify.get('/', (request, reply) => communityController.list(request, reply));

  fastify.get('/:id', (request, reply) => communityController.show(request, reply));
}
