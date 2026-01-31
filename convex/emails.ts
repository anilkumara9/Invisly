"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

export const sendWelcomeEmail = internalAction({
  args: {
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return;
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
      const { data, error } = await resend.emails.send({
        from: "Invisly <onboarding@resend.dev>", // Update this with your verified domain
        to: [args.email],
        subject: "Welcome to Invisly!",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Welcome to Invisly</title>
              <style>
                body {
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                  line-height: 1.6;
                  color: #e0e0e0;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 0;
                  background-color: #000000;
                }
                .container {
                  background-color: #111111;
                  border: 1px solid #333;
                  border-radius: 8px;
                  overflow: hidden;
                  margin: 20px auto;
                  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.1);
                }
                .header {
                  text-align: center;
                  padding: 30px 20px;
                  background-color: #000000;
                  border-bottom: 2px solid #FFD700;
                }
                .logo {
                  max-height: 50px;
                  width: auto;
                }
                .content {
                  padding: 40px 30px;
                }
                h1 {
                  color: #FFD700;
                  font-size: 28px;
                  font-weight: 700;
                  margin-bottom: 20px;
                  text-align: center;
                  letter-spacing: -0.5px;
                }
                p {
                  margin-bottom: 16px;
                  font-size: 16px;
                  color: #cccccc;
                }
                ul {
                  list-style-type: none;
                  padding: 0;
                }
                li {
                  margin-bottom: 10px;
                  padding-left: 20px;
                  position: relative;
                  color: #e0e0e0;
                }
                li:before {
                  content: "•";
                  color: #FFD700;
                  font-weight: bold;
                  position: absolute;
                  left: 0;
                }
                strong {
                  color: #ffffff;
                }
                .button {
                  display: inline-block;
                  background-color: #FFD700;
                  color: #000000;
                  text-decoration: none;
                  padding: 14px 28px;
                  border-radius: 4px;
                  font-weight: 700;
                  margin: 25px 0;
                  text-align: center;
                  text-transform: uppercase;
                  letter-spacing: 0.5px;
                  transition: background-color 0.2s;
                }
                .footer {
                  padding: 24px;
                  text-align: center;
                  font-size: 13px;
                  color: #666666;
                  background-color: #000000;
                  border-top: 1px solid #222;
                }
                .cta-container {
                  text-align: center;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <img src="${process.env.NEXT_PUBLIC_APP_URL}/invisily1.png" alt="Invisly Logo" class="logo" />
                </div>
                <div class="content">
                  <h1>CRACK YOUR DREAM COMPANY</h1>
                  <p>Hello ${args.name},</p>
                  <p>Welcome to Invisly, your ultimate companion for mastering real-time coding tasks. We're here to help you bridge the gap between learning and landing that dream job.</p>
                  <p><strong>Here is how it works:</strong></p>
                  <ul>
                    <li><strong>Real-Time Coding Support:</strong> Get instant help with complex algorithms.</li>
                    <li><strong>Smart Agent Assistance:</strong> Simply <strong>take a screenshot</strong> of your problem, send it to our agent, and get the optimal solution instantly.</li>
                    <li><strong>Live Interview Prep:</strong> Practice with tools designed to simulate real coding rounds.</li>
                  </ul>
                  <div class="cta-container">
                    <a href="${process.env.NEXT_PUBLIC_APP_URL}" class="button">START CODING NOW</a>
                  </div>
                  <p>Don't just code—excel. Level up your skills and conquer your next technical interview with confidence.</p>
                  <p>Happy coding!</p>
                  <p>Best regards,<br/><span style="color: #FFD700;">The Invisly Team</span></p>
                </div>
                <div class="footer">
                  <p>&copy; ${new Date().getFullYear()} Invisly. All rights reserved.</p>
                  <p>You received this email because you signed up for Invisly.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });

      if (error) {
        console.error("Error sending welcome email:", error);
      } else {
        console.log("Welcome email sent successfully:", data);
      }
    } catch (err) {
      console.error("Failed to send welcome email:", err);
    }
  },
});
