import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

function file(path) {
  return join(root, path);
}

function read(path) {
  return readFileSync(file(path), "utf8");
}

function hasFiles(path) {
  return existsSync(file(path)) && readdirSync(file(path)).length > 0;
}

function staticHtmlFiles(dir = file("public/cio-static")) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      return staticHtmlFiles(entryPath);
    }

    return entry.isFile() && entry.name.endsWith(".html") ? [entryPath] : [];
  });
}

function headOf(html) {
  return html.match(/<head>[\s\S]*?<\/head>/i)?.[0] ?? "";
}

function titleOf(head) {
  return head.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "";
}

function metaContentOf(head, name) {
  return head.match(new RegExp(`<meta\\s+name="${name}"\\s+content="([^"]*)"`, "i"))?.[1] ?? "";
}

const ORBIT_KEYWORDS =
  "Orbit, personal planning, focus timer, AI planner, tasks, goals, journal, analytics, productivity";

const ORBIT_METADATA = {
  "public/cio-static/index.html": {
    title: "Orbit | Calm planning, focus, and reflection",
    description:
      "Orbit is a calm personal operating surface for planning, focus, and reflection, connecting tasks, focus sessions, goals, journal notes, analytics, library, and an AI planner.",
  },
  "public/cio-static/about/index.html": {
    title: "About Orbit | Personal operating surface",
    description:
      "Learn how Orbit helps a single user decide what matters, execute with a focused timer, track momentum, and reflect without scattering work across separate tools.",
  },
  "public/cio-static/policies-and-priorities/index.html": {
    title: "Orbit Product Principles | Calm planning and durable progress",
    description:
      "Orbit's product principles are calm by default, one personal workspace, durable progress, helpful intelligence, and honest scope as the app matures.",
  },
  "public/cio-static/news/index.html": {
    title: "Orbit Updates | Product progress and roadmap",
    description:
      "Follow Orbit product updates as the roadmap strengthens persistence, grounds the AI planner in real workspace data, and prepares focused calendar context.",
  },
};

test("root landing is served from the imported static mirror", () => {
  assert.ok(!existsSync(file("src/app/page.tsx")), "old root landing page should be removed");
  assert.ok(!existsSync(file("src/app/linear-home.module.css")), "old Linear stylesheet should be removed");
  assert.ok(!existsSync(file("src/app/linear-home-reveals.tsx")), "old Linear reveal helper should be removed");
  assert.ok(!existsSync(file("src/app/about/page.tsx")), "old local about page should be removed");

  const index = read("public/cio-static/index.html");
  assert.match(index, /<title>Orbit \| Calm planning, focus, and reflection<\/title>/);
  assert.match(index, /calm personal operating surface for planning, focus, and reflection/);
  assert.match(index, /\/about/);
  assert.match(index, /\/news/);
  assert.match(index, /\/policies-and-priorities/);

  assert.ok(existsSync(file("public/cio-static/about/index.html")), "about index should be copied");
  assert.ok(existsSync(file("public/cio-static/news/index.html")), "news index should be copied");
  assert.ok(
    existsSync(file("public/cio-static/policies-and-priorities/index.html")),
    "policies index should be copied",
  );
  assert.ok(existsSync(file("public/cio-static/privacy-statement/index.html")), "privacy policy should be copied");
  assert.ok(
    existsSync(file("public/cio-static/accessibility-policy/index.html")),
    "accessibility policy should be copied",
  );
  assert.ok(existsSync(file("public/cio-static/resources/index.html")), "resources index should be copied");
  assert.ok(existsSync(file("public/cio-static/handbook/index.html")), "handbook index should be copied");
  assert.ok(
    existsSync(file("public/cio-static/government-technology-jobs/index.html")),
    "government technology jobs page should be copied",
  );
  assert.ok(hasFiles("public/assets"), "CIO.gov static assets should be copied");
  assert.ok(hasFiles("public/_vinext/image"), "CIO.gov image assets should be copied");
});

