import { createClient } from 'redis';

class Redis {
  #client;

  constructor() {
    createClient()
      .on('error', (err) => console.log('Redis Client Error', err))
      .connect()
      .then((client) => {
        this.#client = client;
        console.log('Connected to redis');
      });
  }

  async set(key, value, duration) {
    await this.#client.set(key, value, {
      EX: duration
    });
  }

  async get(key) {
    const value = await this.#client.get(key);
    return value;
  }

  async delete(key) {
    await this.#client.del(key);
  }
}

export const redis = new Redis();
