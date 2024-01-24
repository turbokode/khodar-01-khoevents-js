import { CommunitiesRepository } from '../repositories/CommunitiesRepository.js';
export class CommunitiesController {
  repository = new CommunitiesRepository();
  async create(request, reply) {
    const { name, email, password } = request.body;

    await this.repository.save({ name, email, password });

    return reply.status(201).send();
  }

  async list(request, reply) {
    const { name } = request.query;

    const communities = await this.repository.list({ name });
    return reply.send(communities);
  }

  show(request, reply) {
    const { id } = request.params;

    const community = this.repository.getById(id);

    return reply.send(community);
  }
}
