# Orbit Tech Debt and Architecture Report

## Executive Summary

Orbit has strong product direction, but repository-level technical debt is concentrated in three areas:

- a schema and migration model without a reliable source of truth
- a fragmented persistence model split between `localStorage` and Supabase
- weak verification and documentation discipline

The primary risk today is not an isolated component bug. The larger risk is that the product does not have a clear, reproducible definition of which data lives where, and that state cannot be fully reconstructed from source control.

## Priority Summary

**P0**

- Missing checked-in migrations for `todos` and `pomodoro_sessions`
- Planner is still local-only even though it is used by core product surfaces
- Gemini API key is stored inside a generic settings `localStorage` blob
- Planner API contract depends on regex-based parsing
- Duplicate public/auth route families (`/` and `/landing`)
- Missing tests for core product flows
- `README.md` is still the default Next.js README

**P1**

- Current-state sections in `docs/ORBIT_VISION.md` are stale
- Handwritten TypeScript types are not tied to the schema
- Duplicate `/tasks` and `/todos` surfaces
- Business logic is embedded in React providers and client components
- Redirect `next` parameter is not sanitized
- Middleware fails open on error
- Shared authenticated layout structure is not centralized enough

**P2**

- Ad hoc `localStorage` policy
- Fragmented error handling (`console.error`, `alert`, `confirm`)
- Security headers and hardening policy are not visible in the repo

## 1. Data Model and Schema Drift

### 1. Missing migrations for active tables

**Problem**

The codebase actively queries the `todos` and `pomodoro_sessions` tables, but `supabase/migrations/` does not contain the SQL files that create them.

**Impact**

- Clean environment setup cannot be reproduced from source control
- Schema drift risk increases across development, preview, and production environments
- RLS, indexes, and constraint behavior remain implicit rather than defined

**Recommendation**

- Add canonical migrations for `public.todos` and `public.pomodoro_sessions`
- Define indexes, foreign keys, and RLS policies in the same migration set
- Align schema field names with the fields the code actually uses

**Priority:** P0

**References**

- `src/context/task-context.tsx`
- `src/components/pomodoro-timer.tsx`
- `src/context/goals-context.tsx`
- `src/components/dashboard/today-stats.tsx`
- `supabase/migrations/`

### 2. Vision doc is not reliable for current-state reference

**Problem**

`docs/ORBIT_VISION.md` is currently trying to serve as both an aspirational roadmap and a current-state reference. As a result, parts of its schema and routing details no longer match the repository.

**Impact**

- Future implementation work may start from incorrect assumptions
- New migration or integration work may rely on stale information

**Recommendation**

- Split current-state documentation from vision and roadmap documentation
- Ensure the current-state document only includes facts verified against code and migrations

**Priority:** P1

**References**

- `docs/ORBIT_VISION.md`
- `supabase/migrations/20260314000100_create_goals_and_journal_entries.sql`
- `src/components/pomodoro-timer.tsx`

### 3. Persistence types are not schema-derived

**Problem**

TypeScript persistence types are handwritten rather than generated from the database schema.

**Impact**

- TypeScript can silently drift behind schema changes
- Shape mismatches between code and tables become harder to detect

**Recommendation**

- Adopt Supabase generated types
- Keep UI-level helper types where useful, but derive persistence shapes from the generated schema

**Priority:** P1

**References**

- `src/lib/goals.ts`
- `src/lib/journal.ts`
- `src/context/task-context.tsx`

## 2. Persistence Model Inconsistency

### 4. Planner is a core product surface but remains local-only

**Problem**

Planner state is currently stored in browser `localStorage`, including:

- current plan
- chat history
- plan completions

**Impact**

- Plans are lost when the user changes devices
- Dashboard and Library depend on planner state that exists only on one device
- The signed-in product experience feels incomplete

**Recommendation**

- Make an explicit product decision: should Planner be local-only or synced?
- Given current product positioning, Planner should likely become Supabase-backed

**Priority:** P0

**References**

- `src/app/planner/page.tsx`
- `src/lib/library.ts`
- `src/components/dashboard/next-up.tsx`

### 5. Settings store includes secret-like data

**Problem**

`geminiApiKey` is stored inside the `orbit-settings` `localStorage` blob.

**Impact**

- UI preferences and credential-like data are mixed in the same storage model
- Any script with access to browser `localStorage` can read the key
- Future persistence refactors become more complicated

**Recommendation**

- Separate the API key from the generic settings model
- Prefer a server-managed key or encrypted server-side per-user secret storage

