import { CommunitiesRepository } from '../repositories/CommunitiesRepository.js';
export class CommunitiesController {
  repository = new CommunitiesRepository();
  async create(request, reply) {
    const { name, email, password } = request.body;

    const communityExists = await this.repository.getByEmail(email);

    if (communityExists) return reply.status(400).send({ error: 'Community exists' });

    await this.repository.save({ name, email, password });

    return reply.status(201).send();
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
    const { name, email, website, description, communityId } = request.body;

    const communityExists = await this.repository.getByEmail(email);
    if (communityExists) return reply.status(400).send({ error: 'Community exists' });

    await this.repository.update(communityId, { name, email, website, description });

    return reply.send();
  }

  async updateAvatar(request, reply) {
    const { communityId, avatar } = request.body;
    await this.repository.update(communityId, { avatarId: avatar.id });
    return reply.send();
  }
}
