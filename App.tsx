import React, { useState, useEffect, useRef } from 'react';
import { ScreenState, LessonConfig, WordItem, LessonCategory } from './types';
import { generateVocabulary, generateImage, generateSpeech } from './services/geminiService';
import { LoadingScreen } from './components/LoadingScreen';
import { FlashCard } from './components/FlashCard';
import { Quiz } from './components/Quiz';

// --- DATA GENERATION HELPERS ---

// Palette for rotating colors
const BG_COLORS = [
  'bg-red-100', 'bg-orange-100', 'bg-amber-100', 'bg-yellow-100', 'bg-lime-100',
  'bg-green-100', 'bg-emerald-100', 'bg-teal-100', 'bg-cyan-100', 'bg-sky-100',
  'bg-blue-100', 'bg-indigo-100', 'bg-violet-100', 'bg-purple-100', 'bg-fuchsia-100',
  'bg-pink-100', 'bg-rose-100'
];

// Generate Alphabet Lessons (A-Z)
const ALPHABET_LESSONS: LessonConfig[] = Array.from({ length: 26 }, (_, i) => {
  const char = String.fromCharCode(65 + i); // 65 is 'A'
  return {
    id: `letter-${char.toLowerCase()}`,
    topic: `Letter ${char}`,
    category: 'alphabet',
    color: BG_COLORS[i % BG_COLORS.length],
    icon: char, // Display the letter itself as the icon
    level: 1
  };
});

// Generate Phonetics Lessons (Basic Vowels + Consonants)
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

// Generate Topic Lessons (Rich variety)
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

// Combine all lessons
const LESSONS: LessonConfig[] = [
  ...ALPHABET_LESSONS,
  ...PHONETICS_LESSONS,
  ...TOPIC_LESSONS
];

function App() {
  const [screen, setScreen] = useState<ScreenState>(ScreenState.HOME);
  const [currentLesson, setCurrentLesson] = useState<LessonConfig | null>(null);
  const [lessonData, setLessonData] = useState<WordItem[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<LessonCategory>('alphabet'); // Default to Stage 1
  
  // Audio Context for Gemini TTS
  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initialize AudioContext on user interaction if needed, or here
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    audioContextRef.current = new AudioContextClass({ sampleRate: 24000 });
    
    // Unlock audio context on mobile/safari
    const unlockAudio = () => {
        if (audioContextRef.current?.state === 'suspended') {
            audioContextRef.current.resume();
        }
        document.removeEventListener('click', unlockAudio);
    };
    document.addEventListener('click', unlockAudio);
    
    return () => {
       audioContextRef.current?.close(); 
    };
  }, []);

  const startLesson = async (lesson: LessonConfig) => {
    setCurrentLesson(lesson);
    setScreen(ScreenState.LOADING);
    
    try {
      // 1. Generate Vocabulary Text based on category
      const vocabList = await generateVocabulary(lesson.topic, lesson.category);
      
      // 2. Generate Media in Parallel
      const enrichedData: WordItem[] = await Promise.all(
        vocabList.map(async (item) => {
          // Generate Image
          const imgPromise = generateImage(item.word);
          // Generate Audio
          const audioPromise = audioContextRef.current 
            ? generateSpeech(item.word, audioContextRef.current) 
            : Promise.resolve(undefined);

          const [imageUrl, audioData] = await Promise.all([imgPromise, audioPromise]);

          return {
            ...item,
            imageUrl,
            audioData: audioData as unknown as Float32Array // Storing buffer in interface placeholder
          };
        })
      );

      setLessonData(enrichedData);
      setCurrentWordIndex(0);
      setScreen(ScreenState.LEARN);
    } catch (e) {
      console.error(e);
      alert("Oops! The magic failed. Please try again.");
      setScreen(ScreenState.HOME);
    }
  };

  const handleNextWord = () => {
    if (currentWordIndex < lessonData.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      setScreen(ScreenState.QUIZ);
    }
  };

  const handleQuizComplete = () => {
    setScreen(ScreenState.SUCCESS);
  };

  // --- RENDER METHODS ---

  if (screen === ScreenState.LOADING && currentLesson) {
    return <LoadingScreen topic={currentLesson.topic} />;
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
    return (
      <div className="min-h-screen bg-brand-cream p-4 flex flex-col">
         <div className="flex justify-end mb-4">
           <button onClick={() => setScreen(ScreenState.HOME)} className="text-2xl hover:scale-110 transition-transform">🏠</button>
         </div>
         <Quiz 
            words={lessonData} 
            audioContext={audioContextRef.current}
            onComplete={handleQuizComplete} 
         />
      </div>
    );
  }

  if (screen === ScreenState.SUCCESS) {
    return (
        <div className="min-h-screen bg-brand-yellow flex flex-col items-center justify-center p-6 text-center">
            <div className="text-8xl mb-6 animate-bounce">🏆</div>
            <h1 className="text-4xl font-black text-white mb-4 drop-shadow-md">Amazing!</h1>
            <p className="text-xl text-white/90 font-bold mb-12">You mastered <br/>{currentLesson?.topic}!</p>
            <button 
                onClick={() => setScreen(ScreenState.HOME)}
                className="bg-white text-brand-orange text-2xl font-bold py-4 px-12 rounded-full shadow-xl hover:scale-105 transition-transform"
            >
                Play Again 🔄
            </button>
        </div>
    );
  }

  // --- HOME SCREEN: TABS & LIST ---
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

  const filteredLessons = LESSONS.filter(l => l.category === activeTab);

  return (
    <div className="min-h-screen bg-brand-cream flex flex-col">
      <header className="bg-brand-blue p-6 pb-0 shadow-lg z-10 rounded-b-[2rem]">
        <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-3xl font-black text-white tracking-wider drop-shadow-sm">LingoQuest</h1>
                <p className="text-blue-100 font-bold text-sm">For Kids 🚀</p>
            </div>
            <div className="bg-white p-2 rounded-full shadow-sm text-2xl">
                🧑‍🚀
            </div>
        </div>

        {/* Tabs */}
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
          
          {/* Path Line */}
          <div className="absolute left-1/2 top-4 bottom-4 w-4 bg-white rounded-full -translate-x-1/2 border-2 border-dashed border-gray-300 -z-0"></div>

          {filteredLessons.map((lesson, index) => (
            <div 
                key={lesson.id} 
                className={`relative z-10 flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} animate-pop`}
                style={{ animationDelay: `${index * 50}ms` }}
            >
                <button
                    onClick={() => startLesson(lesson)}
                    className={`
                        w-32 h-32 rounded-full shadow-xl border-4 border-white flex flex-col items-center justify-center
                        transform hover:scale-110 active:scale-95 transition-all duration-300
                        ${lesson.color}
                    `}
                >
                    <span className="text-4xl mb-1 font-black text-brand-blue">{lesson.icon}</span>
                    <span className="text-xs font-bold text-gray-600 px-2 truncate w-full text-center">{lesson.topic}</span>
                    
                    {/* Progress / Stars placeholder */}
                    <div className="flex gap-0.5 mt-1 opacity-50">
                        <span className="text-[10px]">⭐</span>
                        <span className="text-[10px]">⭐</span>
                        <span className="text-[10px]">⭐</span>
                    </div>
                </button>
            </div>
          ))}
          
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