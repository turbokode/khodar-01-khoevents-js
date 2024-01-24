import { randomUUID } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { FilesRepository } from '../repositories/FileRepository.js';
const filesRepository = new FilesRepository();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function upload(field) {
  return async (request, reply, done) => {
    const file = request.body[field];
    const fileName = `${randomUUID()}-${file.filename}`;
    const filePath = path.resolve(__dirname, '..', '..', 'uploads', fileName);

    await fs.promises.writeFile(filePath, file._buf);
    const savedFile = await filesRepository.save({
      filename: fileName,
      originalName: file.filename
    });

    const body = Object.fromEntries(Object.keys(request.body).map((key) => [key, request.body[key].value]));

    body[field] = savedFile;
    request.body = body;

    await done();
  };
}
