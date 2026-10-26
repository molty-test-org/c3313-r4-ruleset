// Small text helpers the fixture app exposes.
function countWords(text) {
  const t = String(text).trim();
  return t === "" ? 0 : t.split(/\s+/).length;
}
function slugify(text) {
  return String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function truncate(text, max) {
  const s = String(text);
  return s.length <= max ? s : s.slice(0, Math.max(0, max - 1)) + "…";
}
function countVowels(text) {
  const matches = String(text).match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
module.exports = { countWords, slugify, truncate, countVowels };
