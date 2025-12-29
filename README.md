This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Email Integration

This project includes a contact form that allows visitors to send you emails directly from the website. The form is integrated with [Brevo](https://www.brevo.com/) for email delivery.

### Setup

1. Create a Brevo account at [https://www.brevo.com/](https://www.brevo.com/)
2. Generate an API key in your Brevo dashboard
3. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Add your Brevo API key to the `.env.local` file:
   ```
   BREVO_API_KEY=your_actual_brevo_api_key_here
   BREVO_TO_EMAIL=justinerheitorres@gmail.com
   ```

### Usage

The contact form is accessible through the "Get in Touch" button in the Hero section of the website. When a visitor submits the form:

- Their name, email, subject, and message are sent to your specified email address
- Optional file attachments are included with the email
- The form includes validation to ensure all required fields are filled out correctly

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