**Priority:** P0

**References**

- `src/context/settings-context.tsx`
- `src/app/settings/page.tsx`
- `src/lib/gemini.ts`
- `src/app/api/planner/route.ts`

### 6. Library mixes synced and local-only data in one surface

**Problem**

The Library page currently combines multiple data sources in one UI:

- Supabase journal entries
- Supabase goals and tasks
- `localStorage` planner snippets
- `localStorage` pins

**Impact**

- Users cannot easily tell which sections sync across devices
- Library becomes an interface without a clear canonical source of truth

**Recommendation**

- Define clear data ownership for each section
- If needed, separate local-only sections in the UI through labels or a distinct state model

**Priority:** P1

**References**

- `src/app/library/page.tsx`
- `src/lib/library.ts`

### 7. `localStorage` usage has grown incrementally without policy

**Problem**

Planner, settings, reward visibility, journal migration flags, daily intentions, and landing theme are all persisted through independent `localStorage` keys in different parts of the app.

**Impact**

- It is unclear which state is ephemeral and which is durable
- Cleanup, migration, and future serverization become harder

**Recommendation**

- Write a small persistence policy document
- Manage durable local state through a centralized storage helper

**Priority:** P2

**References**

- `src/app/planner/page.tsx`
- `src/context/settings-context.tsx`
- `src/context/goals-context.tsx`
- `src/components/dashboard/daily-intentions.tsx`
- `src/components/journal/journal-workspace.tsx`
- `src/app/landing/components/dark-mode-provider.tsx`

## 3. Business Logic Boundaries

### 8. Providers combine data access and domain rules

**Problem**

`TaskProvider` and `GoalsProvider` currently handle Supabase access, optimistic updates, sorting, and UI-facing state exposure in the same layer.

**Impact**

- Tests become harder to write
- Query shapes leak into the UI layer
- Reuse and refactoring become more difficult

**Recommendation**

- Extract thin service or repository layers for `tasks`, `goals`, `sessions`, and `journal`
- Keep providers focused on orchestration and UI-facing state exposure

**Priority:** P1

**References**

- `src/context/task-context.tsx`
- `src/context/goals-context.tsx`

### 9. Client components query tables directly across the app

**Problem**

Multiple surfaces, including the timer, dashboard, journal, navbar, and library, access Supabase directly from client components.

**Impact**

- There is no single data boundary
- Auth and error handling behavior is repeated across surfaces
- Server and client responsibilities are blurred

**Recommendation**

- Standardize on either a typed data layer or a server actions / route handlers model
- Stop treating the "query anywhere" pattern as the default

**Priority:** P1

**References**

- `src/components/pomodoro-timer.tsx`
- `src/components/dashboard/today-stats.tsx`
- `src/components/journal/journal-workspace.tsx`
- `src/components/navbar.tsx`
- `src/app/library/page.tsx`

### 10. Planner API contract is brittle

**Problem**

The initial Planner request can return JSON, but the chat flow returns JSON embedded in markdown, and the frontend attempts to extract it with regex parsing.

**Impact**

- Planner chat behavior becomes tightly coupled to model formatting
- Structured output cannot be guaranteed
- Regression tests become difficult to write

**Recommendation**

- Define a single stable response contract: `message`, `updatedPlan`, and `warnings`
- Remove the requirement to extract JSON from freeform prose

**Priority:** P0

**References**

- `src/app/api/planner/route.ts`
- `src/lib/gemini.ts`

## 4. Routes and Information Architecture

### 11. Public and auth surfaces are duplicated

**Problem**

The repo contains one public/auth route family at the root and a second under `/landing`.

**Impact**

- It is unclear which signup and login flow is canonical
- Marketing copy and auth behavior can drift across two parallel surfaces

**Recommendation**

- Choose a single public/auth route family
- Put the other behind a redirect, preview path, or feature flag

**Priority:** P0

**References**

- `src/app/page.tsx`
- `src/app/login/page.tsx`
- `src/app/signup/page.tsx`
- `src/app/landing/page.tsx`
- `src/app/landing/login/page.tsx`
- `src/app/landing/signup/page.tsx`

### 12. `/tasks` and `/todos` represent the same feature

**Problem**

Two different routes render the same `TodoList` surface.

**Impact**

- Navigation and analytics become noisy
- Documentation and onboarding become harder to reason about

**Recommendation**

- Select one canonical route
- Redirect the other

**Priority:** P1

**References**

- `src/app/tasks/page.tsx`
- `src/app/todos/page.tsx`
- `src/components/navbar.tsx`

