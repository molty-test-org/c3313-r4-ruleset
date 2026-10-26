const test = require("node:test");
const assert = require("node:assert");
const { countWords, slugify, truncate, reverseWords } = require("../src/words");

test("countWords counts whitespace-separated words", () => {
  assert.strictEqual(countWords("one two  three"), 3);
  assert.strictEqual(countWords("   "), 0);
});
test("slugify makes a url slug", () => {
  assert.strictEqual(slugify("Hello, World!"), "hello-world");
});
test("truncate shortens with an ellipsis", () => {
  assert.strictEqual(truncate("abcdef", 4), "abc…");
  assert.strictEqual(truncate("abc", 4), "abc");
});
test("reverseWords reverses word order but not characters", () => {
  assert.strictEqual(reverseWords("one two three"), "three two one");
  assert.strictEqual(reverseWords("  alpha   beta  "), "beta alpha");
});
test("reverseWords collapses repeated spaces between words", () => {
  assert.strictEqual(reverseWords("a   b    c"), "c b a");
});
test("reverseWords returns empty string for whitespace-only input", () => {
  assert.strictEqual(reverseWords("   \t  "), "");
  assert.strictEqual(reverseWords(""), "");
});
