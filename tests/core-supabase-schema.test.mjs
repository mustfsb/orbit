import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const migrationPath = path.join(
  __dirname,
  '..',
  'supabase',
  'migrations',
  '20260423000100_reconcile_core_schema.sql'
);

test('core schema reconciliation migration exists and covers required patterns', () => {
  assert.ok(
    fs.existsSync(migrationPath),
    'Expected migration file at supabase/migrations/20260423000100_reconcile_core_schema.sql'
  );

  const sql = fs.readFileSync(migrationPath, 'utf8');

  const requiredPatterns = [
    /alter table\s+public\.profiles[\s\S]*add column if not exists\s+plan\s+text\s+not null\s+default\s+'free'/i,
    /create or replace function\s+public\.handle_new_user\s*\([\s\S]*security definer set search_path = public[\s\S]*coalesce\s*\(\s*new\.raw_user_meta_data->>'plan'\s*,\s*'free'\s*\)/i,
    /alter table\s+public\.todos\s+rename column\s+title\s+to\s+text/i,
    /alter table\s+public\.todos[\s\S]*add column if not exists\s+text\s+text/i,
    /update\s+public\.todos\s+set\s+text\s*=\s*coalesce\s*\(\s*text\s*,\s*title\s*\)/i,
    /alter table\s+public\.todos[\s\S]*alter column\s+text\s+set not null/i,
    /alter table\s+public\.todos[\s\S]*add column if not exists\s+type\s+text\s+not null\s+default\s+'focus'/i,
    /check\s*\(\s*type\s+in\s*\(\s*'focus'\s*,\s*'creative'\s*,\s*'rest'\s*,\s*'admin'\s*,\s*'review'\s*,\s*'distraction'\s*\)\s*\)/i,
    /alter table\s+public\.todos[\s\S]*add column if not exists\s+position\s+integer\s+not null\s+default\s+0/i,
    /check\s*\(\s*position\s*>=\s*0\s*\)/i,
    /row_number\s*\(\s*\)\s+over\s*\(\s*partition by\s+user_id\s+order by\s+created_at\s*,\s*id\s*\)/i,
    /create index if not exists\s+todos_user_id_idx\s+on\s+public\.todos\s*\(\s*user_id\s*\)/i,
    /create index if not exists\s+todos_user_id_position_idx\s+on\s+public\.todos\s*\(\s*user_id\s*,\s*position\s*\)/i,
    /create index if not exists\s+todos_user_id_completed_idx\s+on\s+public\.todos\s*\(\s*user_id\s*,\s*completed\s*\)/i,
    /create table if not exists\s+public\.pomodoro_sessions\s*\([\s\S]*duration\s+integer\s+not null\s+check\s*\(\s*duration\s*>\s*0\s*\)[\s\S]*started_at\s+timestamp with time zone\s+not null[\s\S]*completed_at\s+timestamp with time zone\s+not null[\s\S]*status\s+text\s+not null\s+check\s*\(\s*status\s+in\s*\(\s*'completed'\s*,\s*'interrupted'\s*\)\s*\)/i,
    /create index if not exists\s+pomodoro_sessions_user_id_idx\s+on\s+public\.pomodoro_sessions\s*\(\s*user_id\s*\)/i,
    /create index if not exists\s+pomodoro_sessions_user_id_started_at_idx\s+on\s+public\.pomodoro_sessions\s*\(\s*user_id\s*,\s*started_at\s+desc\s*\)/i,
    /create index if not exists\s+pomodoro_sessions_task_id_idx\s+on\s+public\.pomodoro_sessions\s*\(\s*task_id\s*\)/i,
    /insert into\s+public\.pomodoro_sessions[\s\S]*from\s+public\.pomodoros/i,
    /greatest\s*\(\s*1\s*,\s*ceil\s*\(\s*duration_seconds\s*\/\s*60\.0\s*\)\s*\)::integer/i,
    /completed_at\s*-\s*duration_seconds\s*\*\s*interval\s+'1 second'/i,
    /drop table if exists\s+public\.pomodoros/i,
    /using\s*\(\s*\(select\s+auth\.uid\s*\(\s*\)\)\s*=\s*id\s*\)/i,
    /with check\s*\(\s*\(select\s+auth\.uid\s*\(\s*\)\)\s*=\s*id\s*\)/i,
    /using\s*\(\s*\(select\s+auth\.uid\s*\(\s*\)\)\s*=\s*user_id\s*\)/i,
    /with check\s*\(\s*\(select\s+auth\.uid\s*\(\s*\)\)\s*=\s*user_id\s*\)/i,
  ];

  for (const pattern of requiredPatterns) {
    assert.match(sql, pattern);
  }

  const targetedPolicyDrops = [
    /drop policy if exists\s+"Profiles are viewable by their owners\."\s+on\s+public\.profiles/i,
    /drop policy if exists\s+"Users can insert their own profile\."\s+on\s+public\.profiles/i,
    /drop policy if exists\s+"Users can update their own profile\."\s+on\s+public\.profiles/i,
    /drop policy if exists\s+"Users can view their own todos\."\s+on\s+public\.todos/i,
    /drop policy if exists\s+"Users can insert their own todos\."\s+on\s+public\.todos/i,
    /drop policy if exists\s+"Users can update their own todos\."\s+on\s+public\.todos/i,
    /drop policy if exists\s+"Users can delete their own todos\."\s+on\s+public\.todos/i,
    /drop policy if exists\s+"Users can view their own pomodoro sessions\."\s+on\s+public\.pomodoro_sessions/i,
    /drop policy if exists\s+"Users can insert their own pomodoro sessions\."\s+on\s+public\.pomodoro_sessions/i,
    /drop policy if exists\s+"Users can update their own pomodoro sessions\."\s+on\s+public\.pomodoro_sessions/i,
    /drop policy if exists\s+"Users can delete their own pomodoro sessions\."\s+on\s+public\.pomodoro_sessions/i,
  ];

  for (const pattern of targetedPolicyDrops) {
    assert.match(sql, pattern);
  }

  const explicitConstraintRebuilds = [
    /alter table\s+public\.todos\s+drop constraint if exists\s+todos_type_check/i,
    /alter table\s+public\.todos[\s\S]*add constraint\s+todos_type_check[\s\S]*check\s*\(\s*type\s+in\s*\(\s*'focus'\s*,\s*'creative'\s*,\s*'rest'\s*,\s*'admin'\s*,\s*'review'\s*,\s*'distraction'\s*\)\s*\)/i,
    /alter table\s+public\.todos\s+drop constraint if exists\s+todos_position_nonnegative_check/i,
    /alter table\s+public\.todos[\s\S]*add constraint\s+todos_position_nonnegative_check[\s\S]*check\s*\(\s*position\s*>=\s*0\s*\)/i,
  ];

  for (const pattern of explicitConstraintRebuilds) {
    assert.match(sql, pattern);
  }

  assert.doesNotMatch(sql, /for\s+policy_record\s+in[\s\S]*pg_policies[\s\S]*public\.(profiles|todos|pomodoro_sessions)/i);
  assert.doesNotMatch(sql, /create table if not exists\s+public\.(goals|journal_entries)/i);
});
