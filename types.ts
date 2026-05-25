export enum ScreenState {
  HOME = 'HOME',
  LOADING = 'LOADING',
  LEARN = 'LEARN',
  QUIZ = 'QUIZ',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  REPORT = 'REPORT',
}

export type LessonCategory = 'alphabet' | 'phonetics' | 'topic';

export interface WordItem {
  word: string;
  pronunciation: string; // Phonetic or simple spelling
  translation: string;   // Chinese translation
  definition: string;    // Simple English definition
  imageUrl?: string;     // Base64 data URL or remote URL
  /** Raw base64 PCM audio (24kHz mono) returned by Gemini TTS. Cached in storage. */
  audioBase64?: string;
  /** Decoded AudioBuffer for runtime playback. Not persisted. */
  audioBuffer?: AudioBuffer;
}

export interface LessonConfig {
  id: string;
  topic: string;
  category: LessonCategory;
  color: string;
  icon: string;
  level: number;
}

/** Persisted per-lesson learning progress. */
export interface LessonProgress {
  lessonId: string;
  bestStars: number;     // best stars ever achieved (0-3)
  lastStars: number;     // stars from most recent attempt
  lastCorrect: number;   // correct answers on first try, latest attempt
  lastTotal: number;     // total quiz questions, latest attempt
  attempts: number;      // total number of completed lessons
  lastStudiedAt: number; // epoch ms
  completed: boolean;
}

export type ProgressMap = Record<string, LessonProgress>;

/** Cached lesson content (without the AudioBuffer, which can't be serialized). */
export type CachedWord = Omit<WordItem, 'audioBuffer'>;

export interface CachedLesson {
  lessonId: string;
  savedAt: number;
  words: CachedWord[];
}

/** Quiz outcome used to drive success / review screens. */
export interface QuizResult {
  total: number;
  correct: number;           // correct on first attempt
  wrongWords: WordItem[];    // words missed at least once
  stars: number;             // 0..3
}
