import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    try {
        // Test the Brevo API key by fetching account info
        const response = await fetch('https://api.brevo.com/v3/account', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'api-key': process.env.BREVO_API_KEY!,
            },
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Brevo Account API Error:', errorData);
            return NextResponse.json(
                { success: false, error: 'Failed to verify Brevo API key', details: errorData },
                { status: response.status }
            );
        }

        const accountData = await response.json();
        console.log('Brevo account data:', accountData);

        return NextResponse.json({ 
            success: true, 
            message: 'Brevo API key is valid',
            account: {
                email: accountData.email,
                firstName: accountData.firstName,
                lastName: accountData.lastName,
                company: accountData.companyName
            }
        });
    } catch (error) {
        console.error('Error testing Brevo API:', error);
        return NextResponse.json(
            { success: false, error: 'Internal server error during Brevo test' },
            { status: 500 }
        );
    }
}