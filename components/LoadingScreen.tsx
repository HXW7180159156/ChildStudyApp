import React from 'react';

interface LoadingScreenProps {
  topic: string;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ topic }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-cream text-center p-6">
      <div className="relative w-32 h-32 mb-8">
        <div className="absolute inset-0 bg-brand-blue rounded-full opacity-25 animate-ping"></div>
        <div className="absolute inset-0 flex items-center justify-center text-6xl animate-bounce">
          🎨
        </div>
      </div>
      <h2 className="text-3xl font-bold text-brand-orange mb-4">Creating Magic!</h2>
      <p className="text-lg text-gray-600">
        Painting pictures and warming up voices for <br/>
        <span className="font-bold text-brand-blue text-xl">"{topic}"</span>...
      </p>
    </div>
  );
};
