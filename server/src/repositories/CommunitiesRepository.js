import { randomUUID } from 'crypto';
import bcrypt from 'bcrypt';
import { prisma } from '../database/index.js';

export class CommunitiesRepository {
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

  async getByEmail(email) {
    const community = await this.client.findUnique({
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
        email
      }
    });

    return community;
  }

  async getById(id) {
    const community = await this.client.findUnique({
      select: {
        id: true,
        name: true,
        email: true,
        website: true,
        description: true,
        createdAt: true,
        updatedAt: true,
        avatar_id: true,
        avatar: true,
        password: false
      },
      where: {
        id
      }
    });

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

  async update(id, { name, email, website, description, avatarId }) {
    await this.client.update({
      where: {
        id
      },
      data: {
        name,
        email,
        website,
        description,
        avatar_id: avatarId
      }
    });
  }
}
