import { randomUUID } from 'node:crypto';

export class CommunityRepository {
  #communities = new Map();

  create(community) {
    const id = randomUUID();
    this.#communities.set(id, community);
  }

  list() {
    return Array.from(this.#communities.entries()).map((community) => {
      const [id, data] = community;

      return {
        id,
        ...data
      };
    });
  }
  findOne(id) {
    const data = this.#communities.get(id);
    return {
      id,
      ...data
    };
  }
}
