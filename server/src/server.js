import 'dotenv/config.js';
import Fastify from 'fastify';
import fastifyMultipart from '@fastify/multipart';
import fastifyCookie from '@fastify/cookie';
import { routes } from './routes/index.js';
import './database/redis.js';
import { ZodError } from 'zod';
import { AppError } from './errors/AppError.js';

const fastify = Fastify({
  logger: true
});

fastify.register(fastifyMultipart, { attachFieldsToBody: true });
fastify.register(fastifyCookie, {
  secret: process.env.APP_SECRET,
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

  return reply.status(500).send(error);
});

fastify.listen({ port: 3333 }).then(() => console.log('Server running on 3333'));

// ('[
//     {
//       "validation": "email",
//     "code": "invalid_string",
//     "message": "Invalid email",
//     "path": [
//         "email"
//     ]
//   },
//   {
//       "code": "too_small",
//     "minimum": 6,
//     "type": "string",
//     "inclusive": true,
//     "exact": false,
//     "message": "Must be 5 or more characters long",
//     "path": [
//         "password"
//     ]
//   }
// ]')
