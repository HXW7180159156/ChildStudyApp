import React from 'react';

interface ErrorScreenProps {
  topic: string;
  message?: string;
  onRetry: () => void;
  onHome: () => void;
}

export const ErrorScreen: React.FC<ErrorScreenProps> = ({ topic, message, onRetry, onHome }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-cream text-center p-6">
      <div className="text-7xl mb-6 animate-bounce">😵‍💫</div>
      <h2 className="text-3xl font-black text-brand-orange mb-3">Oops!</h2>
      <p className="text-lg text-gray-700 font-bold mb-2">
        The magic for <span className="text-brand-blue">"{topic}"</span> failed.
      </p>
      {message && <p className="text-sm text-gray-500 mb-6 max-w-xs break-words">{message}</p>}
      <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
        <button
          onClick={onRetry}
          className="bg-brand-green text-white text-xl font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-500 active:scale-95 transition-all"
        >
          Try Again 🔄
        </button>
        <button
          onClick={onHome}
          className="bg-white text-brand-blue text-lg font-bold py-3 px-8 rounded-full shadow-md hover:scale-105 active:scale-95 transition-all border-2 border-brand-blue/30"
        >
          Back to Home 🏠
        </button>
      </div>
    </div>
  );
};
