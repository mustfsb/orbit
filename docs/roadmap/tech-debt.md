# Orbit Tech Debt Register

## Active P0

### Planner persistence is still device-local

- State affected: `orbit-current-plan`, `orbit-chat-history`, `orbit-plan-completions`
- Why it matters: the planner is a core product surface, but plans and revisions do not follow the user across devices.
- Current impact: dashboard and library can reflect planner data that only exists on one browser.

### Planner API responses are brittle

- Area: `src/app/api/planner/route.ts`
- Why it matters: initial generation returns JSON, but chat revisions still return freeform text that the client must interpret.
- Current impact: planner behavior is coupled to model formatting and is harder to test safely.

### Gemini API key is stored in local settings

- Area: `src/context/settings-context.tsx`
- Why it matters: UI preferences and credential-like data live in the same `localStorage` blob.
- Current impact: the browser storage model is doing more than simple preferences should.

## Active P1

### Public route families are still partially duplicated

- Areas: `src/app/page.tsx`, `src/app/landing/**`
- Why it matters: `/` is the real public landing entry, but `/landing` still carries a parallel public surface.
- Current impact: public information architecture can drift unless one path is treated as archival or redirected.

### Library blends synced and local-only data in one surface

- Areas: `src/app/library/page.tsx`, `src/lib/library.ts`
- Why it matters: journal entries, goals, and task snippets are mixed with local-only planner snippets and pins.
- Current impact: users do not get a clean durability boundary inside the Library UI.

### Auth redirect handling is not hardened

- Areas: `src/app/auth/callback/route.ts`, `src/app/auth/confirm/route.ts`
- Why it matters: `next` is appended directly into redirect targets.
- Current impact: redirect behavior remains less explicit and less auditable than it should be.

### Middleware still fails open on error

- Area: `src/middleware.ts`
- Why it matters: protected-route behavior becomes ambiguous when session refresh throws.
- Current impact: auth failure behavior is safer for uptime than for clarity or security.

### Shared app shell structure is only partly centralized

- Areas: authenticated pages still compose `Navbar` and page wrappers individually, while `src/app/dashboard/layout.tsx` centralizes only part of the shell.
- Why it matters: shared layout changes still require repeated page-level edits.

### Core product test coverage is still thin

- Areas: `tests/`
- Why it matters: the repo now has meaningful verification commands, but coverage across planner, auth, and richer app behavior is still shallow.

## Active P2

### Local storage policy is still ad hoc

- Why it matters: settings, planner state, reward acknowledgements, journal migration remnants, and other local keys have grown incrementally.
- Current impact: future serverization and cleanup work stay harder than necessary.

### Error handling is inconsistent across the app

- Why it matters: `alert`, `confirm`, and `console.error` are still used directly in core flows.
- Current impact: UX and operational visibility remain uneven.

### Persistence types are not schema-derived

- Why it matters: Supabase-facing types are still handwritten instead of generated from the live schema.
- Current impact: schema drift can still slip past TypeScript.

## Resolved Or No Longer Active

- Core migrations for `profiles`, `goals`, `journal_entries`, `todos`, and `pomodoro_sessions` are checked into `supabase/migrations/`.
- `test`, `typecheck`, and `verify` scripts already exist in `package.json`.
- `/tasks` is no longer a parallel task surface; it now redirects to `/todos`.
- `docs/architecture/current-state.md` exists and should remain the factual source of truth.

## Recommended Order

1. Make planner persistence and planner contracts reliable.
2. Remove the highest-risk auth and storage hardening gaps.
3. Clarify public-route duplication and Library ownership boundaries.
4. Deepen test coverage and reduce ad hoc client-side state handling.
