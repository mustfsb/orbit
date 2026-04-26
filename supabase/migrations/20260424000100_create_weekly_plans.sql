-- Create weekly_plans table for synced planner state
create table if not exists public.weekly_plans (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  plan_data jsonb,
  chat_history jsonb not null default '[]'::jsonb,
  completions jsonb not null default '{}'::jsonb,
  goal text,
  pdf_name text,
  pdf_data jsonb,
  created_at timestamp with time zone not null default timezone('utc', now()),
  updated_at timestamp with time zone not null default timezone('utc', now()),
  unique (user_id)
);

create index if not exists weekly_plans_user_id_idx on public.weekly_plans(user_id);

alter table public.weekly_plans enable row level security;

create policy "Users can view their own weekly plan."
  on public.weekly_plans for select
  using (auth.uid() = user_id);

create policy "Users can insert their own weekly plan."
  on public.weekly_plans for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own weekly plan."
  on public.weekly_plans for update
  using (auth.uid() = user_id);

create policy "Users can delete their own weekly plan."
  on public.weekly_plans for delete
  using (auth.uid() = user_id);
