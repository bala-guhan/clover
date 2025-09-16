const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { fullName, email, phone, country, studyProgram } = req.body;

    // Validate required fields
    if (!fullName || !email || !phone || !country || !studyProgram) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'cloveroverseas2025@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER || 'cloveroverseas2025@gmail.com',
      to: process.env.GMAIL_TO_EMAIL || 'utkarsh.g@cloveroverseas.com',
      subject: 'New Counselling Form Submission - Clover Overseas Education',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #059669; margin: 0; font-size: 24px;">New Counselling Form Submission</h1>
              <p style="color: #666; margin: 10px 0 0 0;">Clover Overseas Education</p>
            </div>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #059669; margin: 0 0 15px 0; font-size: 18px;">Student Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 40%;">Full Name:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email Address:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${email}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone Number:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${phone}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Country of Interest:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${country}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Preferred Study Program:</td>
                  <td style="padding: 8px 0; color: #6b7280;">${studyProgram}</td>
                </tr>
              </table>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; margin: 0; font-size: 14px;">
                This form was submitted from the Clover Overseas Education website.
              </p>
              <p style="color: #6b7280; margin: 5px 0 0 0; font-size: 12px;">
                Submitted on: ${new Date().toLocaleString('en-US', { 
                  timeZone: 'Asia/Kolkata',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email' 
    });
  }
}
