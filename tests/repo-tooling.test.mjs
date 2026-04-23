import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

test('package.json exposes the repository verification scripts', async () => {
  const packageJson = JSON.parse(
    await readFile(new URL('../package.json', import.meta.url), 'utf8'),
  );

  assert.equal(packageJson.scripts.test, 'node --test tests/*.test.mjs');
  assert.equal(packageJson.scripts.typecheck, 'tsc --noEmit');
  assert.equal(
    packageJson.scripts.verify,
    'npm run typecheck && npm run lint && npm test',
  );
});
