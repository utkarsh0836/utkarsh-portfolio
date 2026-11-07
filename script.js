const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
function setTheme(theme) {
  root.dataset.theme = theme;
  themeToggle.textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  try { localStorage.setItem('portfolio-theme', theme); } catch (_) {}
}
let storedTheme = 'light';
try { storedTheme = localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light'; } catch (_) {}
setTheme(storedTheme);
themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
const submitBtn = document.getElementById('submitBtn');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (document.getElementById('website').value) return;
  const cfg = window.PORTFOLIO_CONFIG || {};
  const url = (cfg.supabaseUrl || '').trim().replace(/\/$/, '');
  const key = (cfg.supabasePublishableKey || '').trim();
  if (!/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(url) || !key) {
    status.textContent = 'Contact form is not configured yet. Site owner: add your Supabase URL and publishable key to config.js.';
    return;
  }
  const payload = Object.fromEntries(new FormData(form).entries());
  delete payload.website;
  submitBtn.disabled = true;
  status.textContent = 'Sending your message…';
  try {
    const response = await fetch(`${url}/rest/v1/portfolio_messages`, {
      method: 'POST',
      headers: { 'apikey': key, 'Authorization': `Bearer ${key}`, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(`Submission failed (${response.status})`);
    status.textContent = 'Thank you! Your message has been sent.';
    form.reset();
  } catch (err) {
    status.textContent = 'Unable to send your message right now. Please try again later.';
    console.error(err);
  } finally { submitBtn.disabled = false; }
});
