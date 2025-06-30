import { Resend } from 'resend';
import { google } from 'googleapis';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, phone, email, car } = req.body;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'pl.costa@hotmail.com',
      subject: 'New Form Submission',
      html: `<p><strong>Nome:</strong> ${name}</p>
             <p><strong>Telefone:</strong> ${phone}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Modelo do carro:</strong> ${car}</p>`,
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Email failed to send.', details: error.message });
  }

    // 2. Append to Google Sheets
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    const sheets = google.sheets({ version: 'v4', auth });
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "'Teste KM'!A:E",
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, phone, email, car, new Date().toISOString()]],
      },
    });
  } catch (error) {
    console.error('Google Sheets error:', error);
    return res.status(500).json({ error: 'Failed to add to Google Sheet.', details: error.message });
  }

  res.status(200).json({ success: true });
}