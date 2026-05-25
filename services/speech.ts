/**
 * Browser-native speech synthesis fallback.
 *
 * Used when Gemini TTS is unavailable (no API key, request failure, or cached
 * lessons that pre-date audio generation). Relies on the Web Speech API, which
 * is supported in all evergreen browsers and requires no network access.
 */

import { WordItem } from '../types';
import { playAudioBuffer } from './audioUtils';

const isBrowserSpeechAvailable = (): boolean =>
  typeof window !== 'undefined' && typeof window.speechSynthesis !== 'undefined';

let cachedVoices: SpeechSynthesisVoice[] | null = null;

function getEnglishVoice(): SpeechSynthesisVoice | undefined {
  if (!isBrowserSpeechAvailable()) return undefined;
  if (!cachedVoices || cachedVoices.length === 0) {
    cachedVoices = window.speechSynthesis.getVoices();
  }
  if (!cachedVoices || cachedVoices.length === 0) return undefined;
  // Prefer a child-friendly, US/UK English voice when available.
  const preferred =
    cachedVoices.find((v) => /en[-_]US/i.test(v.lang) && /female|samantha|google/i.test(v.name)) ||
    cachedVoices.find((v) => /en[-_]GB/i.test(v.lang)) ||
    cachedVoices.find((v) => /^en/i.test(v.lang));
  return preferred;
}

// Some browsers (Chrome) populate voices asynchronously.
if (isBrowserSpeechAvailable() && typeof window.speechSynthesis.onvoiceschanged !== 'undefined') {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoices = window.speechSynthesis.getVoices();
  };
}

/**
 * Speaks the given text using the browser's built-in TTS engine.
 * Returns true if speech was queued, false when the API is unavailable.
 */
export function speakText(text: string): boolean {
  if (!isBrowserSpeechAvailable() || !text) return false;
  try {
    // Cancel any in-flight utterance so rapid taps don't queue up.
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = getEnglishVoice();
    if (voice) utterance.voice = voice;
    utterance.lang = voice?.lang || 'en-US';
    // Slow and slightly higher pitched for young learners.
    utterance.rate = 0.85;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
    return true;
  } catch (e) {
    console.warn('Browser speech synthesis failed', e);
    return false;
  }
}

/**
 * Plays the pronunciation for a word, preferring the high-quality Gemini TTS
 * audio buffer when present and falling back to the browser's built-in speech
 * synthesis so children always hear the word read aloud.
 */
export function speakWord(item: WordItem, audioContext: AudioContext | null): void {
  if (audioContext && item.audioBuffer) {
    playAudioBuffer(item.audioBuffer, audioContext);
    return;
  }
  speakText(item.word);
}
