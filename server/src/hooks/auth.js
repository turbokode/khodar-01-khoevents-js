import jwt from 'jsonwebtoken';
export function auth(request, reply, done) {
  const { auth: token } = request.cookies;

  try {
    var { id } = jwt.verify(token, process.env.APP_SECRET);
    request.communityId = id;
  } catch (err) {
    return reply.status(401).send({ error: 'Invalid token' });
  }
  done();
}
