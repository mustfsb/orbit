# Core Stabilization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task by task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make Orbit's authenticated focus loop reliable by introducing source-controlled schema definitions, canonical task routing, and working verification commands.

**Architecture:** This phase does not add new product modules. Instead, it formalizes the existing `todos` and `pomodoro_sessions` dependencies in migration files, defines standard repository verification commands, canonicalizes the `/tasks` surface under `/todos`, and documents the current persistence model so later phases can build on a stable baseline.

**Tech Stack:** Next.js App Router, React 18, TypeScript, Supabase PostgreSQL, Supabase Auth/RLS, Node `node:test`

---

### Task 1: Add Repository Verification Scripts

**Files:**
- Create: `tests/repo-tooling.test.mjs`
- Modify: `package.json`

- [ ] **Step 1: Write the failing test**

```js
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const packageJson = JSON.parse(
  readFileSync(new URL("../package.json", import.meta.url), "utf8")
);

test("package.json exposes the standard verification scripts", () => {
  assert.equal(packageJson.scripts.test, "node --test tests/*.test.mjs");
  assert.equal(packageJson.scripts.typecheck, "tsc --noEmit");
  assert.equal(packageJson.scripts.verify, "npm run typecheck && npm run lint && npm test");
});
```

- [ ] **Step 2: Run the test to confirm the current failure**

Run: `node --test tests/repo-tooling.test.mjs`
Expected: FAIL because `packageJson.scripts.test`, `typecheck`, and `verify` are currently `undefined`