### 13. Authenticated app shell is not centralized enough

**Problem**

Many authenticated pages rebuild the same `Navbar` and `PageWrapper` chain independently.

**Impact**

- Shared shell changes require edits across many files
- Visual consistency depends on discipline rather than layout structure

**Recommendation**

- Define clear public and authenticated route-group layouts
- Keep page files focused on page content only

**Priority:** P1

**References**

- `src/app/analytics/page.tsx`
- `src/app/goals/page.tsx`
- `src/app/journal/page.tsx`
- `src/app/timer/page.tsx`
- `src/app/library/page.tsx`

## 5. Security and Auth Hardening

### 14. Redirect `next` parameter is not sanitized

**Problem**

The auth callback and confirm routes append the `next` query parameter directly into redirect targets.

**Impact**

- This creates open-redirect-like risk
- Auth flow behavior becomes harder to reason about and audit

**Recommendation**

- Only accept `next` when it is a relative internal path
- Add an allowlist if needed

**Priority:** P1

**References**

- `src/app/auth/callback/route.ts`
- `src/app/auth/confirm/route.ts`

### 15. Middleware fails open on error

**Problem**

If session refresh fails in middleware, the request is allowed to continue.

**Impact**

- Auth behavior on protected routes can weaken under error conditions
- Security boundaries become ambiguous during unexpected failures

**Recommendation**

- Define separate failure behavior for public and protected routes
- Prefer fail-closed behavior for protected routes where feasible

**Priority:** P1

**References**

- `src/middleware.ts`

### 16. Security headers and hardening are not visible

**Problem**

The repository does not expose a clear CSP or browser security header policy.

**Impact**

- Browser hardening remains undefined for an app that carries auth state and user content

**Recommendation**

- Define baseline headers such as CSP, `Referrer-Policy`, and frame restrictions at the framework or hosting layer

**Priority:** P2

**References**

- `next.config.mjs`

## 6. Testing, Verification, and Ops

### 17. Test coverage does not protect core product flows

**Problem**

Current tests are concentrated around landing hero source assertions. There is no automated coverage for auth, planner, task persistence, journal, analytics, or migrations.

**Impact**

- Regression risk is highest in the most critical product flows
- Refactoring and routine changes cannot be done with confidence

**Recommendation**

- Add a lightweight but real smoke-test layer using Node `node:test`
- Start with Planner contract coverage, schema source-of-truth checks, and canonical route assertions

**Priority:** P0

**References**

- `tests/landing-hero-apple-calendar.test.mjs`
- `tests/landing-hero-reveal-polish.test.mjs`
- `package.json`

### 18. Standard verification commands are missing

**Problem**

`package.json` currently exposes only `dev`, `build`, `start`, and `lint`.

**Impact**

- Each contributor uses a different verification routine
- CI setup and standardization become harder

**Recommendation**

- Add `test`, `typecheck`, and `verify` scripts

**Priority:** P1

**References**

- `package.json`

### 19. README and current-state documentation are weak

**Problem**

`README.md` is still the default Next.js README, and there is no separate current-state architecture reference.

**Impact**

- New contributors cannot read the project accurately
- Setup and verification workflows remain unclear

**Recommendation**

- Replace the default README with a real project README
- Add a current-state architecture and persistence document

**Priority:** P0

**References**

- `README.md`
- `docs/ORBIT_VISION.md`

### 20. Error handling is fragmented

**Problem**

Many errors are handled through `console.error`, `alert`, or `confirm`.

**Impact**

- UX becomes inconsistent
- Production monitoring and testing become harder

**Recommendation**

- Define a small shared error-surface pattern
- Separate domain errors from UI notification behavior

**Priority:** P2

**References**

- `src/app/planner/page.tsx`
- `src/components/pomodoro-timer.tsx`
- `src/context/task-context.tsx`
- `src/context/goals-context.tsx`

## Recommended Remediation Order

1. Close source-of-truth gaps

- missing migrations
- canonical route decision
- current-state documentation
- verification scripts

2. Reduce high-risk runtime and security debt

- Gemini key handling
- Planner response contract
- auth redirect sanitization

3. Remove product surface duplication

- `/tasks` vs `/todos`
- `/` vs `/landing`
- authenticated layouts

4. Fix the persistence model

- Planner serverization
- Library ownership clarification
- `localStorage` policy cleanup

5. Move to integrations afterward

- calendar
- communication
- context graph
- collaboration

The correct first move is to start a `core stabilization` phase.
