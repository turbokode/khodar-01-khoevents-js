import { communityRoutes } from './communities.routes.js';
import { eventRoutes } from './events.routes.js';
import { sessionRoutes } from './sessions.routes.js';
import path from 'path';
import fastifyStatic from '@fastify/static';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function routes(fastify, opts) {
  fastify.get('/status', (request, reply) => {
    return reply.send({ ok: true });
  });

  fastify.register(fastifyStatic, {
    root: path.resolve(__dirname, '..', '..', 'uploads'),
    prefix: '/public/', // optional: default '/'
    constraints: {} // optional: default {}
  });

  fastify.register(communityRoutes, { prefix: '/communities' });
  fastify.register(eventRoutes, { prefix: '/events' });
  fastify.register(sessionRoutes, { prefix: '/sessions' });
}
