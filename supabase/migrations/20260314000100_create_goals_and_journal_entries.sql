create table if not exists public.goals (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  description text,
  target_date date,
  progress integer not null default 0 check (progress >= 0 and progress <= 100),
  status text not null default 'active' check (status in ('active', 'completed')),
  created_at timestamp with time zone not null default timezone('utc', now()),
  updated_at timestamp with time zone not null default timezone('utc', now()),
  completed_at timestamp with time zone
);

create index if not exists goals_user_id_idx on public.goals(user_id);
create index if not exists goals_status_idx on public.goals(status);

alter table public.goals enable row level security;

create policy "Users can view their own goals."
  on public.goals for select
  using (auth.uid() = user_id);

create policy "Users can insert their own goals."
  on public.goals for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own goals."
  on public.goals for update
  using (auth.uid() = user_id);

create policy "Users can delete their own goals."
  on public.goals for delete
  using (auth.uid() = user_id);

create table if not exists public.journal_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  entry_date date not null,
  accomplished text not null default '',
  tomorrow text not null default '',
  rating integer not null default 0 check (rating >= 0 and rating <= 5),
  mood text check (mood in ('calm', 'focused', 'energized', 'reflective', 'stretched')),
  created_at timestamp with time zone not null default timezone('utc', now()),
  updated_at timestamp with time zone not null default timezone('utc', now()),
  unique (user_id, entry_date)
);

create index if not exists journal_entries_user_id_idx on public.journal_entries(user_id);
create index if not exists journal_entries_entry_date_idx on public.journal_entries(entry_date desc);

alter table public.journal_entries enable row level security;

create policy "Users can view their own journal entries."
  on public.journal_entries for select
  using (auth.uid() = user_id);

create policy "Users can insert their own journal entries."
  on public.journal_entries for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own journal entries."
  on public.journal_entries for update
  using (auth.uid() = user_id);

create policy "Users can delete their own journal entries."
  on public.journal_entries for delete
  using (auth.uid() = user_id);
