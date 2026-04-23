import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

function readSource(relativePath) {
  return readFileSync(new URL(`../${relativePath}`, import.meta.url), "utf8");
}

test("tasks route redirects to the canonical todos page", () => {
  const tasksPageSource = readSource("src/app/tasks/page.tsx");

  assert.match(tasksPageSource, /import\s*\{\s*redirect\s*\}\s*from\s*["']next\/navigation["']/);
  assert.match(tasksPageSource, /redirect\((['"])\/todos\1\)/);
  assert.doesNotMatch(tasksPageSource, /<TodoList\s*\/?\s*>/);
  assert.doesNotMatch(tasksPageSource, /TodoList/);
});

test("navbar only links to todos using the canonical href", () => {
  const navbarSource = readSource("src/components/navbar.tsx");

  assert.match(navbarSource, /\{\s*name:\s*["']Todos["'],\s*href:\s*["']\/todos["']\s*\}/);
  assert.doesNotMatch(navbarSource, /href:\s*["']\/tasks["']/);
});
