import { createClient } from 'redis';
import { REDIS_USER, REDIS_HOST, REDIS_PASS, REDIS_PORT } from '../utils/env.js';
class Redis {
  #client;

  constructor() {
    createClient({
      password: REDIS_PASS,
      socket: {
        host: REDIS_HOST,
        port: REDIS_PORT
      }
    })
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
