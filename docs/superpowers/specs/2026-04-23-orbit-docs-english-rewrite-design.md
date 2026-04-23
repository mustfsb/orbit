# Orbit Planning Docs English Rewrite Design

## Summary

This work rewrites the current planning document set under `docs/orbit-planning/` into professional, engineering-first English. The goal is to improve clarity, consistency, and long-term maintainability without changing the underlying strategic direction or implementation intent.

## Goals

- Rewrite all four planning documents in clear, professional English
- Standardize tone, terminology, section structure, and cross-document references
- Improve readability for internal engineering use and future implementation work
- Preserve valid file paths, verified commands, and current technical direction

## Non-Goals

- Changing the selected roadmap sequence
- Introducing new product decisions or expanding scope
- Reworking the implementation plan into a different technical approach
- Rewriting `docs/ORBIT_VISION.md`

## Audience

The primary audience is internal engineering: the project owner, future contributors, and any agent or engineer using these files as working documents.

## Deliverables

- Rewrite `docs/orbit-planning/00-docs-design.md`
- Rewrite `docs/orbit-planning/01-roadmap.md`
- Rewrite `docs/orbit-planning/02-tech-debt-and-architecture.md`
- Rewrite `docs/orbit-planning/03-core-stabilization-plan.md`

## Structure

### `00-docs-design.md`
- Summary
- Goals
- Non-Goals
- Deliverables
- Scope Decisions
- Writing Rules
- Verification
- Risks

### `01-roadmap.md`
- Executive Summary
- Current Product Position
- Planning Principles
- Phase 0-4
- Deliberately Deferred Areas
- Recommended Starting Slice

### `02-tech-debt-and-architecture.md`
- Executive Summary
- Priority Summary
- Debt categories grouped by domain
- Recommended remediation order

### `03-core-stabilization-plan.md`
- Standard implementation plan header
- Actionable task-by-task breakdown
- Stronger task naming and more professional wording
- Verified commands and exact file paths retained

## Rewrite Rules

- Use plain, professional English throughout
- Prefer precise engineering language over conversational phrasing
- Remove mixed-language wording and inconsistent terminology
- Keep roadmap language strategic but concrete
- Keep the tech debt report evidence-based and repo-specific
- Keep the implementation plan actionable and realistic
- Preserve verified commands, valid paths, and current scope boundaries
- Improve headings so the document set reads as a coherent package

## Verification

- The current document set was reviewed directly under `docs/orbit-planning/`
- Existing file paths and commands referenced in the plan were previously validated in the repo
- This rewrite changes writing quality and structure, not implementation state

## Risks

- Over-polishing could make the docs sound generic if the rewrite becomes too abstract
- Tightening language too aggressively could accidentally weaken useful context in the roadmap or tech debt report
- The implementation plan must remain operational, not become a strategy memo
