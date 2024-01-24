import { communityRoutes } from './communities.routes.js';
import { eventRoutes } from './events.routes.js';

export async function routes(fastify, options) {
  fastify.get('/status', async function handler(request, reply) {
    return reply.send({ ok: true });
  });

  fastify.register(communityRoutes, { prefix: '/communities' });
  fastify.register(eventRoutes, { prefix: '/events' });
}
