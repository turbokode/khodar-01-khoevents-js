import { communityRoutes } from './communities.routes.js';
import { eventRoutes } from './events.routes.js';

export async function routes(fastify, opts) {
  fastify.get('/', (request, reply) => {
    return reply.send({ title: 'Hello Khodar ', message: 'Sejam bem vindos a sala mais cool!!!!!!' });
  });

  fastify.register(communityRoutes, { prefix: '/communities' });
  fastify.register(eventRoutes, { prefix: '/events' });
}
