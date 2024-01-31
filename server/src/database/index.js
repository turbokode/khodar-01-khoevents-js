import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient().$extends({
  result: {
    file: {
      url: {
        needs: { filename: true },
        compute(file) {
          return `http://localhost:3333/api/v1/public/${file.filename}`;
        }
      }
    }
  }
});
