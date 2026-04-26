# Orbit Tech Debt Register

## Active P0

*(No active P0 tech debt remaining.)*

## Active P1

### Landing component folder is still under `/landing` route path

- Areas: `src/components/landing/**`
- Why it matters: the `/landing` route itself has been removed, but the component folder still lives under a deleted route path.
- Current impact: future public-surface edits require working inside a stale directory name.
- **Status:** Moved to `src/components/landing/`.

### Library blends synced and local-only data in one surface

- Areas: `src/app/library/page.tsx`, `src/lib/library.ts`
- Why it matters: journal entries, goals, and task snippets are mixed with local-only planner snippets and pins.
- Current impact: users do not get a clean durability boundary inside the Library UI.

### Auth redirect handling is not hardened

- Areas: `src/app/auth/callback/route.ts`, `src/app/auth/confirm/route.ts`, `src/lib/auth/redirect.ts`
- Why it matters: `next` is appended directly into redirect targets.
- Current impact: redirect behavior remains less explicit and less auditable than it should be.
- **Status:** Hardened with `validateRedirectPath`, `getSafeOrigin`, and allowlist-based `X-Forwarded-Host` validation.

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
- `/landing` route has been removed; landing components moved to `src/components/landing/`.
- `docs/architecture.md` exists and should remain the factual source of truth.
- Planner persistence is now synced to Supabase (`public.weekly_plans`); localStorage serves as anonymous fallback with auto-migration on login.
- Planner API now uses a unified structured JSON contract for both initial generation and chat revisions.
- Gemini API key has been removed from client-side code and localStorage; the API route now uses only `process.env.GEMINI_API_KEY`.
- Auth redirect handling has been hardened with path validation, origin validation, and `X-Forwarded-Host` allowlisting.

## Recommended Order

1. Make planner persistence and planner contracts reliable.
2. Remove the highest-risk auth and storage hardening gaps.
3. Clarify landing component location and Library ownership boundaries.
4. Deepen test coverage and reduce ad hoc client-side state handling.
