// app/api/send-email/route.js
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message } = body;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'mrrobot34404@gmail.com',
        pass: 'mrjphbiazhbnkahg'
      }
    });

    let mailOptions = {
      from: '"Blogra" <mrrobot34404@gmail.com>',
      to: 'fawadanxari31@gmail.com',
      cc: 'mrrobot34404@gmail.com',
      subject: 'New Client Submission',
      html: `<h4>Name: ${firstName} ${lastName} FROM: ${email}</h4>
             <p>${message}</p>`
    };

    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), { status: 200 });
  } catch (error) {
    console.log('Error occurred!' + error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
