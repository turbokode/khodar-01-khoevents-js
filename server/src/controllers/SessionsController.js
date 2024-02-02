import { CommunitiesRepository } from '../repositories/CommunitiesRepository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { randomUUID } from 'crypto';
import { sendMail } from '../lib/mail.js';
import { redis } from '../database/redis.js';
import { APP_SECRET } from '../utils/env.js';

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
      APP_SECRET,
      { expiresIn: '1d' }
    );
    return reply
      .setCookie('auth', token, {
        maxAge: 60 * 60 * 24
      })
      .send(community);
  }

  async resetPassword(request, reply) {
    const { email } = request.body;

    const resetToken = randomUUID();
    await redis.set(`reset_password_${resetToken}`, email, 60 * 60);
    const resetLink = `http://localhost/api/v1/communities/reset-password/${resetToken}`;

    await sendMail({
      subject: 'Redifinicao da senha',
      to: email,
      text: `Clique no <a href="${resetLink}">link</a> para mudar a senha`
    });

    return reply.status(204).send();
  }

  async logout(request, reply) {
    return reply.clearCookie('auth').status(204).send();
  }
}
