import { CommunityRepository } from '../repositories/CommunityRepository.js';

export class CommunityController {
  #repository = new CommunityRepository();

  create(request, reply) {
    const { name, description, email, website, password } = request.body;
    const community = {
      name,
      description,
      email,
      website,
      password
    };

    this.#repository.create(community);
    return reply.status(201).send();
  }

  list(request, reply) {
    const communities = this.#repository.list();
    return reply.send(communities);
  }

  show(request, reply) {
    const { id } = request.params;
    const community = this.#repository.findOne(id);

    return reply.send(community);
  }
}
