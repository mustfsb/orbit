alter table public.profiles
  add column if not exists plan text not null default 'free';

update public.profiles
set plan = 'free'
where plan is null;

alter table public.profiles
  alter column plan set default 'free';

alter table public.profiles
  alter column plan set not null;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, avatar_url, plan)
  values (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url',
    coalesce(new.raw_user_meta_data->>'plan', 'free')
  );
  return new;
end;
$$;

create table if not exists public.todos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  text text not null,
  completed boolean not null default false,
  type text not null default 'focus',
  position integer not null default 0,
  created_at timestamp with time zone not null default timezone('utc', now()),
  constraint todos_type_check check (type in ('focus', 'creative', 'rest', 'admin', 'review', 'distraction')),
  constraint todos_position_nonnegative_check check (position >= 0)
);

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'todos'
      and column_name = 'title'
  ) and not exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'todos'
      and column_name = 'text'
  ) then
    alter table public.todos rename column title to text;
  end if;
end
$$;

alter table public.todos
  add column if not exists text text;

do $$
begin
  if exists (
    select 1
    from information_schema.columns
    where table_schema = 'public'
      and table_name = 'todos'
      and column_name = 'title'
  ) then
    execute 'update public.todos set text = coalesce(text, title) where text is null';
  end if;
end
$$;

update public.todos
set text = ''
where text is null;

alter table public.todos
  alter column text set not null;

alter table public.todos
  add column if not exists completed boolean not null default false;

update public.todos
set completed = false
where completed is null;

alter table public.todos
  alter column completed set default false;

alter table public.todos
  alter column completed set not null;

alter table public.todos
  add column if not exists type text not null default 'focus';

update public.todos
set type = 'focus'
where type is null
   or type not in ('focus', 'creative', 'rest', 'admin', 'review', 'distraction');

alter table public.todos
  alter column type set default 'focus';

alter table public.todos
  alter column type set not null;

alter table public.todos
  drop constraint if exists todos_type_check;

alter table public.todos
  add constraint todos_type_check
  check (type in ('focus', 'creative', 'rest', 'admin', 'review', 'distraction'));

alter table public.todos
  add column if not exists position integer not null default 0;

with ranked_todos as (
  select
    id,
    row_number() over (partition by user_id order by created_at, id) - 1 as next_position
  from public.todos
)
update public.todos
set position = ranked_todos.next_position
from ranked_todos
where public.todos.id = ranked_todos.id
  and public.todos.position is distinct from ranked_todos.next_position;

alter table public.todos
  alter column position set default 0;

alter table public.todos
  alter column position set not null;

alter table public.todos
  drop constraint if exists todos_position_nonnegative_check;

alter table public.todos
  add constraint todos_position_nonnegative_check
  check (position >= 0);

alter table public.todos
  add column if not exists created_at timestamp with time zone not null default timezone('utc', now());

create index if not exists todos_user_id_idx on public.todos (user_id);
create index if not exists todos_user_id_position_idx on public.todos (user_id, position);
create index if not exists todos_user_id_completed_idx on public.todos (user_id, completed);

create table if not exists public.pomodoro_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  task_id uuid references public.todos(id) on delete set null,
  duration integer not null check (duration > 0),
  started_at timestamp with time zone not null,
  completed_at timestamp with time zone not null,
  status text not null check (status in ('completed', 'interrupted')),
  created_at timestamp with time zone not null default timezone('utc', now())
);

create index if not exists pomodoro_sessions_user_id_idx on public.pomodoro_sessions (user_id);
create index if not exists pomodoro_sessions_user_id_started_at_idx on public.pomodoro_sessions (user_id, started_at desc);
create index if not exists pomodoro_sessions_task_id_idx on public.pomodoro_sessions (task_id);

do $$
begin
  if exists (
    select 1
    from information_schema.tables
    where table_schema = 'public'
      and table_name = 'pomodoros'
  ) then
    insert into public.pomodoro_sessions (
      id,
      user_id,
      task_id,
      duration,
      started_at,
      completed_at,
      status,
      created_at
    )
    select
      id,
      user_id,
      task_id,
      greatest(1, ceil(duration_seconds / 60.0))::integer,
      completed_at - duration_seconds * interval '1 second',
      completed_at,
      'completed',
      completed_at
    from public.pomodoros;
  end if;
end
$$;

drop table if exists public.pomodoros;

alter table public.profiles enable row level security;
alter table public.todos enable row level security;
alter table public.pomodoro_sessions enable row level security;

drop policy if exists "Profiles are viewable by their owners." on public.profiles;
drop policy if exists "Users can insert their own profile." on public.profiles;
drop policy if exists "Users can update their own profile." on public.profiles;

create policy "Profiles are viewable by their owners."
  on public.profiles for select
  using ((select auth.uid()) = id);

create policy "Users can insert their own profile."
  on public.profiles for insert
  with check ((select auth.uid()) = id);

create policy "Users can update their own profile."
  on public.profiles for update
  using ((select auth.uid()) = id);

drop policy if exists "Users can view their own todos." on public.todos;
drop policy if exists "Users can insert their own todos." on public.todos;
drop policy if exists "Users can update their own todos." on public.todos;
drop policy if exists "Users can delete their own todos." on public.todos;

create policy "Users can view their own todos."
  on public.todos for select
  using ((select auth.uid()) = user_id);

create policy "Users can insert their own todos."
  on public.todos for insert
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own todos."
  on public.todos for update
  using ((select auth.uid()) = user_id);

create policy "Users can delete their own todos."
  on public.todos for delete
  using ((select auth.uid()) = user_id);

drop policy if exists "Users can view their own pomodoro sessions." on public.pomodoro_sessions;
drop policy if exists "Users can insert their own pomodoro sessions." on public.pomodoro_sessions;
drop policy if exists "Users can update their own pomodoro sessions." on public.pomodoro_sessions;
drop policy if exists "Users can delete their own pomodoro sessions." on public.pomodoro_sessions;

create policy "Users can view their own pomodoro sessions."
  on public.pomodoro_sessions for select
  using ((select auth.uid()) = user_id);

create policy "Users can insert their own pomodoro sessions."
  on public.pomodoro_sessions for insert
  with check ((select auth.uid()) = user_id);

create policy "Users can update their own pomodoro sessions."
  on public.pomodoro_sessions for update
  using ((select auth.uid()) = user_id);

create policy "Users can delete their own pomodoro sessions."
  on public.pomodoro_sessions for delete
  using ((select auth.uid()) = user_id);
