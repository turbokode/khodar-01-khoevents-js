import { prisma } from '../database/index.js';

export class FilesRepository {
  client = prisma.file;

  async save({ filename, originalName }) {
    const file = await this.client.create({
      data: {
        filename,
        originalName
      }
    });

    return file;
  }
}
