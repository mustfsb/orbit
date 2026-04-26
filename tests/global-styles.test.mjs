import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

function read(path) {
  return readFileSync(join(root, path), "utf8");
}

test("global stylesheet includes Tailwind layers used by app routes", () => {
  const globals = read("src/app/globals.css");

  assert.match(globals, /@tailwind\s+base\s*;/);
  assert.match(globals, /@tailwind\s+components\s*;/);
  assert.match(globals, /@tailwind\s+utilities\s*;/);
});
