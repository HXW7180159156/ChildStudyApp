export enum ScreenState {
  HOME = 'HOME',
  LOADING = 'LOADING',
  LEARN = 'LEARN',
  QUIZ = 'QUIZ',
  SUCCESS = 'SUCCESS'
}

export type LessonCategory = 'alphabet' | 'phonetics' | 'topic';

export interface WordItem {
  word: string;
  pronunciation: string; // Phonetic or simple spelling
  translation: string; // Chinese translation
  definition: string; // Simple English definition
  imageUrl?: string; // Base64 or URL
  audioData?: Float32Array; // Decoded audio buffer data
}

export interface LessonConfig {
  id: string;
  topic: string;
  category: LessonCategory;
  color: string;
  icon: string;
  level: number;
}