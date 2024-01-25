import Fastify from 'fastify';
import fastifyMultipart from '@fastify/multipart';
import { routes } from './routes/index.js';

const fastify = Fastify({
  logger: true
});

fastify.register(fastifyMultipart, { attachFieldsToBody: true });
fastify.register(routes, { prefix: '/api/v1' });

fastify.listen({ port: 3333 }).then(() => console.log('Server running on 3333'));

