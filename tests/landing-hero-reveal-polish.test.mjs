import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";

function readSource(relativePath) {
  return readFileSync(new URL(relativePath, import.meta.url), "utf8");
}

function parseTsx(relativePath) {
  return ts.createSourceFile(relativePath, readSource(relativePath), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
}

function findJsxElementsByTag(sourceFile, tagName) {
  const results = [];

  function visit(node) {
    if (ts.isJsxElement(node) && node.openingElement.tagName.getText() === tagName) {
      results.push(node);
    }
    if (ts.isJsxSelfClosingElement(node) && node.tagName.getText() === tagName) {
      results.push(node);
    }
    ts.forEachChild(node, visit);
  }

  visit(sourceFile);
  return results;
}

function getAttributeValue(node, attributeName) {
  const attributes = ts.isJsxElement(node) ? node.openingElement.attributes.properties : node.attributes.properties;
  const attribute = attributes.find(
    (prop) => ts.isJsxAttribute(prop) && prop.name.text === attributeName,
  );

  if (!attribute || !attribute.initializer) {
    return null;
  }

  if (ts.isStringLiteral(attribute.initializer)) {
    return attribute.initializer.text;
  }

  if (
    ts.isJsxExpression(attribute.initializer) &&
    attribute.initializer.expression &&
    (ts.isStringLiteral(attribute.initializer.expression) || ts.isNoSubstitutionTemplateLiteral(attribute.initializer.expression))
  ) {
    return attribute.initializer.expression.text;
  }

  return attribute.initializer.getText();
}

test("focus line renders a larger baseline-aligned emoji outside reveal clipping", () => {
  const heroSource = readSource("../src/app/landing/components/hero.tsx");
  const heroAst = parseTsx("../src/app/landing/components/hero.tsx");
  const spans = findJsxElementsByTag(heroAst, "span");
  const focusLine = spans.find((node) => getAttributeValue(node, "className") === "hero-reveal-line hero-reveal-line-with-focus-icon");
  const focusEmoji = spans.find((node) => getAttributeValue(node, "className") === "hero-inline-focus-emoji");

  assert.ok(focusLine);
  assert.ok(focusEmoji);

  const focusLineText = focusLine.getText();
  assert.match(focusLineText, /\{`FOCUS`\}/);
  assert.match(focusLineText, /hero-inline-focus-emoji/);
  assert.match(focusEmoji.getText(), /🎯/);
  assert.ok(!readSource("../src/app/landing/components/hero.tsx").includes("{`FOCUS 🎯`}"));
  assert.match(heroSource, /\.hero-inline-focus-emoji \{[\s\S]*font-size: 0\.72em;/);
  assert.match(heroSource, /\.hero-inline-focus-emoji \{[\s\S]*align-self: baseline;/);
  assert.match(heroSource, /\.hero-inline-focus-emoji \{[\s\S]*transform: translateY\(0\.04em\);/);
});

test("hero copy stays lighter and gets a bit more horizontal room", () => {
  const heroSource = readSource("../src/app/landing/components/hero.tsx");

  assert.match(heroSource, /maxWidth: "36rem"/);
  assert.match(heroSource, /font-weight: 320;/);
  assert.match(heroSource, /font-variation-settings: "wght" 320;/);
});

test("vertical cut reveal does not count spaces as animated characters", () => {
  const revealSource = readSource("../src/app/landing/components/vertical-cut-reveal.tsx");

  assert.match(revealSource, /reduce\(\(count, word\) => count \+ word\.characters\.length, 0\)/);
  assert.doesNotMatch(revealSource, /word\.characters\.length \+ \(word\.needsSpace \? 1 : 0\)/);
});

test("vertical cut reveal uses a stable random anchor", () => {
  const revealSource = readSource("../src/app/landing/components/vertical-cut-reveal.tsx");

  assert.match(revealSource, /const randomAnchorIndex = useMemo\(/);
  assert.match(revealSource, /return Math\.abs\(randomAnchorIndex - index\) \* staggerDuration;/);
  assert.doesNotMatch(revealSource, /const randomIndex = Math\.floor\(Math\.random\(\) \* total\)/);
});

test("vertical cut reveal completes on the last finishing animated character", () => {
  const revealSource = readSource("../src/app/landing/components/vertical-cut-reveal.tsx");

  assert.match(revealSource, /const totalAnimatedElements =/);
  assert.match(revealSource, /const finalAnimatedIndex =/);
  assert.match(revealSource, /custom=\{characterIndex \+ previousCharsCount\}/);
  assert.match(revealSource, /previousCharsCount \+ characterIndex === finalAnimatedIndex/);
  assert.doesNotMatch(revealSource, /wordIndex === renderedElements.length - 1 && characterIndex === wordObject.characters.length - 1/);
});

test("third hero line keeps copy and Apple Calendar in one inline wrapper", () => {
  const heroAst = parseTsx("../src/app/landing/components/hero.tsx");
  const spans = findJsxElementsByTag(heroAst, "span");
  const targetSpan = spans.find((node) => getAttributeValue(node, "className") === "hero-reveal-line hero-reveal-line-tertiary hero-reveal-line-with-icon");

  assert.ok(targetSpan, "Expected third line wrapper span");

  const targetText = targetSpan.getText();
  assert.match(targetText, /containerClassName="hero-reveal-inline-copy"/);
  assert.match(targetText, /\{`PLAN DEEPER DAYS`\}/);
  assert.match(targetText, /hero-inline-apple-calendar-reveal/);
  assert.match(targetText, /hero-inline-apple-calendar-motion/);
  assert.match(targetText, /src="\/logos\/apple-calendar\.png"/);
});