- [ ] **Step 3: Implement the minimal fix**

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "node --test tests/*.test.mjs",
    "typecheck": "tsc --noEmit",
    "verify": "npm run typecheck && npm run lint && npm test"
  }
}
```

- [ ] **Step 4: Re-run verification and confirm success**

Run: `node --test tests/repo-tooling.test.mjs`
Expected: PASS

Run: `npm test`
Expected: PASS, with all existing `tests/*.test.mjs` files executed through the new script

- [ ] **Step 5: Commit**

```bash
git add package.json tests/repo-tooling.test.mjs
git commit -m "chore: add repo verification scripts"
```

### Task 2: Add Canonical Supabase Migrations for Todos and Sessions

**Files:**
- Create: `supabase/migrations/20260423000100_create_todos_and_pomodoro_sessions.sql`
- Create: `tests/core-supabase-schema.test.mjs`
- Review: `src/context/task-context.tsx`
- Review: `src/components/pomodoro-timer.tsx`
- Review: `src/context/goals-context.tsx`
- Review: `src/components/dashboard/today-stats.tsx`

- [ ] **Step 1: Write the failing test**

```js
import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const migrationPath = new URL(
  "../supabase/migrations/20260423000100_create_todos_and_pomodoro_sessions.sql",
  import.meta.url
);

test("core schema migration defines todos and pomodoro sessions with RLS", () => {
  assert.equal(existsSync(migrationPath), true);

  const sql = readFileSync(migrationPath, "utf8");

  assert.match(sql, /create table if not exists public\.todos/i);
  assert.match(
    sql,
    /type text not null default 'focus' check \(type in \('focus', 'creative', 'rest', 'admin', 'review', 'distraction'\)\)/i
  );
  assert.match(sql, /alter table public\.todos enable row level security;/i);

  assert.match(sql, /create table if not exists public\.pomodoro_sessions/i);
  assert.match(sql, /started_at timestamp with time zone not null/i);
  assert.match(
    sql,
    /status text not null default 'completed' check \(status in \('completed', 'interrupted'\)\)/i
  );
  assert.match(
    sql,
    /create index if not exists pomodoro_sessions_user_id_started_at_idx on public\.pomodoro_sessions\(user_id, started_at desc\);/i
  );
  assert.match(sql, /alter table public\.pomodoro_sessions enable row level security;/i);
});
```

- [ ] **Step 2: Run the test to confirm the current failure**

Run: `node --test tests/core-supabase-schema.test.mjs`
Expected: FAIL because the migration file does not exist yet

- [ ] **Step 3: Implement the minimal migration**

```sql
create table if not exists public.todos (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  text text not null,
  completed boolean not null default false,
  type text not null default 'focus' check (type in ('focus', 'creative', 'rest', 'admin', 'review', 'distraction')),
  position integer not null default 0 check (position >= 0),
  created_at timestamp with time zone not null default timezone('utc', now())
);

create index if not exists todos_user_id_idx on public.todos(user_id);
create index if not exists todos_user_id_position_idx on public.todos(user_id, position);
create index if not exists todos_user_id_completed_idx on public.todos(user_id, completed);

alter table public.todos enable row level security;

create policy "Users can view their own todos."
  on public.todos for select
  using (auth.uid() = user_id);

create policy "Users can insert their own todos."
  on public.todos for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own todos."
  on public.todos for update
  using (auth.uid() = user_id);

create policy "Users can delete their own todos."
  on public.todos for delete
  using (auth.uid() = user_id);

create table if not exists public.pomodoro_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  task_id uuid references public.todos(id) on delete set null,
  duration integer not null check (duration > 0),
  started_at timestamp with time zone not null,
  completed_at timestamp with time zone not null,
  status text not null default 'completed' check (status in ('completed', 'interrupted')),
  created_at timestamp with time zone not null default timezone('utc', now()),
  check (completed_at >= started_at)
);

create index if not exists pomodoro_sessions_user_id_idx on public.pomodoro_sessions(user_id);
create index if not exists pomodoro_sessions_user_id_started_at_idx on public.pomodoro_sessions(user_id, started_at desc);
create index if not exists pomodoro_sessions_task_id_idx on public.pomodoro_sessions(task_id);

alter table public.pomodoro_sessions enable row level security;

create policy "Users can view their own pomodoro sessions."
  on public.pomodoro_sessions for select
  using (auth.uid() = user_id);

create policy "Users can insert their own pomodoro sessions."
  on public.pomodoro_sessions for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own pomodoro sessions."
  on public.pomodoro_sessions for update
  using (auth.uid() = user_id);

create policy "Users can delete their own pomodoro sessions."
  on public.pomodoro_sessions for delete
  using (auth.uid() = user_id);
```

- [ ] **Step 4: Re-run verification and confirm success**

Run: `node --test tests/core-supabase-schema.test.mjs`
Expected: PASS

Run: `npm test`
Expected: PASS, including the new schema smoke test alongside the existing landing tests

- [ ] **Step 5: Commit**

```bash
git add supabase/migrations/20260423000100_create_todos_and_pomodoro_sessions.sql tests/core-supabase-schema.test.mjs
git commit -m "feat: add core Supabase tables"
```

### Task 3: Canonicalize the Task Route

**Files:**
- Create: `tests/tasks-route-canonical.test.mjs`
- Modify: `src/app/tasks/page.tsx`
- Review: `src/components/navbar.tsx`

- [ ] **Step 1: Write the failing test**

```js
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const tasksPage = readFileSync(new URL("../src/app/tasks/page.tsx", import.meta.url), "utf8");
const navbar = readFileSync(new URL("../src/components/navbar.tsx", import.meta.url), "utf8");

test("legacy /tasks route redirects to /todos and navbar points to the canonical route", () => {
  assert.match(tasksPage, /import\s+\{\s*redirect\s*\}\s+from\s+"next\/navigation"/);
  assert.match(tasksPage, /redirect\("\/todos"\)/);
  assert.doesNotMatch(tasksPage, /TodoList/);

  assert.match(navbar, /\{ name: "Todos", href: "\/todos" \}/);
  assert.doesNotMatch(navbar, /href: "\/tasks"/);
});
```

- [ ] **Step 2: Run the test to confirm the current failure**

Run: `node --test tests/tasks-route-canonical.test.mjs`
Expected: FAIL because `src/app/tasks/page.tsx` still renders `TodoList` directly

- [ ] **Step 3: Implement the minimal fix**

```tsx
import { redirect } from "next/navigation";

export default function TasksPage() {
  redirect("/todos");
}
```

- [ ] **Step 4: Re-run verification and confirm success**

Run: `node --test tests/tasks-route-canonical.test.mjs`
Expected: PASS

Run: `npm test`
Expected: PASS, with the new route canonicalization test included

- [ ] **Step 5: Commit**

```bash
git add src/app/tasks/page.tsx tests/tasks-route-canonical.test.mjs
git commit -m "refactor: canonicalize the tasks route"
```

### Task 4: Document the Current Persistence Model

**Files:**
- Create: `docs/architecture/current-state.md`
- Create: `tests/current-state-doc.test.mjs`
- Review: `docs/vision/product-vision.md`
- Review: `supabase/migrations/20240113000000_create_profiles.sql`
- Review: `supabase/migrations/20260314000100_create_goals_and_journal_entries.sql`
- Review: `supabase/migrations/20260423000100_create_todos_and_pomodoro_sessions.sql`

- [ ] **Step 1: Write the failing test**

```js
import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const docPath = new URL("../docs/architecture/current-state.md", import.meta.url);

test("current-state doc separates synced and local-only domains", () => {
  assert.equal(existsSync(docPath), true);

  const doc = readFileSync(docPath, "utf8");

  assert.match(doc, /^# Orbit Current State$/m);
  assert.match(doc, /## Synced Domains/);
  assert.match(doc, /## Local-Only Domains/);
  assert.match(doc, /## Canonical Routes/);
  assert.match(doc, /## Known Gaps/);
  assert.match(doc, /`todos`/);
  assert.match(doc, /`pomodoro_sessions`/);
});
```

- [ ] **Step 2: Run the test to confirm the current failure**

Run: `node --test tests/current-state-doc.test.mjs`
Expected: FAIL because `docs/architecture/current-state.md` does not exist yet

- [ ] **Step 3: Implement the minimal documentation**

```md
# Orbit Current State

## Synced Domains

- `profiles`
- `goals`
- `journal_entries`
- `todos`
- `pomodoro_sessions`

## Local-Only Domains

- Planner current plan, chat history, and plan completions
- Settings, including the current Gemini API key field
- Library pins
- Daily intentions
- Reward visibility markers
- Landing theme

## Canonical Routes

- Public marketing: `/`
- Authenticated task ledger: `/todos`
- Focus execution: `/dashboard` and `/timer`
- Planner: `/planner`
- Goals: `/goals`
- Journal: `/journal`
- Analytics: `/analytics`
- Library: `/library`
- Settings: `/settings`

## Known Gaps

- `/tasks` should remain only as a legacy redirect to `/todos`
- `/landing` still duplicates the public marketing funnel and should be consolidated in a later phase
- Planner state is still local-only and should move to synced persistence in a later phase
- BYO Gemini key handling should move out of generic localStorage before broader integrations
```

- [ ] **Step 4: Re-run verification and confirm success**

Run: `node --test tests/current-state-doc.test.mjs`
Expected: PASS

Run: `npm test`
Expected: PASS, with the new current-state doc smoke test included

- [ ] **Step 5: Commit**

```bash
git add docs/architecture/current-state.md tests/current-state-doc.test.mjs
git commit -m "docs: add current-state architecture reference"
```

### Task 5: Run Full Verification

**Files:**
- Modify: none

- [ ] **Step 1: Run the full repository verification suite**

Run: `npm run verify`
Expected: PASS, with `typecheck`, `lint`, and `npm test` all succeeding in sequence

- [ ] **Step 2: Run the production build**

Run: `npm run build`
Expected: PASS with `Compiled successfully` in the output and all app routes built

- [ ] **Step 3: Confirm the worktree is clean after the task-level commits**

Run: `git status --short`
Expected: no output

- [ ] **Step 4: Inspect the last four commits for clear handoff history**

Run: `git log --oneline -4`
Expected: four focused commits matching the task boundaries above
