import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

function readSource(relativePath) {
  return readFileSync(new URL(`../${relativePath}`, import.meta.url), "utf8");
}

test("current state architecture doc exists with required sections", () => {
  const source = readSource("docs/architecture.md");

  assert.match(source, /^# Orbit Current State$/m);
  assert.match(source, /^## Synced Domains$/m);
  assert.match(source, /^## Local-Only Domains$/m);
  assert.match(source, /^## Canonical Routes$/m);
  assert.match(source, /^## Known Gaps$/m);
  assert.match(source, /`profiles`/);
  assert.match(source, /`todos`/);
  assert.match(source, /`pomodoro_sessions`/);
  assert.match(source, /`goals`/);
  assert.match(source, /`journal_entries`/);
  assert.match(source, /\/tasks.*redirect only/i);
  assert.match(source, /on both `?\/dashboard`? and `?\/timer`?/i);
  assert.match(
    source,
    /analytics.*todos.*pomodoro_sessions.*local settings/i,
  );
  assert.doesNotMatch(source, /analytics.*local-only planner and pin state/i);
  assert.match(source, /\/library.*upcoming ledger.*todos.*planner snippets/i);
  assert.doesNotMatch(source, /requested `docs\/ORBIT_VISION\.md` source/i);
});
