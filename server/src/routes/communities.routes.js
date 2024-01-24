import { CommunitiesController } from '../controllers/CommunitiesController.js';
const communitiesController = new CommunitiesController();

export async function communityRoutes(fastify, opts) {
  fastify.post('/', (request, reply) => communitiesController.create(request, reply));

  fastify.get('/', (request, reply) => communitiesController.list(request, reply));

  fastify.get('/:id', (request, reply) => communitiesController.show(request, reply));
}
