import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ScreenState, LessonConfig, WordItem, LessonCategory, ProgressMap, QuizResult, CachedWord } from './types';
import { generateVocabulary, generateImage, generateSpeechBase64, hasApiKey } from './services/geminiService';
import { audioBufferFromBase64 } from './services/audioUtils';
import { loadProgress, recordLessonResult, loadCachedLesson, saveCachedLesson } from './services/storage';
import { LoadingScreen } from './components/LoadingScreen';
import { FlashCard } from './components/FlashCard';
import { Quiz } from './components/Quiz';
import { ErrorScreen } from './components/ErrorScreen';
import { ReportScreen } from './components/ReportScreen';

// --- DATA GENERATION HELPERS ---

const BG_COLORS = [
  'bg-red-100', 'bg-orange-100', 'bg-amber-100', 'bg-yellow-100', 'bg-lime-100',
  'bg-green-100', 'bg-emerald-100', 'bg-teal-100', 'bg-cyan-100', 'bg-sky-100',
  'bg-blue-100', 'bg-indigo-100', 'bg-violet-100', 'bg-purple-100', 'bg-fuchsia-100',
  'bg-pink-100', 'bg-rose-100',
];

const ALPHABET_LESSONS: LessonConfig[] = Array.from({ length: 26 }, (_, i) => {
  const char = String.fromCharCode(65 + i);
  return {
    id: `letter-${char.toLowerCase()}`,
    topic: `Letter ${char}`,
    category: 'alphabet',
    color: BG_COLORS[i % BG_COLORS.length],
    icon: char,
    level: 1,
  };
});

const PHONETICS_LESSONS: LessonConfig[] = [
  { id: 'p1', topic: 'Short A /æ/', category: 'phonetics', color: 'bg-orange-100', icon: '😺', level: 2 },
  { id: 'p2', topic: 'Short E /e/', category: 'phonetics', color: 'bg-teal-100', icon: '🛏️', level: 2 },
  { id: 'p3', topic: 'Short I /ɪ/', category: 'phonetics', color: 'bg-purple-100', icon: '🐷', level: 2 },
  { id: 'p4', topic: 'Short O /ɒ/', category: 'phonetics', color: 'bg-red-100', icon: '🦊', level: 2 },
  { id: 'p5', topic: 'Short U /ʌ/', category: 'phonetics', color: 'bg-yellow-100', icon: '🚌', level: 2 },
  { id: 'p6', topic: 'Sound /s/', category: 'phonetics', color: 'bg-indigo-100', icon: '🐍', level: 2 },
  { id: 'p7', topic: 'Sound /sh/', category: 'phonetics', color: 'bg-blue-100', icon: '🤫', level: 2 },
  { id: 'p8', topic: 'Sound /ch/', category: 'phonetics', color: 'bg-green-100', icon: '🚂', level: 2 },
  { id: 'p9', topic: 'Sound /th/', category: 'phonetics', color: 'bg-cyan-100', icon: '🦷', level: 2 },
];

