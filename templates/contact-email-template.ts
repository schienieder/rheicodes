// contact-email-template.ts
export const contactEmailTemplate = (subject: string, message: string): string => {
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                line-height: 1.6;
                color: #333333;
                background-color: #f4f4f7 !important;
            }

            .email-wrapper {
                width: 100%;
                padding: 2rem 0;
                background-color: #f4f4f7;
            }

            .email-container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 8px;
                overflow: hidden;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }

            .header {
                background-color: #1e293b;
                color: #cbd5e1;
                color: white;
                padding: 30px 20px;
                text-align: center;
            }

            .header-logo {
                max-width: 180px;
                margin: 0 auto 15px;
                display: block;
            }

            .header h1 {
                margin: 10px 0 0;
                font-size: 24px;
                font-weight: 600;
            }

            .content {
                padding: 30px;
                background-color: #ffffff;
            }

            .content h2 {
                color: #1e3a8a;
                margin-top: 0;
                font-size: 22px;
            }

            .content p {
                margin: 15px 0;
                font-size: 16px;
            }

            .content .subject {
                background-color: #f8fafc;
                padding: 15px;
                border-left: 4px solid #3b82f6;
                margin: 20px 0;
            }

            .content .message {
                background-color: #f8fafc;
                padding: 15px;
                border-radius: 6px;
                line-height: 1.7;
            }

            .footer {
                background-color: #1e293b;
                color: #cbd5e1;
                padding: 25px 20px;
                text-align: center;
                font-size: 14px;
            }

            .footer-logo {
                max-width: 120px;
                margin: 0 auto 15px;
                display: block;
            }

            .footer p {
                margin: 8px 0;
            }

            .footer a {
                color: #93c5fd;
                text-decoration: none;
            }

            .footer a:hover {
                text-decoration: underline;
            }

            @media (max-width: 600px) {
                .email-wrapper {
                    padding: 1rem 0;
                }

                .email-container {
                    border-radius: 0;
                }

                .header,
                .content,
                .footer {
                    padding: 20px 15px;
                }
            }
        </style>
    </head>

    <body style="margin: 0; padding: 0; background-color: #f4f4f7;">
        <div style="width: 100%; background-color: #f4f4f7;">
            <div style="display: none; font-size: 1px; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
                &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
            </div>
            <div class="email-wrapper">
                <div class="email-container">
                    <div class="header">
                        <img src="https://i.imgur.com/l72HhC8.png" height="80" width="80" alt="Justine Rhei Torres Logo"
                            class="header-logo" />
                        <h1>Portfolio Contact Form</h1>
                    </div>

                    <div class="content">
                        <h2>New Contact Form Submission</h2>

                        <div class="subject">
                            <strong>Subject:</strong> ${subject}
                        </div>

                        <p><strong>Message:</strong></p>
                        <div class="message">
                            ${message.replace(/\\n/g, '<br>')}
                        </div>

                        <!-- <p>Thank you for reaching out. I will review your message and get back to you as soon as possible.</p> -->
                    </div>

                    <div class="footer">
                        <img src="https://i.imgur.com/l72HhC8.png" height="80" width="80" alt="Justine Rhei Torres Logo"
                            class="footer-logo" />
                        <p>Justine Rhei Torres</p>
                        <p>Full-Stack Web Developer</p>
                        <p>Based in the Philippines</p>
                        <p><a href="https://rheicodes.vercel.app/" target="_blank">Visit Portfolio</a></p>
                    </div>
                </div>
            </div>
        </div>
    </body>

    </html>
  `;
};