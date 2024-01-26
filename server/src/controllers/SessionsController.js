import { CommunitiesRepository } from '../repositories/CommunitiesRepository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class SessionsController {
  communityRepository = new CommunitiesRepository();

  async login(request, reply) {
    const { email, password } = request.body;
    const community = await this.communityRepository.getByEmail(email, { password: true });

    if (!community) return reply.status(401).send({ error: 'Authentication failed' });

    if (!(await bcrypt.compare(password, community.password)))
      return reply.status(401).send({ error: 'Wrong password' });

    delete community.password;
    const token = jwt.sign(
      {
        id: community.id
      },
      process.env.APP_SECRET,
      { expiresIn: '1d' }
    );
    return reply
      .setCookie('auth', token, {
        maxAge: 60 * 60 * 24
      })
      .send(community);
  }

  async logout(request, reply) {
    return reply.clearCookie('auth').status(204).send();
  }
}
