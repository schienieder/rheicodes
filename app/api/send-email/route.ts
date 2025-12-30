
import { NextRequest, NextResponse } from 'next/server';
import { contactEmailTemplate } from '../../../templates/contact-email-template';

export async function POST(req: NextRequest) {
    try {
        // Parse form data
        const formData = await req.formData();
        const subject = formData.get('subject') as string;
        const message = formData.get('message') as string;

        // Get all files from the form data
        const files = formData.getAll('file') as File[];

        // Validate required fields
        if (!subject || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Prepare email data for Brevo
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

        // Handle file attachments if any
        if (files && files.length > 0) {
            const attachments = [];

            for (const file of files) {
                if (file.size > 0) { // Only process non-empty files
                    try {
                        // Convert file to ArrayBuffer and then to base64
                        const buffer = await file.arrayBuffer();
                        const base64 = Buffer.from(buffer).toString('base64');

                        attachments.push({
                            name: file.name,
                            content: base64,
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

            if (attachments.length > 0) {
                emailData.attachment = attachments;
            }
        }

        // Log the email data for debugging (remove in production)
        console.log('Sending email with data:', {
            ...emailData,
            attachmentCount: emailData.attachment ? emailData.attachment.length : 0,
            // Don't log the API key
            'api-key': '[HIDDEN]',
        });

        // Send email via Brevo API
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
            console.error('Status:', brevoResponse.status);
            console.error('Status Text:', brevoResponse.statusText);

            // Get the raw error text as well
            const errorText = await brevoResponse.text().catch(() => '');
            console.error('Raw error response:', errorText);

            return NextResponse.json(
                { error: 'Failed to send email via Brevo', details: errorData, status: brevoResponse.status },
                { status: 500 }
            );
        }

        const result = await brevoResponse.json();
        console.log('Email sent successfully:', result);

        return NextResponse.json({ success: true, messageId: result.messageId });
    } catch (error) {
        console.error('Error processing email request:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
