import jwt from 'jsonwebtoken';
import { APP_SECRET } from '../utils/env.js';
export function auth(request, reply, done) {
  const { auth: token } = request.cookies;

  try {
    var { id } = jwt.verify(token, APP_SECRET);
    request.communityId = id;
  } catch (err) {
    return reply.status(401).send({ error: 'Invalid token' });
  }
  done();
}
