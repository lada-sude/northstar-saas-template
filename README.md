# Northstar

Northstar is a premium Next.js + Supabase + Tailwind SaaS starter template designed for founders who want a polished product foundation without building everything from scratch.

## Features

- Next.js App Router with TypeScript
- Supabase authentication and Google OAuth flow
- Protected dashboard routes
- Premium landing page and dashboard template
- Reusable UI components: button, card, input, avatar, modal, badge, dropdown, toast, skeleton
- Dark/light mode support
- Responsive mobile-first design

## Quick start

1. Install dependencies
   ```bash
   npm install
   ```

2. Copy the environment file
   ```bash
   cp .env.example .env.local
   ```

3. Fill in your Supabase credentials
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

## Supabase setup

1. Create a Supabase project.
2. Enable Google OAuth in Authentication > Providers.
3. Create a `profiles` table with at least these columns:
   - `id` uuid (references auth.users)
   - `full_name` text
   - `avatar_url` text
   - `company` text
   - `website` text
4. Make sure the RLS policies allow the current user to read and update their own profile.

## Google OAuth setup

1. In Supabase, go to Authentication > Providers.
2. Enable Google.
3. Add your Google client ID and secret.
4. Set the redirect URL to your app domain plus `/dashboard`.

## Vercel deployment

1. Push your repository to GitHub.
2. Import the project into Vercel.
3. Add the environment variables from `.env.local`.
4. Deploy and verify your domain.

## Customization guide

- Replace the branding in the landing page components and layout metadata.
- Update the dashboard data and dummy analytics in the dashboard components.
- Add your product-specific pages, pricing plans, and user workflows.
- Swap the placeholder footer and CTA copy with your own offering.