const TOPIC_LESSONS: LessonConfig[] = [
  { id: '1', topic: 'Farm Animals', category: 'topic', color: 'bg-green-100', icon: '🐮', level: 3 },
  { id: '2', topic: 'Fruits', category: 'topic', color: 'bg-red-100', icon: '🍎', level: 3 },
  { id: '3', topic: 'Family', category: 'topic', color: 'bg-blue-100', icon: '👨‍👩‍👧', level: 3 },
  { id: '4', topic: 'Colors', category: 'topic', color: 'bg-yellow-100', icon: '🌈', level: 3 },
  { id: '5', topic: 'Vehicles', category: 'topic', color: 'bg-orange-100', icon: '🚗', level: 3 },
  { id: '6', topic: 'Body Parts', category: 'topic', color: 'bg-pink-100', icon: '👀', level: 3 },
  { id: '7', topic: 'Clothing', category: 'topic', color: 'bg-purple-100', icon: '👕', level: 3 },
  { id: '8', topic: 'School', category: 'topic', color: 'bg-teal-100', icon: '🏫', level: 3 },
  { id: '9', topic: 'Nature', category: 'topic', color: 'bg-emerald-100', icon: '🌳', level: 3 },
  { id: '10', topic: 'Yummy Food', category: 'topic', color: 'bg-amber-100', icon: '🍕', level: 3 },
  { id: '11', topic: 'Space', category: 'topic', color: 'bg-indigo-100', icon: '🚀', level: 3 },
  { id: '12', topic: 'Ocean Life', category: 'topic', color: 'bg-cyan-100', icon: '🐙', level: 3 },
  { id: '13', topic: 'Numbers 1-10', category: 'topic', color: 'bg-lime-100', icon: '🔢', level: 3 },
  { id: '14', topic: 'Shapes', category: 'topic', color: 'bg-violet-100', icon: '🔺', level: 3 },
  { id: '15', topic: 'Weather', category: 'topic', color: 'bg-sky-100', icon: '☀️', level: 3 },
  { id: '16', topic: 'Toys', category: 'topic', color: 'bg-rose-100', icon: '🧸', level: 3 },
];

const LESSONS: LessonConfig[] = [
  ...ALPHABET_LESSONS,
  ...PHONETICS_LESSONS,
  ...TOPIC_LESSONS,
];

const PRAISE: Record<number, { title: string; sub: string; emoji: string; bg: string }> = {
  3: { title: 'Perfect!', sub: 'You are a superstar!', emoji: '🏆', bg: 'bg-brand-yellow' },
  2: { title: 'Great Job!', sub: 'Keep practicing to get all stars!', emoji: '🌟', bg: 'bg-brand-green' },
  1: { title: 'Nice Try!', sub: 'Let\'s review the tricky ones!', emoji: '💪', bg: 'bg-brand-blue' },
  0: { title: 'Good Effort!', sub: 'Practice makes perfect!', emoji: '🌱', bg: 'bg-brand-orange' },
};

