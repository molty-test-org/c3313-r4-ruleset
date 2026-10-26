const test = require("node:test");
const assert = require("node:assert");
const { countWords, slugify, truncate, countVowels } = require("../src/words");

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
test("countVowels counts a, e, i, o, u regardless of case", () => {
  assert.strictEqual(countVowels("HeLLo wOrld AEIOU"), 8);
});
test("countVowels returns 0 for empty and vowel-free text", () => {
  assert.strictEqual(countVowels(""), 0);
  assert.strictEqual(countVowels("rhythm sky"), 0);
});
