import { randomUUID } from 'node:crypto';

export class EventRepository {
  #events = new Map();

  create(event) {
    const id = randomUUID();
    this.#events.set(id, event);
  }

  list() {
    const events = Array.from(this.#events.entries()).map((event) => {
      const [id, data] = event;

      return {
        id,
        ...data
      };
    });

    const publishedEvents = events.filter((event) => event.status === 'published');

    return publishedEvents;
  }

  // findOne(id) {
  //   const data = this.#events.get(id);

  //   return {
  //     id,
  //     ...data
  //   };
  // }
}
