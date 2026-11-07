# Utkarsh Anand — React Portfolio

A modern, responsive, white-theme multi-page portfolio built with React + Vite + Motion + Lucide icons.

## Features
- Six routes: Home, About, Skills, Experience, Projects, Contact
- Icon-led top navigation; collapses on scroll to a Home shortcut
- Mobile/tablet touch menu and transparent Back to Top button
- Detailed STINS DCOD implementation experience, Snowflake Tasks and Stored Procedures, Power BI DEV → QA → SIT → UAT → PROD deployments
- Clickable email, LinkedIn and GitHub
- Supabase contact form and Edge Function AI chat integration
- HashRouter (`/#/experience`) avoids GitHub Pages 404 on refresh
- Accessible labels, responsive typography, reduced-motion support

## Run locally on Windows (VS Code)
1. Install Node.js LTS.
2. Extract this ZIP, open the project folder in VS Code.
3. Open terminal and run:
   `npm.cmd install`
   `npm.cmd run dev`
4. Open the localhost URL shown in the terminal.

## Supabase configuration
1. Copy `.env.example` to `.env`.
2. Set `VITE_SUPABASE_URL` to your project URL and `VITE_SUPABASE_PUBLISHABLE_KEY` to your **public** publishable/anon key.
3. Run `supabase/schema.sql` in the Supabase SQL editor **only after reviewing it**. If you already ran the earlier portfolio schema, don't run conflicting CREATE statements again without checking.
4. Deploy `supabase/functions/portfolio-ai/index.ts` as the `portfolio-ai` Edge Function. Configure the provider API key as a Supabase Edge Function secret (never in Vite environment variables).
5. Test the contact form and AI assistant with your Supabase project. These integrations are not activated until you complete setup.

**Security:** A public contact endpoint and AI assistant require anti-spam controls, server-side validation, rate limiting, and cost controls before public launch. Never put secret/service_role/OpenAI keys in frontend code. Review SQL Row Level Security before deployment. Public visitors should not be able to SELECT submitted contact messages. This code is a starter, not a production security audit.

## GitHub Pages (free)
1. Create or update `utkarsh0836/utkarsh-portfolio`, keeping these files at the repository root.
2. Push to `main` (or `master`). `.github/workflows/deploy.yml` builds the React app.
3. In GitHub **Settings → Pages → Build and deployment**, choose **GitHub Actions** as the source.
4. If you use Supabase, go to **Settings → Secrets and variables → Actions → Variables** and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`. These are public frontend values, not secrets.
5. View **Actions** to monitor deployment.
6. Live site URL: `https://utkarsh0836.github.io/utkarsh-portfolio/` once deployment succeeds.

For a GitHub project site, `vite.config.js` uses `base: './'` and HashRouter, so deep links work without server-side route rewrites.

## Content
Public portfolio only; avoid disclosing client-confidential details without permission. Contact: utkarsh0836a@gmail.com; LinkedIn: https://www.linkedin.com/in/utkarshanand06/
