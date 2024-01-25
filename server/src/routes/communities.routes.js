import { CommunitiesController } from '../controllers/CommunitiesController.js';
import { upload } from '../hooks/upload.js';
const communitiesController = new CommunitiesController();

export async function communityRoutes(fastify, opts) {
  fastify.post('/', (request, reply) => communitiesController.create(request, reply));
  fastify.get('/', (request, reply) => communitiesController.list(request, reply));
  fastify.get('/:id', (request, reply) => communitiesController.show(request, reply));
  fastify.put('/', (request, reply) => communitiesController.update(request, reply));

  fastify.patch('/avatar', { preHandler: upload('avatar') }, (request, reply) =>
    communitiesController.updateAvatar(request, reply)
  );
}
