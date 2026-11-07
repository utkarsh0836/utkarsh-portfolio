-- Run in Supabase SQL Editor. This is a new table; it does not modify CourseHub tables.
create table if not exists public.contact_messages (
 id uuid primary key default gen_random_uuid(),
 name text not null check (char_length(trim(name)) between 1 and 120),
 email text not null check (char_length(email) between 5 and 254),
 subject text not null check (char_length(trim(subject)) between 1 and 160),
 message text not null check (char_length(trim(message)) between 1 and 4000),
 created_at timestamptz not null default now()
);
alter table public.contact_messages enable row level security;
revoke all on public.contact_messages from anon, authenticated;
grant insert on public.contact_messages to anon, authenticated;
drop policy if exists "portfolio_public_contact_insert" on public.contact_messages;
create policy "portfolio_public_contact_insert" on public.contact_messages for insert to anon, authenticated with check (true);
-- No SELECT/UPDATE/DELETE policy: visitors cannot read submitted messages.
-- View messages from the authenticated Supabase Dashboard SQL Editor.
