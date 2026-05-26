import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const fallbackData = readFileSync(new URL('../services/fallbackData.ts', import.meta.url), 'utf8');
const wordImages = readFileSync(new URL('../services/wordImages.ts', import.meta.url), 'utf8');

function normalize(word) {
  const lower = word.trim().toLowerCase();
  if (lower.length > 3 && lower.endsWith('s') && !lower.endsWith('ss')) {
    return lower.slice(0, -1);
  }
  return lower;
}

const vocabularyWords = [...fallbackData.matchAll(/word:\s*'([^']+)'/g)].map((match) => match[1]);
const svgKeys = new Set([...wordImages.matchAll(/^\s{2}([a-z0-9-]+):\s*`/gm)].map((match) => match[1]));
const emojiBlock = wordImages.match(/const WORD_EMOJIS:[\s\S]*?};/);
assert.ok(emojiBlock, 'WORD_EMOJIS mapping should exist');
const emojiKeys = new Set([...emojiBlock[0].matchAll(/^\s{2}(?:'([^']+)'|([a-z0-9]+)):\s*'/gm)].map((match) => match[1] ?? match[2]));

function hasDedicatedImage(word) {
  const lower = word.trim().toLowerCase();
  const stripped = normalize(word);
  return svgKeys.has(lower) || svgKeys.has(stripped) || emojiKeys.has(lower) || emojiKeys.has(stripped);
}

test('every built-in vocabulary word has a non-generic dedicated image', () => {
  const missing = [...new Set(vocabularyWords.filter((word) => !hasDedicatedImage(word)))].sort((a, b) =>
    a.localeCompare(b),
  );

  assert.deepEqual(missing, []);
});

test('dedicated emoji image coverage includes known formerly generic words', () => {
  for (const word of ['Dad', 'Dolphin', 'Pineapple', 'Rocket', 'Yo-yo', 'Zero']) {
    assert.equal(hasDedicatedImage(word), true, `${word} should not use generic fallback artwork`);
  }
});
