import React, { useState } from 'react';
import { WordItem } from '../types';
import { playAudioBuffer } from '../services/audioUtils';

interface QuizProps {
  words: WordItem[];
  audioContext: AudioContext | null;
  onComplete: () => void;
}

export const Quiz: React.FC<QuizProps> = ({ words, audioContext, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState<'correct' | 'wrong' | null>(null);

  const currentWord = words[currentIndex];
  
  // Generate options: Correct word + 2 random others
  const options = React.useMemo(() => {
    const others = words.filter(w => w.word !== currentWord.word);
    // Shuffle others and take 2
    const wrongOptions = others.sort(() => 0.5 - Math.random()).slice(0, 2);
    // Combine and shuffle
    return [currentWord, ...wrongOptions].sort(() => 0.5 - Math.random());
  }, [currentWord, words]);

  const handleOptionClick = (selectedWord: WordItem) => {
    if (showFeedback) return;

    if (selectedWord.word === currentWord.word) {
      setShowFeedback('correct');
      // Play success sound logic here if available, or speak the word again
      if(audioContext && currentWord.audioData) {
         playAudioBuffer(currentWord.audioData as unknown as AudioBuffer, audioContext);
      }
      
      setTimeout(() => {
        if (currentIndex < words.length - 1) {
          setCurrentIndex(prev => prev + 1);
          setShowFeedback(null);
        } else {
          onComplete();
        }
      }, 1500);
    } else {
      setShowFeedback('wrong');
      setTimeout(() => setShowFeedback(null), 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full w-full max-w-md mx-auto">
      <div className="mb-6 text-center">
        <h3 className="text-xl text-gray-500 font-bold uppercase tracking-widest mb-2">Quiz Time!</h3>
        <h2 className="text-4xl font-black text-brand-blue">
            Where is <br/>
            <span className="text-brand-orange text-5xl">"{currentWord.word}"</span>?
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        {options.map((opt, idx) => (
          <button
            key={opt.word}
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
            {/* Overlay for feedback */}
            {showFeedback === 'correct' && opt.word === currentWord.word && (
                <div className="absolute inset-0 bg-brand-green/80 flex items-center justify-center text-5xl animate-bounce">
                    🎉
                </div>
            )}
             {showFeedback === 'wrong' && (
                <div className="absolute inset-0 bg-red-500/20 flex items-center justify-center text-5xl">
                    
                </div>
            )}
          </button>
        ))}
      </div>
      
      <div className="mt-8 flex gap-2">
         {words.map((_, i) => (
             <div key={i} className={`h-3 w-3 rounded-full ${i === currentIndex ? 'bg-brand-blue' : i < currentIndex ? 'bg-brand-green' : 'bg-gray-300'}`} />
         ))}
      </div>
    </div>
  );
};
