import dayjs from 'dayjs';
import { parseTimeToDate } from '../utils/dates.js';
import { EventsRepository } from '../repositories/EventsRepository.js';

export class EventsController {
  repository = new EventsRepository();
  async create(request, reply) {
    const { title, description, limit, date, startTime, endTime, communityId, banner } = request.body;

    const parsedStartTime = parseTimeToDate(startTime);
    const parsedEndTime = parseTimeToDate(endTime);

    if (dayjs(parsedEndTime).isBefore(dayjs(parsedStartTime))) return reply.status(400).send({ error: 'Invalid time' });

    await this.repository.save({
      title,
      description,
      limit,
      date,
      startTime,
      endTime,
      communityId,
      bannerId: banner.id
    });
    return reply.status(201).send();
  }

  async list(request, reply) {
    const { title, communityId, page = 0 } = request.query;

    const events = await this.repository.list({ title, communityId, page });

    return reply.send(events);
  }
}
