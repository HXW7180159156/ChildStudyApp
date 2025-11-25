import React from 'react';
import { WordItem } from '../types';
import { playAudioBuffer } from '../services/audioUtils';

interface FlashCardProps {
  item: WordItem;
  audioContext: AudioContext | null;
  onNext: () => void;
  isLast: boolean;
}

export const FlashCard: React.FC<FlashCardProps> = ({ item, audioContext, onNext, isLast }) => {
  
  const playSound = () => {
    if (audioContext && item.audioData) {
      // We stored the AudioBuffer in item.audioData (typed as any in interface but handling here)
      // In a real app, strict typing for AudioBuffer is better.
      // Re-typing item.audioData for this scope:
      playAudioBuffer(item.audioData as unknown as AudioBuffer, audioContext);
    }
  };

  // Play sound on mount once
  React.useEffect(() => {
    const timer = setTimeout(() => {
        playSound();
    }, 500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  return (
    <div className="flex flex-col items-center justify-center h-full max-w-md w-full mx-auto animate-pop">
      <div 
        onClick={playSound}
        className="bg-white rounded-[3rem] shadow-xl p-6 w-full aspect-[4/5] flex flex-col items-center justify-between border-4 border-brand-yellow cursor-pointer hover:scale-105 transition-transform duration-300"
      >
        {/* Image Area */}
        <div className="w-full aspect-square rounded-[2rem] overflow-hidden bg-brand-cream mb-4 relative">
          {item.imageUrl ? (
            <img src={item.imageUrl} alt={item.word} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">No Image</div>
          )}
          <div className="absolute bottom-2 right-2 bg-white/80 p-2 rounded-full shadow-sm">
             🔊
          </div>
        </div>

        {/* Text Area */}
        <div className="text-center w-full">
            <h2 className="text-5xl font-black text-brand-blue mb-2 tracking-wide">{item.word}</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
                <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-sm font-bold">{item.pronunciation}</span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-xl font-bold text-gray-600">{item.translation}</span>
            </div>
            <p className="text-gray-500 text-sm leading-tight px-4">{item.definition}</p>
        </div>
      </div>

      <button
        onClick={(e) => {
            e.stopPropagation();
            onNext();
        }}
        className="mt-8 bg-brand-green text-white text-2xl font-bold py-4 px-12 rounded-full shadow-lg hover:bg-green-500 active:scale-95 transition-all w-full max-w-xs"
      >
        {isLast ? "Ready for Quiz! 🚀" : "Next Word ➡️"}
      </button>
    </div>
  );
};
