# Orbit Current State

## Synced Domains

- `profiles` stores the authenticated user's plan tier in Supabase and is read by the navbar.
- `todos` is the canonical task store used by `/todos`, analytics task counts, and `/library`'s upcoming ledger.
- `pomodoro_sessions` stores completed and interrupted focus sessions and powers analytics plus goal reward calculations.
- `goals` stores user goals, progress, status, and completion timestamps for `/goals`.
- `journal_entries` stores dated journal records for `/journal` and the recent notes surfaced in `/library`.

## Local-Only Domains

- `orbit-settings` in `localStorage` stores timer, sound, daily goal, API key, and view mode preferences.
- Planner state remains local-only in `localStorage` via `orbit-current-plan`, `orbit-chat-history`, and `orbit-plan-completions`.
- Library pins remain local-only in `orbit-library-pins`.
- Goal reward acknowledgement state remains local-only in `orbit-seen-rewards-{userId}`.
- Legacy journal drafts can still exist in `orbit-journal-*` keys until `/journal` migrates them into `journal_entries`.

## Canonical Routes

- `/todos` is the canonical task route; `/tasks` is a redirect only.
- Focus sessions are recorded through the shared `PomodoroTimer` used on both `/dashboard` and `/timer`.
- `/goals` is the canonical route for CRUD over `goals`.
- `/journal` is the canonical route for editing and syncing `journal_entries`.
- `/analytics` is a read-model surface over synced `todos`, `pomodoro_sessions`-derived data, and local settings.
- `/library` already renders upcoming ledger content from `todos` plus planner snippets.

## Known Gaps

- Planner data is still device-local, so plans, chat history, and completion state do not sync across devices.
- Library pins are still device-local.
- Journal still carries a one-time migration path from legacy `localStorage` entries instead of a fully retired local model.
