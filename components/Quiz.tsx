import React, { useMemo, useRef, useState } from 'react';
import { WordItem, QuizResult } from '../types';
import { playAudioBuffer } from '../services/audioUtils';

interface QuizProps {
  words: WordItem[];
  audioContext: AudioContext | null;
  onComplete: (result: QuizResult) => void;
  /** When true the heading reads "Review" instead of "Quiz". */
  reviewMode?: boolean;
}

interface Round {
  word: WordItem;
  options: WordItem[];
}

function shuffle<T>(arr: T[]): T[] {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildRounds(words: WordItem[]): Round[] {
  return words.map((word) => {
    const distractors = shuffle(words.filter((w) => w.word !== word.word)).slice(0, 2);
    return { word, options: shuffle([word, ...distractors]) };
  });
}

function computeStars(correct: number, total: number): number {
  if (total === 0) return 0;
  const ratio = correct / total;
  if (ratio >= 0.99) return 3;
  if (ratio >= 0.7) return 2;
  if (ratio > 0) return 1;
  return 0;
}

export const Quiz: React.FC<QuizProps> = ({ words, audioContext, onComplete, reviewMode = false }) => {
  const rounds = useMemo(() => buildRounds(words), [words]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);

  // Track answer quality across the whole quiz.
  const correctFirstTryRef = useRef(0);
  const wrongWordIdsRef = useRef<Set<string>>(new Set());
  const currentMissedRef = useRef(false);

  const round = rounds[currentIndex];
  const currentWord = round.word;

  const finishQuiz = () => {
    const correct = correctFirstTryRef.current;
    const total = rounds.length;
    const wrongWords = words.filter((w) => wrongWordIdsRef.current.has(w.word));
    onComplete({
      total,
      correct,
      wrongWords,
      stars: computeStars(correct, total),
    });
  };

  const handleOptionClick = (selectedWord: WordItem) => {
    if (showFeedback === 'correct') return;

    if (selectedWord.word === currentWord.word) {
      if (!currentMissedRef.current) {
        correctFirstTryRef.current += 1;
      }
      setShowFeedback('correct');
      if (audioContext && currentWord.audioBuffer) {
        playAudioBuffer(currentWord.audioBuffer, audioContext);
      }
      setTimeout(() => {
        if (currentIndex < rounds.length - 1) {
          currentMissedRef.current = false;
          setCurrentIndex((prev) => prev + 1);
          setShowFeedback(null);
        } else {
          finishQuiz();
        }
      }, 1500);
    } else {
      currentMissedRef.current = true;
      wrongWordIdsRef.current.add(currentWord.word);
      setShowFeedback('wrong');
      setTimeout(() => setShowFeedback(null), 900);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-md mx-auto">
      <div className="mb-6 text-center">
        <h3 className="text-xl text-gray-500 font-bold uppercase tracking-widest mb-2">
          {reviewMode ? 'Review Time!' : 'Quiz Time!'}
        </h3>
        <h2 className="text-4xl font-black text-brand-blue">
          Where is <br />
          <span className="text-brand-orange text-5xl">"{currentWord.word}"</span>?
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {round.options.map((opt, idx) => (
          <button
            key={`${currentIndex}-${opt.word}`}
            onClick={() => handleOptionClick(opt)}
            className={`
                relative aspect-square rounded-3xl overflow-hidden border-4 shadow-md transition-all
                ${showFeedback === 'correct' && opt.word === currentWord.word ? 'border-brand-green ring-4 ring-brand-green scale-105' : ''}
                ${showFeedback === 'wrong' && opt.word !== currentWord.word ? 'opacity-50 grayscale' : ''}
                ${!showFeedback ? 'border-white hover:scale-105 hover:shadow-xl' : ''}
                ${idx === 2 ? 'col-span-2 w-1/2 mx-auto' : ''}
            `}
          >
            {opt.imageUrl && <img src={opt.imageUrl} alt={opt.word} className="w-full h-full object-cover" />}
            {showFeedback === 'correct' && opt.word === currentWord.word && (
              <div className="absolute inset-0 bg-brand-green/80 flex items-center justify-center text-5xl animate-bounce">
                🎉
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="mt-8 flex gap-2">
        {rounds.map((_, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full ${i === currentIndex ? 'bg-brand-blue' : i < currentIndex ? 'bg-brand-green' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};
