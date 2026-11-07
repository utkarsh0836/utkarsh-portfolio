# Utkarsh Anand — Portfolio Website

Responsive white-first portfolio with a persistent light/dark switch, About, Skills, Experience, Projects and a contact form. No personal email address is displayed.

## Preview locally

Open `index.html` in a browser. Theme switching works without setup. The contact form requires Supabase configuration and a web server (recommended).

For local hosting, from this folder run:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000

## Configure the contact form

1. In Supabase Dashboard, select your project.
2. Open SQL Editor and run the contents of `supabase.sql`.
3. Go to Project Settings > Data API (or API) and copy the Project URL.
4. Go to Project Settings > API Keys and copy the publishable key (or legacy anon key).
5. Paste both values into `config.js`.
6. Test a message, then check Supabase > Table Editor > `portfolio_messages`.

**Security:** The publishable/anon key is designed for frontend use with RLS; NEVER expose a `service_role` key, secret key or database password. RLS permits anonymous INSERT only, not public SELECT. Public forms can still receive spam; for a production site use CAPTCHA and server-side rate limiting via an Edge Function. Do not collect sensitive personal data.

## Free deployment

### Netlify

1. Visit https://app.netlify.com/drop
2. Drag and drop the unzipped `utkarsh-portfolio` folder.
3. Netlify gives you a public site URL.

### GitHub Pages

1. Create a public repository and upload the files in this folder to its root.
2. Go to repository Settings > Pages.
3. Select Deploy from a branch, branch `main`, folder `/ (root)`.
4. Wait for the published site URL.

## Customize

Edit text in `index.html`, colors in `styles.css`, and the Supabase connection in `config.js`.

## Notes

The website uses plain HTML, CSS and JavaScript: no npm, build tools, paid hosting, or frontend framework required. The contact form stores messages in Supabase and does not automatically send emails.
