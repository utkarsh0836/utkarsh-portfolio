-- Run this in Supabase SQL Editor.
-- Contact submissions can be inserted anonymously, but never read publicly.
create table if not exists public.portfolio_messages (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(full_name) between 1 and 120),
  email text not null check (char_length(email) between 3 and 254),
  subject text not null check (char_length(subject) between 1 and 200),
  message text not null check (char_length(message) between 1 and 5000),
  created_at timestamptz not null default now()
);
alter table public.portfolio_messages enable row level security;
revoke all on table public.portfolio_messages from anon, authenticated;
grant insert on table public.portfolio_messages to anon, authenticated;
drop policy if exists "Visitors can submit contact messages" on public.portfolio_messages;
create policy "Visitors can submit contact messages"
on public.portfolio_messages for insert to anon, authenticated
with check (true);
-- Read messages in Supabase Table Editor as project owner.
-- For production use, add CAPTCHA / rate limiting via an Edge Function.
