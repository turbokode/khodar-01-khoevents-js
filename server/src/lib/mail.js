import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

export async function sendMail({ to, subject, text }) {
  const port = process.env.MAIL_PORT;
  const user = process.env.MAIL_USER;
  const info = await transporter.sendMail({
    from: '"thebugger(khodar)" <noreply@khodar.co.mz>',
    to,
    subject,
    text,
    html: `<b>${subject}</b><br><p>${text}</p>`
  });
}
