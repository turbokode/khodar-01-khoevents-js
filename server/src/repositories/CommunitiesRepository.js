import bcrypt from 'bcrypt';
import { prisma } from '../database/index.js';

export class CommunitiesRepository {
  client = prisma.community;

  async hashPassword(password) {
    const passwordHash = await bcrypt.hash(password, 10);
    return passwordHash;
  }

  async save({ name, email, password }) {
    const passwordHash = await this.hashPassword(password);

    const community = await this.client.create({
      data: {
        name,
        email,
        password: passwordHash
      }
    });

    return community;
  }

  async getByEmail(email, options = { password: false }) {
    const community = await this.client.findUnique({
      select: {
        id: true,
        name: true,
        email: true,
        website: true,
        description: true,
        createdAt: true,
        updatedAt: true,
        password: options.password
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

  async updatePassword(id, password) {
    const passwordHash = await this.hashPassword(password);
    await this.client.update({
      where: {
        id
      },
      data: {
        password: passwordHash
      }
    });
  }

  async update(id, { name, email, website, description, avatarId, verified, password }) {
    await this.client.update({
      where: {
        id
      },
      data: {
        name,
        email,
        website,
        description,
        verified,
        avatar_id: avatarId
      }
    });
  }
}
