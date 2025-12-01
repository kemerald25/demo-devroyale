# Roy

Demo of Dev Royale CLI

## Getting Started

1. Copy `.env.example` to `.env.local` and add your OnchainKit API key:
   ```
   cp .env.example .env.local
   ```

2. Install dependencies:
   ```
   npm install
   ```
   
   If you encounter dependency conflicts, try:
   ```
   npm install --legacy-peer-deps
   ```

3. Run the development server:
   ```
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy

Deploy your Mini App to any Next.js hosting platform (Vercel, etc.).

Make sure to:
- Set `NEXT_PUBLIC_ONCHAINKIT_API_KEY` in your environment variables
- Set `QUICK_AUTH_DOMAIN` to match your deployment domain for authentication
- Update the manifest at `public/.well-known/farcaster.json` with your production URLs
- Verify your manifest at [base.dev/preview](https://base.dev/preview)

## Authentication

This Mini App includes Quick Auth integration using Farcaster's identity system. Authentication is already set up:

- Frontend hook: `hooks/useQuickAuth.ts` - Custom hook for authentication
- Backend route: `app/api/auth/route.ts` - API route for JWT verification
- All pages are protected and require authentication

To configure:
1. Set `QUICK_AUTH_DOMAIN` in your environment variables to your production domain
2. The domain must match your deployment URL for authentication to work
3. Users will see a sign-in screen before accessing the app

## Features

- Feature 1
- Feature 2
