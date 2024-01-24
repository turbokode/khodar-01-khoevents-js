import { randomUUID } from 'crypto';
import bcrypt from 'bcrypt';
import { prisma } from '../database/index.js';

export class CommunitiesRepository {
  communities = new Map();
  client = prisma.community;

  async save({ name, email, password }) {
    const passwordHash = await bcrypt.hash(password, 10);
    const community = await this.client.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    });

    return community;
  }

  getById(id) {
    const community = this.communities.get(id);

    delete community.password;

    return community;
  }

  async list({ name }) {
    const communities = await this.client.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        website: true,
        description: true,
        createdAt: true,
        updatedAt: true,
        password: false
      },
      where: {
        name: {
          contains: name
        }
      }
    });
    return communities;
  }
}
