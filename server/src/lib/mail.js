import nodemailer from 'nodemailer';
import { MAIL_USER, MAIL_HOST, MAIL_PASS, MAIL_PORT } from '../utils/env.js';

const transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  auth: {
    user: MAIL_USER,
    pass: MAIL_PASS
  }
});

export async function sendMail({ to, subject, text }) {
  await transporter.sendMail({
    from: '"thebugger(khodar)" <noreply@khodar.co.mz>',
    to,
    subject,
    text,
    html: `<b>${subject}</b><br><p>${text}</p>`
  });
}
