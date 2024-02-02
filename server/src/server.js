import 'dotenv/config.js';
import Fastify from 'fastify';
import fastifyMultipart from '@fastify/multipart';
import fastifyCookie from '@fastify/cookie';
import cors from '@fastify/cors';
import { routes } from './routes/index.js';
import './database/redis.js';
import { ZodError } from 'zod';
import { AppError } from './errors/AppError.js';
import { WEB_URL, APP_SECRET, APP_ENV, APP_PORT } from './utils/env.js';

const fastify = Fastify({
  logger: true
});
await fastify.register(cors, {
  origin: WEB_URL,
  credentials: true
});

fastify.register(fastifyMultipart, { attachFieldsToBody: true });
fastify.register(fastifyCookie, {
  secret: APP_SECRET,
  hook: 'onRequest',
  parseOptions: {
    httpOnly: true,
    path: '/api/v1/'
  }
});
fastify.register(routes, { prefix: '/api/v1' });

fastify.setErrorHandler((error, request, reply) => {
  // if (error instanceof Fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
  //   // Log error
  //   this.log.error(error);
  //   // Send error response
  //   reply.status(500).send({ ok: false });
  // } else {
  //   reply.send(error);
  // }

  if (error instanceof ZodError) {
    return reply.status(400).send({ error: 'Validation error', message: error.message });
  } else if (error instanceof AppError) {
    return reply.status(error.statusCode).send({ error: error.error, message: error.message });
  }
  if (APP_ENV === 'dev') {
    return reply.status(500).send(error);
  } else {
    return reply.status(500).send({ error: 'Internal server error' });
  }
});

fastify.listen({ port: APP_PORT }).then(() => console.log('Server running on 3333'));
