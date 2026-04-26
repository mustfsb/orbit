# Orbit Planning Docs Design

> **Status:** Completed. This document describes the original doc structure, which has since been flattened. References to `docs/vision/`, `docs/roadmap/`, and `docs/plans/archive/` reflect the old layout.

## Summary

This effort translates the high-level direction in `docs/vision/product-vision.md` and the current reality of the repository into three operational documents: a realistic product roadmap, a technical debt and architecture report for the existing codebase, and an immediately actionable `core stabilization` implementation plan.

## Goals

- Break Orbit's north star vision into executable phases
- Prioritize technical risks and architectural gaps in the current codebase
- Produce a detailed implementation plan for the initial phase based on actual repository files

## Non-Goals

- Modify product code in this iteration
- Implement new integrations or new product modules
- Rewrite `docs/vision/product-vision.md` from scratch

## Deliverables

- `docs/roadmap/roadmap.md`
- `docs/roadmap/tech-debt.md`
- `docs/plans/archive/2026-04-core-stabilization.md`

## Scope Decisions

- The implementation plan is based on Phase 0 / `core stabilization`
- The canonical task surface will be `/todos`; `/tasks` will remain as a legacy redirect
- This initial plan does not serverize localStorage-backed areas such as planner, settings, and library
- Landing/public surface consolidation is included in the roadmap and tech debt documents, but not in the initial implementation plan

## Writing Rules

- Use precise, engineering-first language throughout
- Keep roadmap sections strategic but concrete
- Keep the tech debt report evidence-based and repository-specific
- Keep the implementation plan operational and directly executable
- Preserve verified file paths, commands, and scope boundaries

## Verification

- The repository route structure, existing migrations, contexts, and planner API were reviewed
- `npm run lint`, `npx tsc --noEmit`, `npm run build`, and `node --test tests/*.test.mjs` were successfully validated
- No placeholders or imaginary test runners were used in the plan

## Risks

- If `/tasks` is preferred over `/todos`, only the canonical route decision changes; the rest of the plan remains largely the same
- Because planner persistence is deferred to a later phase, Phase 0 does not resolve all data consistency issues