function App() {
  const [screen, setScreen] = useState<ScreenState>(ScreenState.HOME);
  const [currentLesson, setCurrentLesson] = useState<LessonConfig | null>(null);
  const [lessonData, setLessonData] = useState<WordItem[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<LessonCategory>('alphabet');
  const [progress, setProgress] = useState<ProgressMap>({});
  const [lastResult, setLastResult] = useState<QuizResult | null>(null);
  const [reviewWords, setReviewWords] = useState<WordItem[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const audioContextRef = useRef<AudioContext | null>(null);

  const mostRecentLessonId = useMemo(() => {
    let bestId: string | null = null;
    let bestTs = 0;
    for (const p of Object.values(progress) as import('./types').LessonProgress[]) {
      if (p.lastStudiedAt > bestTs) {
        bestTs = p.lastStudiedAt;
        bestId = p.lessonId;
      }
    }
    return bestId;
  }, [progress]);

  useEffect(() => {
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioContextRef.current = new AudioContextClass({ sampleRate: 24000 });

    const unlockAudio = () => {
      if (audioContextRef.current?.state === 'suspended') {
        audioContextRef.current.resume();
      }
      document.removeEventListener('click', unlockAudio);
    };
    document.addEventListener('click', unlockAudio);

    setProgress(loadProgress());

    return () => {
      audioContextRef.current?.close();
    };
  }, []);

  /**
   * Hydrates cached words by decoding base64 audio into runtime AudioBuffers.
   */
  const hydrateCached = useCallback(async (cached: CachedWord[]): Promise<WordItem[]> => {
    return Promise.all(
      cached.map(async (w) => {
        let audioBuffer: AudioBuffer | undefined;
        if (w.audioBase64 && audioContextRef.current) {
          try {
            audioBuffer = await audioBufferFromBase64(w.audioBase64, audioContextRef.current);
          } catch (e) {
            console.warn('Failed to decode cached audio', e);
          }
        }
        return { ...w, audioBuffer };
      }),
    );
  }, []);

  const loadLessonContent = useCallback(
    async (lesson: LessonConfig): Promise<WordItem[]> => {
      // 1. Try local cache first.
      const cached = loadCachedLesson(lesson.id);
      if (cached && cached.words.length > 0) {
        return hydrateCached(cached.words);
      }

      // 2. Generate vocabulary + media.
      const vocabList = await generateVocabulary(lesson.topic, lesson.category);
      if (!vocabList || vocabList.length === 0) {
        throw new Error('Empty vocabulary');
      }

      const enriched: WordItem[] = await Promise.all(
        vocabList.map(async (item) => {
          const [imageUrl, audioBase64] = await Promise.all([
            generateImage(item.word),
            generateSpeechBase64(item.word),
          ]);
          let audioBuffer: AudioBuffer | undefined;
          if (audioBase64 && audioContextRef.current) {
            try {
              audioBuffer = await audioBufferFromBase64(audioBase64, audioContextRef.current);
            } catch (e) {
              console.warn('Failed to decode generated audio', e);
            }
          }
          return { ...item, imageUrl, audioBase64, audioBuffer };
        }),
      );

      // 3. Persist to cache (without runtime AudioBuffer).
      const toCache: CachedWord[] = enriched.map(({ audioBuffer: _ab, ...rest }) => rest);
      saveCachedLesson(lesson.id, toCache);

      return enriched;
    },
    [hydrateCached],
  );

  const startLesson = useCallback(
    async (lesson: LessonConfig) => {
      setCurrentLesson(lesson);
      setErrorMessage('');
      setScreen(ScreenState.LOADING);
      try {
        const data = await loadLessonContent(lesson);
        setLessonData(data);
        setCurrentWordIndex(0);
        setReviewWords(null);
        setScreen(ScreenState.LEARN);
      } catch (e) {
        console.error(e);
        setErrorMessage(e instanceof Error ? e.message : String(e));
        setScreen(ScreenState.ERROR);
      }
    },
    [loadLessonContent],
  );

  const handleNextWord = () => {
    if (currentWordIndex < lessonData.length - 1) {
      setCurrentWordIndex((prev) => prev + 1);
    } else {
      setScreen(ScreenState.QUIZ);
    }
  };

  const handleQuizComplete = (result: QuizResult) => {
    setLastResult(result);
    if (currentLesson) {
      const updated = recordLessonResult(currentLesson.id, {
        stars: result.stars,
        correct: result.correct,
        total: result.total,
      });
      setProgress(updated);
    }
    setScreen(ScreenState.SUCCESS);
  };

  const handleStartReview = () => {
    if (!lastResult || lastResult.wrongWords.length === 0) return;
    // Need at least 3 options for the quiz UI; pad with other lesson words.
    const others = lessonData.filter(
      (w) => !lastResult.wrongWords.some((ww) => ww.word === w.word),
    );
    const padded = [...lastResult.wrongWords, ...others].slice(0, Math.max(3, lastResult.wrongWords.length));
    setReviewWords(padded);
    setScreen(ScreenState.QUIZ);
  };

  const handleReviewComplete = (result: QuizResult) => {
    // Reviews don't overwrite the original score; they only update lastStudiedAt
    // and best stars if the child does even better.
    setLastResult(result);
    if (currentLesson) {
      const updated = recordLessonResult(currentLesson.id, {
        stars: result.stars,
        correct: result.correct,
        total: result.total,
      });
      setProgress(updated);
    }
    setReviewWords(null);
    setScreen(ScreenState.SUCCESS);
  };

  // --- RENDER METHODS ---

  if (screen === ScreenState.LOADING && currentLesson) {
    return <LoadingScreen topic={currentLesson.topic} />;
  }

  if (screen === ScreenState.ERROR && currentLesson) {
    return (
      <ErrorScreen
        topic={currentLesson.topic}
        message={errorMessage}
        onRetry={() => startLesson(currentLesson)}
        onHome={() => setScreen(ScreenState.HOME)}
      />
    );
  }

  if (screen === ScreenState.REPORT) {
    return <ReportScreen lessons={LESSONS} progress={progress} onBack={() => setScreen(ScreenState.HOME)} />;
  }

  if (screen === ScreenState.LEARN) {
    return (
      <div className="min-h-screen bg-brand-cream p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <button onClick={() => setScreen(ScreenState.HOME)} className="text-2xl hover:scale-110 transition-transform">🏠</button>
          <div className="h-2 flex-1 mx-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-brand-blue transition-all duration-500"
              style={{ width: `${((currentWordIndex + 1) / lessonData.length) * 100}%` }}
            />
          </div>
          <span className="font-bold text-gray-500">{currentWordIndex + 1}/{lessonData.length}</span>
        </div>
        <FlashCard
          item={lessonData[currentWordIndex]}
          audioContext={audioContextRef.current}
          onNext={handleNextWord}
          isLast={currentWordIndex === lessonData.length - 1}
        />
      </div>
    );
  }

  if (screen === ScreenState.QUIZ) {
    const isReview = reviewWords !== null;
    const quizWords = isReview ? reviewWords! : lessonData;
    return (
      <div className="min-h-screen bg-brand-cream p-4 flex flex-col">
        <div className="flex justify-end mb-4">
          <button onClick={() => setScreen(ScreenState.HOME)} className="text-2xl hover:scale-110 transition-transform">🏠</button>
        </div>
        <Quiz
          key={isReview ? 'review' : 'quiz'}
          words={quizWords}
          audioContext={audioContextRef.current}
          onComplete={isReview ? handleReviewComplete : handleQuizComplete}
          reviewMode={isReview}
        />
      </div>
    );
  }

  if (screen === ScreenState.SUCCESS && lastResult) {
    const stars = lastResult.stars;
    const praise = PRAISE[stars] ?? PRAISE[0];
    const wrongCount = lastResult.wrongWords.length;
    return (
      <div className={`min-h-screen ${praise.bg} flex flex-col items-center justify-center p-6 text-center`}>
        <div className="text-8xl mb-4 animate-bounce">{praise.emoji}</div>
        <h1 className="text-4xl font-black text-white mb-2 drop-shadow-md">{praise.title}</h1>
        <p className="text-lg text-white/90 font-bold mb-6">
          {currentLesson?.topic}
          <br />
          {lastResult.correct} / {lastResult.total} correct
        </p>
        <div className="flex gap-2 text-5xl mb-8 drop-shadow-md" aria-label={`${stars} stars`}>
          <span>{stars >= 1 ? '⭐' : '☆'}</span>
          <span>{stars >= 2 ? '⭐' : '☆'}</span>
          <span>{stars >= 3 ? '⭐' : '☆'}</span>
        </div>
        <p className="text-white/80 font-bold mb-8 text-sm">{praise.sub}</p>

        <div className="flex flex-col gap-3 w-full max-w-xs">
          {wrongCount > 0 && (
            <button
              onClick={handleStartReview}
              className="bg-white text-brand-orange text-xl font-bold py-3 px-8 rounded-full shadow-xl hover:scale-105 active:scale-95 transition-transform"
            >
              Review {wrongCount} Word{wrongCount > 1 ? 's' : ''} 📝
            </button>
          )}
          <button
            onClick={() => currentLesson && startLesson(currentLesson)}
            className="bg-white/90 text-brand-blue text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
          >
            Play Again 🔄
          </button>
          <button
            onClick={() => setScreen(ScreenState.HOME)}
            className="bg-transparent text-white text-lg font-bold py-2 px-8 rounded-full border-2 border-white/70 hover:bg-white/10 active:scale-95 transition-all"
          >
            Back to Home 🏠
          </button>
        </div>
      </div>
    );
  }

  // --- HOME SCREEN ---
  const renderTabButton = (category: LessonCategory, label: string, icon: string) => (
    <button
      onClick={() => setActiveTab(category)}
      className={`
            flex-1 py-3 rounded-t-2xl font-bold text-sm sm:text-base transition-colors relative
            ${activeTab === category ? 'bg-brand-cream text-brand-blue' : 'bg-brand-blue/20 text-white hover:bg-brand-blue/30'}
        `}
    >
      <span className="block text-xl mb-1">{icon}</span>
      {label}
    </button>
  );

  const filteredLessons = LESSONS.filter((l) => l.category === activeTab);

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col">
      <header className="bg-brand-blue p-6 pb-0 shadow-lg z-10 rounded-b-[2rem]">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-black text-white tracking-wider drop-shadow-sm">LingoQuest</h1>
            <p className="text-blue-100 font-bold text-sm">For Kids 🚀</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setScreen(ScreenState.REPORT)}
              className="bg-white/95 text-brand-blue px-3 py-2 rounded-full shadow-sm text-sm font-bold hover:scale-105 active:scale-95 transition-transform"
              aria-label="View learning report"
            >
              📊 报告
            </button>
            <div className="bg-white p-2 rounded-full shadow-sm text-2xl">🧑‍🚀</div>
          </div>
        </div>

        {!hasApiKey && (
          <div className="bg-yellow-100 text-yellow-900 text-xs font-bold px-3 py-2 rounded-xl mb-3 text-center">
            ⚠️ 未检测到 GEMINI_API_KEY，使用示例数据预览模式
          </div>
        )}

        <div className="flex space-x-2 px-2">
          {renderTabButton('alphabet', 'Letters', '🔤')}
          {renderTabButton('phonetics', 'Sounds', '🗣️')}
          {renderTabButton('topic', 'Themes', '🌍')}
        </div>
      </header>

      <main className="flex-1 p-6 overflow-y-auto bg-brand-cream">
        <h2 className="text-xl font-bold text-gray-700 mb-6 text-center uppercase tracking-wide opacity-60">
          {activeTab === 'alphabet' && 'Step 1: Learn the ABCs'}
          {activeTab === 'phonetics' && 'Step 2: Master the Sounds'}
          {activeTab === 'topic' && 'Step 3: Explore the World'}
        </h2>

        <div className="space-y-6 max-w-md mx-auto relative pb-20">
          <div className="absolute left-1/2 top-4 bottom-4 w-4 bg-white rounded-full -translate-x-1/2 border-2 border-dashed border-gray-300 -z-0"></div>

          {filteredLessons.map((lesson, index) => {
            const p = progress[lesson.id];
            const stars = p?.bestStars ?? 0;
            const isRecent = mostRecentLessonId === lesson.id;
            return (
              <div
                key={lesson.id}
                className={`relative z-10 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-pop`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <button
                  onClick={() => startLesson(lesson)}
                  className={`
                    w-32 h-32 rounded-full shadow-xl border-4 flex flex-col items-center justify-center
                    transform hover:scale-110 active:scale-95 transition-all duration-300 relative
                    ${lesson.color}
                    ${isRecent ? 'border-brand-orange ring-4 ring-brand-orange/40' : 'border-white'}
                  `}
                  aria-label={`Start lesson ${lesson.topic}`}
                >
                  {p?.completed && (
                    <span className="absolute -top-2 -right-2 bg-brand-green text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-md">
                      ✓
                    </span>
                  )}
                  <span className="text-4xl mb-1 font-black text-brand-blue">{lesson.icon}</span>
                  <span className="text-xs font-bold text-gray-600 px-2 truncate w-full text-center">{lesson.topic}</span>
                  <div className="flex gap-0.5 mt-1" aria-label={`${stars} stars earned`}>
                    <span className={`text-[10px] ${stars >= 1 ? '' : 'opacity-30'}`}>⭐</span>
                    <span className={`text-[10px] ${stars >= 2 ? '' : 'opacity-30'}`}>⭐</span>
                    <span className={`text-[10px] ${stars >= 3 ? '' : 'opacity-30'}`}>⭐</span>
                  </div>
                  {isRecent && (
                    <span className="absolute -bottom-3 bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                      最近
                    </span>
                  )}
                </button>
              </div>
            );
          })}

          {filteredLessons.length === 0 && (
            <div className="text-center py-10 text-gray-400 font-bold z-10 relative bg-brand-cream/80 rounded-xl">
              Coming Soon! 🚧
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
