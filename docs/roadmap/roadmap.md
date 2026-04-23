# Orbit Roadmap

## Strategic Frame

Orbit already has a real single-user product loop: public landing, auth-gated app routes, synced tasks, focus sessions, goals, journal, analytics, library, settings, and an AI planner. The roadmap now is not about inventing that core from scratch. It is about making the current system more durable, better connected, and more trustworthy before broadening scope.

## Priorities

### 1. Finish the persistence model

Orbit still splits important user state between Supabase and browser-local storage. The next strategic step is to reduce that mismatch.

- Decide whether planner plans, chat history, and completion state become synced product data.
- Clarify which Library sections are intentionally local and which should be durable across devices.
- Separate credential-like Gemini key handling from generic local settings.

### 2. Strengthen the AI planning contract

The planner already exists and matters to the product. The next step is to make it less brittle and more grounded in product state.

- Replace regex-style plan extraction with a stable structured response contract.
- Improve how planner output relates to tasks, goals, and future scheduling context.
- Make planner behavior easier to verify with tests.

### 3. Tighten the app shell and route model

The main app routes are implemented, but some structure is still transitional.

- Keep `/todos` as the canonical task route and treat `/tasks` as redirect-only.
- Reduce ambiguity between `/` and the leftover `/landing` route family.
- Continue centralizing shared authenticated layout behavior where duplication still exists.

### 4. Improve trust, verification, and operational clarity

Orbit now has `test`, `typecheck`, and `verify`, plus checked-in core migrations. The next phase is to deepen confidence rather than just add commands.

- Expand test coverage around planner, auth flow, and core data boundaries.
- Keep current-state documentation aligned with repo reality.
- Replace ad hoc error surfaces with more consistent handling.

### 5. Add the first real external context source

Once the single-user core is more durable, the next expansion should be a narrow integration that strengthens planning rather than distracts from it.

- Preferred direction: calendar and scheduling context first.
- Goal: let Orbit plan around time, not just around lists.
- Avoid broad multi-provider or team-collaboration expansion until the underlying model is stable.

## Deliberately Not Near-Term

- Broad communication intake across many providers at once.
- Team collaboration and shared focus rooms.
- Health, finance, IoT, AR, wearable, or other speculative vision areas.
- Large new product surfaces that duplicate what already exists.

## What This Means Now

The current roadmap is a reliability-and-integration roadmap, not a feature-existence roadmap. Tasks, goals, journal, analytics, library, and planner are already here; the work ahead is to unify persistence, harden contracts, and prepare the product for the first meaningful external integration.
