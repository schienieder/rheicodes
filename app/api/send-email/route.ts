
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { contactEmailTemplate } from '../../../templates/contact-email-template';

// ==================== SMTP Implementation ====================
async function sendViaSmtp(
    subject: string,
    message: string,
    attachments: { filename: string; content: Buffer }[]
) {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: process.env.NEXT_PUBLIC_SMTP_USERNAME,
            pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
        },
    });

    const mailOptions: nodemailer.SendMailOptions = {
        from: `"Portfolio Contact Form" <${process.env.NEXT_PUBLIC_SMTP_USERNAME}>`,
        to: process.env.NEXT_PUBLIC_SMTP_USERNAME,
        subject: subject,
        text: `Contact form submission:\n\n${message}`,
        html: contactEmailTemplate(subject, message),
    };

    if (attachments.length > 0) {
        mailOptions.attachments = attachments;
    }

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
}

// ==================== Brevo Implementation ====================
async function sendViaBrevo(
    subject: string,
    message: string,
    attachments: { name: string; content: string }[]
) {
    const emailData: any = {
        sender: {
            name: process.env.BREVO_SENDER_NAME || 'Portfolio Contact Form',
            email: process.env.BREVO_SENDER_EMAIL || 'justinerheitorres@gmail.com',
        },
        to: [
            {
                email: process.env.BREVO_TO_EMAIL || 'justinerheitorres@gmail.com',
                name: 'Justine Rhei Torres'
            }
        ],
        subject: subject,
        textContent: `Contact form submission:\n\n${message}`,
        htmlContent: contactEmailTemplate(subject, message),
    };

    if (attachments.length > 0) {
        emailData.attachment = attachments;
    }

    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'api-key': process.env.BREVO_API_KEY!,
        },
        body: JSON.stringify(emailData),
    });

    if (!brevoResponse.ok) {
        const errorData = await brevoResponse.json().catch(() => ({}));
        console.error('Brevo API Error:', errorData);
        throw new Error(`Brevo API error: ${brevoResponse.status}`);
    }

    const result = await brevoResponse.json();
    return { success: true, messageId: result.messageId };
}

// ==================== Main Route Handler ====================
export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;
        const files = formData.getAll('file') as File[];

        if (!subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Process file attachments
        const smtpAttachments: { filename: string; content: Buffer }[] = [];
        const brevoAttachments: { name: string; content: string }[] = [];

        if (files && files.length > 0) {
            for (const file of files) {
                if (file.size > 0) {
                    try {
                        const buffer = await file.arrayBuffer();
                        smtpAttachments.push({
                            filename: file.name,
                            content: Buffer.from(buffer),
                        });
                        brevoAttachments.push({
                            name: file.name,
                            content: Buffer.from(buffer).toString('base64'),
                        });
                    } catch (fileError) {
                        console.error(`Error processing file ${file.name}:`, fileError);
                        return NextResponse.json(
                            { error: `Failed to process file: ${file.name}` },
                            { status: 400 }
                        );
                    }
                }
            }
        }

        // Switch provider via EMAIL_PROVIDER env var — defaults to "smtp"
        const provider = process.env.EMAIL_PROVIDER || 'smtp';

        let result;
        if (provider === 'brevo') {
            console.log('Sending email via Brevo...');
            result = await sendViaBrevo(subject, message, brevoAttachments);
        } else {
            console.log('Sending email via SMTP...');
            result = await sendViaSmtp(subject, message, smtpAttachments);
        }

        console.log('Email sent successfully:', result);
        return NextResponse.json(result);
    } catch (error) {
        console.error('Error processing email request:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
