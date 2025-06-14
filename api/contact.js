require('dotenv').config();
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, phone, email, car } = req.body;

  try {
    await resend.emails.send({
      from: 'pl.costa@hotmail.com',
      to: 'costaetcorreia27@gmail.com',
      subject: 'New Form Submission',
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Telefone:</strong> ${phone}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Modelo do carro:</strong> ${car}</p>`,
    });
  } catch (error) {
    return res.status(500).json({ error: 'Email failed to send.' });
  }

  res.status(200).json({ success: true });
}