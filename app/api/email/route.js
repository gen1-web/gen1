import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


// Configure nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Use Gmail as the email service
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail email address
    pass: process.env.EMAIL_PASS  // Your Gmail app password
  }
});

// POST handler for sending emails
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, linkedin,service,details } = body;

    // Validate required fields
    if (!name || !email || !service || !details) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Configure email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, 
      subject: `New Enquiry from ${name}: ${email}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>LinkedIn:</strong> ${linkedin}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>details:</strong> ${details}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    //console.log(mailOptions)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
