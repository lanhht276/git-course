-- Cashback Tracker — Supabase schema
-- Run this in Supabase → SQL Editor → New query → Run.

create table if not exists public.cards (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  name text not null,
  bank text,
  cycle int not null check (cycle between 1 and 31),
  monthly_cap numeric not null default 0,
  min_spend numeric not null default 0,
  programs jsonb not null default '[]'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.logs (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade default auth.uid(),
  date date not null,
  item text not null,
  amount numeric not null,
  card_id text not null,
  note text,
  created_at timestamptz not null default now()
);

create index if not exists logs_user_date_idx on public.logs(user_id, date desc);
create index if not exists cards_user_idx on public.cards(user_id);

-- Row Level Security: mỗi user chỉ thấy và sửa dữ liệu của chính mình.
alter table public.cards enable row level security;
alter table public.logs  enable row level security;

drop policy if exists "cards_owner_all" on public.cards;
create policy "cards_owner_all" on public.cards
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

drop policy if exists "logs_owner_all" on public.logs;
create policy "logs_owner_all" on public.logs
  for all using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Auto-update updated_at on cards
create or replace function public.tg_touch_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at := now(); return new; end $$;

drop trigger if exists cards_touch on public.cards;
create trigger cards_touch before update on public.cards
  for each row execute function public.tg_touch_updated_at();
