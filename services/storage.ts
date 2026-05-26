import { LessonProgress, ProgressMap, CachedLesson, CachedWord } from '../types';

const PROGRESS_KEY = 'lingoquest:progress:v1';
// v4: bumped after adding dedicated non-generic illustrations for all built-in
// Letters, Sounds, and Themes vocabulary that previously displayed generic
// initial-card fallback images. Also continues to guard against older cached
// vocab that may have contained older invalid words (e.g. "Ipple").
const CACHE_PREFIX = 'lingoquest:cache:v4:';

// --- Progress ---------------------------------------------------------------

export function loadProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as ProgressMap;
  } catch {
    return {};
  }
}

export function saveProgress(progress: ProgressMap): void {
  try {
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch {
    /* quota or privacy mode – ignore */
  }
}

/**
 * Records the result of a finished lesson. Stars only ever increase, attempts
 * always increase, last score / timestamp reflect the latest run.
 */
export function recordLessonResult(
  lessonId: string,
  result: { stars: number; correct: number; total: number },
): ProgressMap {
  const progress = loadProgress();
  const prev = progress[lessonId];
  const next: LessonProgress = {
    lessonId,
    bestStars: Math.max(prev?.bestStars ?? 0, result.stars),
    lastStars: result.stars,
    lastCorrect: result.correct,
    lastTotal: result.total,
    attempts: (prev?.attempts ?? 0) + 1,
    lastStudiedAt: Date.now(),
    completed: true,
  };
  progress[lessonId] = next;
  saveProgress(progress);
  return progress;
}

// --- Lesson content cache ---------------------------------------------------

function cacheKey(lessonId: string): string {
  return `${CACHE_PREFIX}${lessonId}`;
}

export function loadCachedLesson(lessonId: string): CachedLesson | null {
  try {
    const raw = localStorage.getItem(cacheKey(lessonId));
    if (!raw) return null;
    return JSON.parse(raw) as CachedLesson;
  } catch {
    return null;
  }
}

export function saveCachedLesson(lessonId: string, words: CachedWord[]): void {
  try {
    const payload: CachedLesson = { lessonId, words, savedAt: Date.now() };
    localStorage.setItem(cacheKey(lessonId), JSON.stringify(payload));
  } catch {
    /* quota exceeded – ignore, content will simply be regenerated next time */
  }
}

export function clearLessonCache(lessonId: string): void {
  try {
    localStorage.removeItem(cacheKey(lessonId));
  } catch {
    /* ignore */
  }
}
