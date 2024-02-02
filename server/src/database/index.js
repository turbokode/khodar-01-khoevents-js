import { PrismaClient } from '@prisma/client';
import { APP_HOST, APP_PORT, API_PREFIX } from '../utils/env.js';

export const prisma = new PrismaClient().$extends({
  result: {
    file: {
      url: {
        needs: { filename: true },
        compute(file) {
          return `${APP_HOST}:${APP_PORT}/${API_PREFIX}/public/${file.filename}`;
        }
      }
    }
  }
});
