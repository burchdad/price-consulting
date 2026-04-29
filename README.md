# Price Consulting, LLC Website

Premium federal consulting website built with Next.js 14 App Router, Tailwind CSS, and Framer Motion.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Pages

- /
- /about
- /services
- /approach
- /resources
- /contact

## Features

- Sticky navbar and mobile hamburger menu
- Subtle page and UI transitions
- Home page section architecture per requirements
- FAQ accordion on Resources page
- Consultation contact form UI
- Capabilities statement download CTA placeholder
- SEO metadata for all pages
- JSON-LD ProfessionalService schema
- robots.txt and sitemap.xml

## Local Development

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Run production server

```bash
npm run start
```

## Deploy to Vercel

This project is optimized for Vercel deployment.

1. Push repository to GitHub
2. Import into Vercel
3. Keep default build command: `next build`
4. Keep default output setting for Next.js

## Notes

- Contact form is wired for Formspree submission.
- Set either `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (full URL) or `NEXT_PUBLIC_FORMSPREE_FORM_ID` (just form ID) in your deployment environment.
- Capabilities statement button is currently a placeholder link.