test("Next rewrites only the imported marketing routes and leaves app routes intact", () => {
  const config = read("next.config.mjs");

  for (const source of [
    "/",
    "/about",
    "/about/:path*",
    "/news",
    "/news/:path*",
    "/policies-and-priorities",
    "/policies-and-priorities/:path*",
    "/privacy-statement",
    "/accessibility-policy",
    "/resources",
    "/resources/:path*",
    "/handbook",
    "/handbook/:path*",
    "/government-technology-jobs",
  ]) {
    assert.match(config, new RegExp(`source:\\s*["']${source.replace(/[/*]/g, "\\$&")}["']`));
  }

  assert.doesNotMatch(config, /source:\s*["']\/api/);
  assert.doesNotMatch(config, /source:\s*["']\/auth/);
});

test("imported marketing shell removes the government banner and shrinks the nav on scroll", () => {
  const index = read("public/cio-static/index.html");
  const css = read("public/cio-overrides.css");

  assert.doesNotMatch(index, /An official website of the United States government/);
  assert.match(index, /cio-nav-enhance/);
  assert.match(index, /data-cio-scrolled/);

  assert.match(css, /\.cio-floating-nav/);
  assert.match(css, /\[data-cio-scrolled="true"\]/);
  assert.match(css, /border-radius:\s*999px/);
  assert.match(css, /--cio-nav-transition-duration:\s*420ms/);
  assert.match(css, /--cio-nav-transition-easing:\s*cubic-bezier\(0\.2,\s*0\.8,\s*0\.2,\s*1\)/);
  assert.match(css, /--cio-nav-shell-width:\s*1250px/);
  assert.match(css, /\.cio-floating-nav::before/);
  assert.match(css, /backdrop-filter:\s*none\s*!important/);
  assert.match(css, /-webkit-backdrop-filter:\s*none\s*!important/);
  assert.match(css, /\.cio-floating-nav::before\s*\{[\s\S]*-webkit-backdrop-filter:\s*blur\(18px\)/);
  assert.match(css, /\.cio-floating-nav::before\s*\{[\s\S]*backdrop-filter:\s*blur\(18px\)/);
  assert.match(css, /clip-path:\s*inset\(0 round inherit\)/);
  assert.match(css, /transition:\s*left var\(--cio-nav-transition-duration\).*right var\(--cio-nav-transition-duration\).*border-radius var\(--cio-nav-transition-duration\).*box-shadow var\(--cio-nav-transition-duration\).*background-color var\(--cio-nav-transition-duration\).*border-color var\(--cio-nav-transition-duration\)/);
  assert.match(css, /\.cio-floating-nav\[data-cio-scrolled="true"\]::before\s*\{[\s\S]*left:\s*max\(16px,\s*calc\(\(100% - var\(--cio-nav-shell-width\)\) \/ 2\)\)/);
  assert.match(css, /max-width:\s*min\(var\(--cio-nav-shell-width\),\s*calc\(100% - 32px\)\)/);
});

test("imported marketing pages use Orbit metadata generated from docs", () => {
  for (const [path, expected] of Object.entries(ORBIT_METADATA)) {
    const head = headOf(read(path));

    assert.equal(titleOf(head), expected.title);
    assert.equal(metaContentOf(head, "description"), expected.description);
    assert.equal(metaContentOf(head, "keywords"), ORBIT_KEYWORDS);
  }

  const htmlFiles = staticHtmlFiles();
  assert.equal(htmlFiles.length, 217, "all imported static pages should be checked");

  for (const htmlFile of htmlFiles) {
    const head = headOf(readFileSync(htmlFile, "utf8"));

    assert.match(titleOf(head), /Orbit/);
    assert.match(metaContentOf(head, "description"), /Orbit/);
    assert.equal(metaContentOf(head, "keywords"), ORBIT_KEYWORDS);
    assert.doesNotMatch(
      head,
      /CIO\.GOV|Chief Information Officers Council|CIO Council|Federal IT|Government Technology|Cybersecurity, Cloud, Data/,
      `${htmlFile} should not keep imported CIO metadata`,
    );
  }
});

test("imported marketing pages replace visible copy without changing the imported layout structure", () => {
  const copyScript = read("public/orbit-copy-overrides.js");

  assert.match(copyScript, /Plan your week, focus your day, understand your progress/);
  assert.match(copyScript, /One connected loop for planning, focus, goals, and reflection/);
  assert.match(copyScript, /Weekly Planning/);
  assert.match(copyScript, /Focus Sessions/);
  assert.match(copyScript, /Contextual AI Planner/);
  assert.match(copyScript, /Product Principles/);
  assert.match(copyScript, /Product Updates/);
  assert.match(copyScript, /Orbit Handbook/);
  assert.doesNotMatch(copyScript, /Federal technology built|Chief Information Officers Council|CIO Council/);
  assert.doesNotMatch(copyScript, /replaceChildren|createElement|appendChild|className\s*=/);

  for (const htmlFile of staticHtmlFiles()) {
    const html = readFileSync(htmlFile, "utf8");

    assert.match(html, /\/orbit-copy-overrides\.js/, `${htmlFile} should load Orbit text-only copy overrides`);
  }
});
