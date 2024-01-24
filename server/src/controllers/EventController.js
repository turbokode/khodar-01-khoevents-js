import { EventRepository } from '../repositories/EventRepository.js';

export class EventController {
  #repository = new EventRepository();

  create(request, reply) {
    const { title, description, limit, date, status, start_time, end_time, community_id, picture_id } = request.body;

    this.#repository.create({
      title,
      description,
      limit,
      date,
      status,
      start_time,
      end_time,
      community_id,
      picture_id
    });
    return reply.status(201).send();
  }

  list(request, reply) {
    const events = this.#repository.list();

    return reply.send(events);
  }
}
