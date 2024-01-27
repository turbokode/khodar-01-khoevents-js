import { randomUUID } from 'crypto';
import { z } from 'zod';
import { sendMail } from '../lib/mail.js';
import { CommunitiesRepository } from '../repositories/CommunitiesRepository.js';
import { redis } from '../database/redis.js';
import { AppError } from '../errors/AppError.js';
export class CommunitiesController {
  repository = new CommunitiesRepository();
  async create(request, reply) {
    const BodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6, { message: 'Must be 5 or more characters long' })
    });

    const { name, email, password } = BodySchema.parse(request.body);

    const communityExists = await this.repository.getByEmail(email);

    if (communityExists) throw new AppError('Community creation', 'Community already exists', 403);

    const { id } = await this.repository.save({ name, email, password });

    const verifyToken = randomUUID();
    await redis.set(`verify_${verifyToken}`, id, 60 * 60);
    await sendMail({
      subject: 'Verifique o seu email',
      to: email,
      text: `Clique no <a href="http://localhost/api/v1/communities/verify/${verifyToken}">link</a> para verificar o seu email`
    });

    return reply.status(201).send();
  }

  async verify(request, reply) {
    const { token } = request.params;

    const communityId = await redis.get(`verify_${token}`);

    await this.repository.update(communityId, { verified: true });

    await redis.delete(`verify_${token}`);

    return reply.status(204).send();
  }

  async resetPassword(request, reply) {
    const { token } = request.params;
    const { password } = request.body;

    const email = await redis.get(`reset_password_${token}`);

    const community = await this.repository.getByEmail(email);

    if (!community) return reply.status(403).send({ error: "Community doesn't exist" });

    await this.repository.updatePassword(community.id, password);

    await redis.delete(`reset_password_${token}`);

    return reply.status(204).send();
  }

  async list(request, reply) {
    const { name } = request.query;

    const communities = await this.repository.list({ name });
    return reply.send(communities);
  }

  async show(request, reply) {
    const { id } = request.params;

    const community = await this.repository.getById(id);

    return reply.send(community);
  }

  async update(request, reply) {
    const { name, email, website, description } = request.body;
    const { communityId } = request;

    const communityExists = await this.repository.getByEmail(email);
    if (communityExists) return reply.status(400).send({ error: 'Community exists' });

    await this.repository.update(communityId, { name, email, website, description });

    return reply.send();
  }

  async updateAvatar(request, reply) {
    const { avatar } = request.body;
    const { communityId } = request;
    await this.repository.update(communityId, { avatarId: avatar.id });
    return reply.send();
  }
}
