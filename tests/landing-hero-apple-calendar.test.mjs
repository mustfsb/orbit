import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";

function readHeroSource() {
  return readFileSync(new URL("../src/app/landing/components/hero.tsx", import.meta.url), "utf8");
}

function parseHeroTsx() {
  return ts.createSourceFile("hero.tsx", readHeroSource(), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
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

test("landing hero keeps Apple Calendar inline with PLAN DEEPER DAYS", () => {
  const heroAst = parseHeroTsx();
  const spans = findJsxElementsByTag(heroAst, "span");
  const targetSpan = spans.find((node) => getAttributeValue(node, "className") === "hero-reveal-line hero-reveal-line-tertiary hero-reveal-line-with-icon");

  assert.ok(targetSpan, "Expected inline third-line wrapper");

  const targetText = targetSpan.getText();

  assert.match(targetText, /\{`PLAN DEEPER DAYS`\}/);
  assert.match(targetText, /hero-inline-apple-calendar-reveal/);
  assert.match(targetText, /src="\/logos\/apple-calendar\.png"/);
  assert.doesNotMatch(targetText, /PLAN DEEPER DAYS 📅/);
  assert.doesNotMatch(targetText, /PLAN DEEPER DAYS /);
});

test("landing hero animates the real Apple Calendar logo instead of an overlay placeholder", () => {
  const heroAst = parseHeroTsx();
  const motionSpans = findJsxElementsByTag(heroAst, "motion.span");
  const animatedCalendar = motionSpans.find((node) => getAttributeValue(node, "className") === "hero-inline-apple-calendar-motion");

  assert.ok(animatedCalendar, "Expected animated Apple Calendar motion span");
  assert.match(animatedCalendar.getText(), /src="\/logos\/apple-calendar\.png"/);
  assert.ok(!readHeroSource().includes("hero-inline-apple-calendar-shell"));
});
