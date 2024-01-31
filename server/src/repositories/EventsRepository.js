import { prisma } from '../database/index.js';
export class EventsRepository {
  client = prisma.event;

  async save({ title, description, limit, date, startTime, endTime, communityId, bannerId }) {
    const event = await this.client.create({
      data: {
        title,
        description,
        limit: Number(limit),
        date: new Date(date),
        startTime,
        endTime,
        communityId,
        banner_id: bannerId
      }
    });

    return event;
  }

  async list({ title, communityId, page = 0 }) {
    const events = await this.client.findMany({
      where: {
        title: {
          contains: title
        },
        communityId
      },
      skip: 10 * page,
      take: 10,
      include: {
        banner: true,
        community: true
      }
    });
    return events;
  }
}
