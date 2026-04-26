# Orbit Current State

## Product Surfaces In Use

- `/` is the public landing page.
- Auth-gated app routes exist and are implemented for `/dashboard`, `/todos`, `/timer`, `/planner`, `/goals`, `/journal`, `/analytics`, `/library`, `/settings`, and `/program`.
- `/tasks` is redirect only and points to `/todos`.
- The planner API already exists at `/api/planner` and uses Gemini for initial plan generation and chat-based revisions.

## Synced Domains

- `profiles` stores the authenticated user's profile and plan tier.
- `todos` is the canonical synced task store used by `/todos` and task-derived surfaces.
- `pomodoro_sessions` stores completed and interrupted focus sessions and powers analytics plus goal reward logic.
- `goals` stores long-term goals, progress, status, and completion state for `/goals`.
- `journal_entries` stores dated journal entries for `/journal` and recent notes shown in `/library`.

## Local-Only Domains

- Planner state is now synced to Supabase via `public.weekly_plans`; localStorage keys (`orbit-current-plan`, `orbit-chat-history`, `orbit-plan-completions`) are used as a fallback for anonymous users and are auto-migrated on login.
- Settings remain local-only in `orbit-settings`, including timer preferences, daily goal, ambient sound, view mode.
- Library pins remain local-only in `orbit-library-pins`.
- Goal reward acknowledgement state remains local-only in `orbit-seen-rewards-{userId}`.
- Legacy journal migration remnants still exist through `orbit-journal-*` keys and per-user migration flags while old local entries are imported into `journal_entries`.

## Canonical Routes

- `/todos` is the canonical task route and source of truth for task CRUD.
- The shared Pomodoro timer flow runs on both `/dashboard` and `/timer`.
- `/goals`, `/journal`, `/analytics`, and `/library` are implemented product surfaces, not roadmap placeholders.
- `/analytics` combines `todos`, `pomodoro_sessions`, and local settings-derived behavior.
- `/library` mixes an upcoming ledger from `todos` with planner snippets and local-only pins.
- `/landing` route has been removed; landing components now live at `src/components/landing/`.

## Known Gaps

- Library pins are device-local.
- Journal still carries one-time local migration behavior that has not been fully retired.
