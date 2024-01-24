import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
});

fastify.get('/status', async function handler(request, reply) {
  return reply.send({ ok: true });
});

fastify.listen({ port: 3333 }).then(() => console.log('Server running on 3333'));
