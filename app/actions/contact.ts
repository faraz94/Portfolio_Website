"use server";

import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(data: ContactSubmission) {
  try {
    const { name, email, subject, message } = data;

    // 1. Save locally to a CSV file (acts as our spreadsheet)
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    const csvPath = path.join(dataDir, "submissions.csv");
    const timestamp = new Date().toISOString();
    
    // Check if file is new to write headers
    const fileExists = fs.existsSync(csvPath);
    const headers = "Timestamp,Name,Email,Subject,Message\n";
    
    // Sanitize CSV strings (double double-quotes to escape)
    const cleanCsv = (val: string) => {
      const escaped = (val || "").replace(/"/g, '""');
      return `"${escaped}"`;
    };

    const row = `${cleanCsv(timestamp)},${cleanCsv(name)},${cleanCsv(email)},${cleanCsv(subject)},${cleanCsv(message)}\n`;
    
    fs.appendFileSync(csvPath, fileExists ? row : headers + row, "utf8");
    console.log("Submission successfully saved to data/submissions.csv");

    // 2. Trigger Email via Gmail SMTP using Nodemailer
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const htmlContent = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                  background-color: #030303;
                  color: #fafafa;
                  margin: 0;
                  padding: 0;
                  -webkit-font-smoothing: antialiased;
                }
                .wrapper {
                  background-color: #030303;
                  padding: 40px 20px;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #121216;
                  border: 1px solid #27272a;
                  border-radius: 24px;
                  overflow: hidden;
                  box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                }
                .header {
                  background: linear-gradient(135deg, #f97316, #ec4899);
                  padding: 30px 40px;
                  text-align: left;
                }
                .logo {
                  font-size: 24px;
                  font-weight: 800;
                  letter-spacing: -0.05em;
                  color: #ffffff;
                }
                .logo span {
                  color: #030303;
                }
                .content {
                  padding: 40px;
                }
                .heading {
                  font-size: 20px;
                  font-weight: 700;
                  margin-top: 0;
                  margin-bottom: 24px;
                  color: #ffffff;
                  border-bottom: 1px solid #27272a;
                  padding-bottom: 12px;
                }
                .field {
                  margin-bottom: 20px;
                }
                .label {
                  font-size: 11px;
                  font-weight: 700;
                  text-transform: uppercase;
                  letter-spacing: 0.1em;
                  color: #a1a1aa;
                  margin-bottom: 6px;
                }
                .value {
                  font-size: 15px;
                  color: #ffffff;
                  font-weight: 500;
                }
                .email-link {
                  color: #fb923c;
                  text-decoration: none;
                }
                .message-box {
                  background-color: #1a1a22;
                  border-left: 4px solid #f97316;
                  padding: 20px;
                  border-radius: 12px;
                  font-size: 15px;
                  color: #e4e4e7;
                  line-height: 1.6;
                  white-space: pre-wrap;
                }
                .btn-container {
                  margin-top: 32px;
                  text-align: center;
                }
                .btn {
                  display: inline-block;
                  background-color: #f97316;
                  color: #ffffff !important;
                  font-weight: 600;
                  text-decoration: none;
                  padding: 12px 30px;
                  border-radius: 12px;
                  font-size: 14px;
                }
                .footer {
                  background-color: #09090b;
                  padding: 24px 40px;
                  text-align: center;
                  font-size: 11px;
                  color: #71717a;
                  border-top: 1px solid #27272a;
                }
              </style>
            </head>
            <body>
              <div class="wrapper">
                <div class="container">
                  <div class="header">
                    <div class="logo">F. Portfolio</div>
                  </div>
                  <div class="content">
                    <div class="heading">New Client Inquiry</div>
                    
                    <div class="field">
                      <div class="label">Client Name</div>
                      <div class="value">${name}</div>
                    </div>
                    
                    <div class="field">
                      <div class="label">Email Address</div>
                      <div class="value">
                        <a href="mailto:${email}" class="email-link">${email}</a>
                      </div>
                    </div>
                    
                    <div class="field">
                      <div class="label">Subject</div>
                      <div class="value">${subject || "No Subject"}</div>
                    </div>
                    
                    <div class="field">
                      <div class="label">Message</div>
                      <div class="message-box">${message}</div>
                    </div>
                    
                    <div class="btn-container">
                      <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Portfolio Inquiry')}" class="btn">Reply to Client</a>
                    </div>
                  </div>
                  <div class="footer">
                    This message was submitted on ${new Date(timestamp).toLocaleString('en-US')} and has been logged to data/submissions.csv.
                  </div>
                </div>
              </div>
            </body>
          </html>
        `;

        const mailOptions = {
          from: `"Portfolio Contact Form" <${smtpUser}>`,
          to: "faraz94.khan@gmail.com", // Always deliver to user's primary email
          subject: `New Portfolio Message: ${subject || "No Subject"}`,
          text: `You have received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
          html: htmlContent,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email notification sent to faraz94.khan@gmail.com");
      } catch (mailError) {
        console.error("Nodemailer failed to send email:", mailError);
        // We log the error but still return success: true because the submission was successfully written to the CSV file.
      }
    } else {
      console.warn(
        "Nodemailer was not executed because SMTP_USER or SMTP_PASS environment variables are missing."
      );
    }

    return { success: true, message: "Your message has been received and logged!" };
  } catch (error) {
    console.error("Error processing contact form submission:", error);
    return {
      success: false,
      message: "An error occurred on the server while logging your message.",
    };
  }
}
