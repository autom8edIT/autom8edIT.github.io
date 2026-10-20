const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const script = fs.readFileSync(path.join(root, "assets", "js", "theme.js"), "utf8");
const portfolio = fs.readFileSync(path.join(root, "assets", "css", "style.scss"), "utf8");
const resume = fs.readFileSync(path.join(root, "resume", "index.html"), "utf8");

function page(storage, unavailable = false) {
  const classes = new Set();
  const buttons = Array.from({ length: 2 }, () => ({
    attributes: {},
    listeners: {},
    setAttribute(name, value) { this.attributes[name] = value; },
    addEventListener(name, listener) { this.listeners[name] = listener; },
  }));
  let ready;
  const document = {
    body: {
      classList: {
        toggle(name, enabled) { enabled ? classes.add(name) : classes.delete(name); },
        contains(name) { return classes.has(name); },
      },
    },
    querySelectorAll() { return buttons; },
    addEventListener(name, listener) {
      assert.equal(name, "DOMContentLoaded");
      ready = listener;
    },
  };
  const localStorage = {
    getItem(key) {
      if (unavailable) throw new Error("Storage blocked");
      return storage.get(key) ?? null;
    },
    setItem(key, value) {
      if (unavailable) throw new Error("Storage blocked");
      storage.set(key, value);
    },
  };
  vm.runInNewContext(script, { document, localStorage });
  ready();
  return { classes, buttons };
}

test("dark is the default and invalid stored values do not enable light mode", () => {
  for (const value of [undefined, "dark", "invalid"]) {
    const state = page(new Map([["autom8ed-theme", value]]));
    assert.equal(state.classes.has("flashbang"), false);
    for (const button of state.buttons) {
      assert.equal(button.textContent, "Flashbang mode");
      assert.equal(button.attributes["aria-pressed"], "false");
    }
  }
});

test("either toggle updates all labels and persists the theme between pages", () => {
  const storage = new Map();
  const first = page(storage);
  first.buttons[1].listeners.click();
  assert.equal(first.classes.has("flashbang"), true);
  assert.equal(storage.get("autom8ed-theme"), "flashbang");
  for (const button of first.buttons) {
    assert.equal(button.textContent, "Dark mode");
    assert.equal(button.attributes["aria-pressed"], "true");
  }
  const second = page(storage);
  assert.equal(second.classes.has("flashbang"), true);
  second.buttons[0].listeners.click();
  assert.equal(storage.get("autom8ed-theme"), "dark");
  assert.equal(page(storage).classes.has("flashbang"), false);
});

test("blocked storage still permits switching the current page", () => {
  const state = page(new Map(), true);
  state.buttons[0].listeners.click();
  assert.equal(state.classes.has("flashbang"), true);
  state.buttons[0].listeners.click();
  assert.equal(state.classes.has("flashbang"), false);
});

function variables(source, selector) {
  const start = source.indexOf(`${selector} {`);
  assert.notEqual(start, -1, `Missing ${selector}`);
  const block = source.slice(start, source.indexOf("}", start));
  return Object.fromEntries(
    [...block.matchAll(/--([\w-]+):\s*(#[\da-f]+)\s*;/gi)]
      .map(([, name, value]) => [name, value.toLowerCase()])
  );
}

function luminance(hex) {
  const linear = hex.slice(1).match(/../g).map((part) => {
    const channel = parseInt(part, 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return linear[0] * 0.2126 + linear[1] * 0.7152 + linear[2] * 0.0722;
}

test("both pages share the approved palettes and normal-text contrast", () => {
  const themes = [
    [":root", { bg: "#111113", surface: "#1c1c1f", text: "#ededef", muted: "#a1a1aa", accent: "#8ab4f8", line: "#38383f" }],
    ["body.flashbang", { bg: "#fafafa", surface: "#f1f2f4", text: "#202124", muted: "#5f6368", accent: "#1d4ed8", line: "#d5d5db" }],
  ];
  for (const [selector, expected] of themes) {
    assert.deepEqual(variables(portfolio, selector), expected);
    assert.deepEqual(variables(resume, selector), expected);
    for (const foreground of ["text", "muted", "accent"]) {
      for (const background of ["bg", "surface"]) {
        const a = luminance(expected[foreground]);
        const b = luminance(expected[background]);
        assert.ok((Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05) >= 4.5,
          `${selector} ${foreground} on ${background}`);
      }
    }
  }
});

test("code wrappers, nested code and Rouge tokens have theme-aware overrides", () => {
  assert.match(portfolio, /\.highlight,\s*pre,\s*pre\.highlight\s*\{[^}]*background:\s*var\(--surface\)/);
  assert.match(portfolio, /pre code\s*\{[^}]*background:\s*transparent/);
  assert.match(portfolio, /\.highlight span\[class\]\s*\{[^}]*color:\s*var\(--text\)/);
});

test("print overrides both stored modes and keeps resume controls available on mobile", () => {
  for (const source of [portfolio, resume]) {
    const print = source.slice(source.indexOf("@media print"));
    assert.match(print, /body,\s*body\.flashbang\s*\{/);
    assert.match(print, /--bg:\s*#fff;/);
    assert.match(print, /--surface:\s*#fff;/);
  }
  assert.match(resume, /\.org\s*\{\s*color:\s*var\(--text\)/);
  const mobile = resume.slice(resume.indexOf("@media (max-width: 760px)"), resume.indexOf("@media print"));
  assert.doesNotMatch(mobile, /display:\s*none/);
  assert.match(resume, /src="\/assets\/js\/theme\.js"/);
});
