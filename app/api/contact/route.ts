import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_TO = process.env.EMAIL_TO;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Basic server-side validation
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    // Insert into Supabase
    const { error: insertError } = await supabaseAdmin.from('messages').insert([{ name, email, message }]);

    if (insertError) {
      console.error('Supabase insert error:', insertError);
      return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
    }

    // Optional: send email notification if SMTP is configured
    if (SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS && EMAIL_TO) {
      try {
        // Dynamic import - nodemailer is optional. If you want email notifications,
        // install nodemailer in your project: `npm install nodemailer`.
        // @ts-ignore: optional dependency may not have types installed
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: SMTP_PORT,
          secure: SMTP_PORT === 465,
          auth: { user: SMTP_USER, pass: SMTP_PASS },
        });

        const mailText = `New message from ${name} <${email}>\n\n${message}`;

        await transporter.sendMail({
          from: `"Website contact" <${SMTP_USER}>`,
          to: EMAIL_TO,
          subject: `New contact form message from ${name}`,
          text: mailText,
        });
      } catch (mailErr) {
        console.error('Error sending notification email:', mailErr);
        // don't fail the request if email fails; message is saved in DB
      }
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error('API route error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
