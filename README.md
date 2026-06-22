# Alucard Hosting

A simple bot hosting landing site for free-tier hosting and bot owners.

## Features

- Branding for Alucard Hosting
- Clean landing page with hosting features
- Contact form powered by Express
- Easy local setup and deployment

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the site:
   ```bash
   npm start
   ```
3. Visit `http://localhost:3000`

## Environment

Create a `.env` file in the project root with the following values:

```env
PORT=3000
CONTACT_EMAIL=contact@alucard-hosting.com
```

If you use a hosting provider, update `PORT` and `CONTACT_EMAIL` as needed.

## Deployment

Deploy to any Node-capable host such as Vercel, Render, Railway, or a VPS.

### Vercel

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run:
   ```bash
   vercel --prod
   ```

### Local custom domain setup

If you want to use your own domain, configure DNS with your host and update the domain settings in your deployment provider.

### Bot embed widget

Use the iframe example from the landing page to embed your bot on external sites.
