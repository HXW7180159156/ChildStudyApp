import React, { useState, useEffect, useRef } from 'react';
import { ScreenState, LessonConfig, WordItem, LessonCategory } from './types';
import { generateVocabulary, generateImage, generateSpeech } from './services/geminiService';
import { LoadingScreen } from './components/LoadingScreen';
import { FlashCard } from './components/FlashCard';
import { Quiz } from './components/Quiz';

// Extended lesson data with categories
const LESSONS: LessonConfig[] = [
  // --- Stage 1: Alphabet (A-F for demo) ---
  { id: 'a', topic: 'Letter A', category: 'alphabet', color: 'bg-red-100', icon: '🅰️', level: 1 },
  { id: 'b', topic: 'Letter B', category: 'alphabet', color: 'bg-blue-100', icon: '🅱️', level: 1 },
  { id: 'c', topic: 'Letter C', category: 'alphabet', color: 'bg-yellow-100', icon: '🆎', level: 1 },
  { id: 'd', topic: 'Letter D', category: 'alphabet', color: 'bg-green-100', icon: '🇩', level: 1 },
  { id: 'e', topic: 'Letter E', category: 'alphabet', color: 'bg-purple-100', icon: '🐘', level: 1 },
  
  // --- Stage 2: Phonetics ---
  { id: 'p1', topic: 'Short A /æ/', category: 'phonetics', color: 'bg-orange-100', icon: '😺', level: 2 },
  { id: 'p2', topic: 'Short E /e/', category: 'phonetics', color: 'bg-teal-100', icon: '🛏️', level: 2 },
  { id: 'p3', topic: 'Sound /s/', category: 'phonetics', color: 'bg-indigo-100', icon: '🐍', level: 2 },
  
  // --- Stage 3: Topics ---
  { id: '1', topic: 'Farm Animals', category: 'topic', color: 'bg-green-100', icon: '🐮', level: 3 },
  { id: '2', topic: 'Fruits', category: 'topic', color: 'bg-red-100', icon: '🍎', level: 3 },
  { id: '3', topic: 'Family', category: 'topic', color: 'bg-blue-100', icon: '👨‍👩‍👧', level: 3 },
  { id: '4', topic: 'Colors', category: 'topic', color: 'bg-yellow-100', icon: '🌈', level: 3 },
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
                style={{ animationDelay: `${index * 100}ms` }}
            >
                <button
                    onClick={() => startLesson(lesson)}
                    className={`
                        w-32 h-32 rounded-full shadow-xl border-4 border-white flex flex-col items-center justify-center
                        transform hover:scale-110 active:scale-95 transition-all duration-300
                        ${lesson.color}
                    `}
                >
                    <span className="text-4xl mb-1">{lesson.icon}</span>
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