# Orbit Product and Engineering Roadmap

## Executive Summary

Orbit currently has a strong `focus + planning` core. The existing product surface includes:

- focus timer
- task management
- AI weekly planner
- goals
- journal
- analytics
- settings

This is a strong wedge, but the product is not yet a true `life operating system`. The primary gap is not feature breadth. It is the absence of a durable data model, a clear persistence strategy, and a reliable integration foundation.

## Planning Principles

- Prioritize reliability before expanding scope.
- Each phase should solve one primary problem.
- Do not add integrations before the underlying data model is stable.
- Do not introduce team or collaboration modes before the single-user loop is strong.
- Intentionally defer health, finance, IoT, and other speculative areas from the vision document.

## Phase 0: Core Stabilization

**Objective:** Make Orbit's existing authenticated focus loop reliable, reproducible, and testable.

**User value:** Users should experience fewer surprises across tasks, focus sessions, and core settings. The product should move from a demo-quality experience to something dependable enough for daily use.

**Why this phase now:** The codebase currently depends on the `todos` and `pomodoro_sessions` tables, but those migrations are not checked into the repository. Verification flows and the persistence model are also fragmented. Adding new integrations before resolving these issues will increase technical debt.

**Key deliverables:**

- checked-in Supabase migrations for `todos` and `pomodoro_sessions`
- working `test`, `typecheck`, and `verify` commands
- canonical task routing under `/todos`
- current-state documentation that clearly separates synced state from local-only state
- a clear decision on Gemini API key handling: remove it, isolate it, or move it to server-side storage
- a basic operations document that reflects the real repository setup flow

**Explicit non-goals:**

- no calendar integration
- no new AI product module
- no team or realtime collaboration
- no major landing page redesign

**Exit criteria:**

- a clean environment can boot successfully using repository migrations alone
- `npm run verify` and `npm run build` become standard project checks
- the task system is exposed through a single canonical route
- the boundary between Supabase-backed domains and local-only domains is documented

**Suggested horizon:** 1-2 weeks

## Phase 1: Calendar and Scheduling

**Objective:** Turn Orbit into a real time-blocking and day-planning product.

**User value:** Users can view tasks, planner output, and focus sessions in actual calendar context. This is where a major step in user value opens up, because Orbit begins managing the structure of the day rather than isolated tasks.

**Why this phase now:** Calendar is the most natural integration for the current focus, planner, and task core. Before Gmail or Slack, Orbit first needs to validate its core planning claim through calendar-based scheduling.

**Key deliverables:**

- the first canonical calendar integration, preferably Google Calendar
- free/busy visibility or, at minimum, calendar event import
- the ability to map planner tasks to calendar blocks
- simple scheduling constraints such as `protect my mornings`
- basic coordination between focus sessions and upcoming events

**Explicit non-goals:**

- no full multi-provider rollout for Apple Calendar and Outlook in the same phase
- no team scheduling
- no email parsing

**Exit criteria:**

- Orbit can reliably read from and write to at least one calendar source
- users can generate daily time blocks from their weekly plan
- conflicts between focus sessions and calendar events are handled at a basic level

**Suggested horizon:** 3-5 weeks

## Phase 2: Communication Intake

**Objective:** Connect external message and email flows into Orbit's task and intake system.

**User value:** Users can bring part of their workstream into Orbit without manual copy-paste. This is a critical step if Orbit is going to become part of real daily execution rather than a separate planning layer.

**Why this phase now:** Once the calendar workflow is stable, the next major pain point is intake: email, chat, follow-up, and scattered action items. Communication integrations only become useful after the canonical task model and scheduling model are in place.

**Key deliverables:**

- a single intake pipeline model: external source -> task or summary
- a first communication integration starting with Gmail or Slack
- `message/email -> task` conversion
- a basic foundation for notification digesting or defer behavior during focus sessions
- an initial structured input layer so the planner can consume external context

**Explicit non-goals:**

- no simultaneous full rollout across Gmail, Slack, Teams, and Outlook
- no enterprise-grade admin tooling
- no full inbox replacement

**Exit criteria:**

- at least one email or chat source provides reliable task and context input into Orbit
- external items flow into the task system without being manually rewritten
- users can view communication intake alongside their daily plan

**Suggested horizon:** 3-5 weeks

## Phase 3: Context Graph and AI Intelligence Layer

**Objective:** Convert disconnected product data into a consistent context model that the planner and dashboard can use.

**User value:** Orbit's AI layer becomes more than a prompt-and-PDF tool. It starts acting as a decision-support system grounded in the user's real behavior and operating context.

**Why this phase now:** Building a real context engine before calendar and communication data exist would be premature. This phase turns the structured data from earlier integrations into a coherent intelligence layer.

**Key deliverables:**

- a single structured context contract for the planner
- a basic relationship model across tasks, goals, sessions, calendar data, and intake items
- morning brief and simple dynamic rescheduling experiments
- migration of the planner chat response contract from regex parsing to structured output
- a context-aware recommendation foundation for dashboard and analytics

**Explicit non-goals:**

- no personalized fine-tuned model
- no health, finance, or IoT domains
- no fully autonomous agent behavior

**Exit criteria:**

- the planner operates on structured product context rather than free text alone
- morning brief and rescheduling logic are grounded in user data
- AI outputs are generated through less fragile API contracts

**Suggested horizon:** 4-6 weeks

## Phase 4: Team and Live Collaboration

**Objective:** Extend Orbit from a personal product into a shared focus and planning environment for small teams.

**User value:** Use cases such as body doubling, shared sprint rooms, and team goals can begin to live inside one product.

**Why this phase now:** Collaboration should only be introduced after the single-user data model is solid, the context layer is established, and realtime requirements are clear. Adding it earlier risks destabilizing the core product.

**Key deliverables:**

- a workspace and membership model
- shared focus rooms or group sessions
- Supabase Realtime-based presence and basic live updates
- an initial data model for shared goals and shared plans
- a minimum viable team dashboard

**Explicit non-goals:**

- no enterprise SSO, compliance, or broad admin tooling
- no fully collaborative document editor
- no large-organization structures

**Exit criteria:**

- teams of 2-20 people can use the same workspace
- the shared timer and session flow is stable
- realtime updates do not create data consistency issues

**Suggested horizon:** 4-8 weeks

## Deliberately Deferred Areas

The following areas are valuable in the long-term vision, but should not be part of the near-term roadmap:

- health and biometric integrations
- finance and Plaid-based life administration
- smart home and IoT orchestration
- AR, wearable, and voice-first modes
- predictive life simulation and other speculative metrics such as POI

These areas only become meaningful after Phases 0-4 are complete.

## Recommended Starting Slice

The first implementation slice across the roadmap should be:

- standardize repository verification commands
- add missing Supabase migrations to the repository
- canonicalize `/tasks` -> `/todos`
- write the current-state persistence inventory

This slice does not reduce the ambition of the broader vision. It makes the vision buildable.
