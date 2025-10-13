'use client';

import { Answer } from '@/types';

interface AnswerOptionProps {
  answer: Answer;
  isSelected: boolean;
  isAnswered: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  isCooldown: boolean;
  onClick: () => void;
  type: 'single' | 'multiple';
}

export default function AnswerOption({
  answer,
  isSelected,
  isAnswered,
  isCorrect,
  isIncorrect,
  isCooldown,
  onClick,
  type
}: AnswerOptionProps) {
  const getButtonClasses = () => {
    let baseClasses = 'w-full p-4 rounded-xl text-left transition-all duration-200 font-medium text-lg border-2 ';
    
    if (isCooldown) {
      baseClasses += 'cursor-not-allowed opacity-50 ';
    } else if (!isAnswered) {
      baseClasses += 'cursor-pointer hover:scale-105 hover:shadow-lg ';
    }
    
    if (isAnswered) {
      if (isCorrect) {
        baseClasses += 'bg-green-500 border-green-400 text-white shadow-lg animate-pulse-green';
      } else if (isIncorrect) {
        baseClasses += 'bg-red-500 border-red-400 text-white shadow-lg animate-pulse-red';
      } else if (answer.isCorrect) {
        baseClasses += 'bg-green-500 border-green-400 text-white shadow-lg';
      } else {
        baseClasses += 'bg-gray-600 border-gray-500 text-white/70';
      }
    } else {
      if (isSelected) {
        baseClasses += 'bg-gimkit-blue border-gimkit-blue text-white shadow-lg';
      } else {
        baseClasses += 'bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40';
      }
    }
    
    return baseClasses;
  };

  const getIcon = () => {
    if (type === 'single') {
      return (
        <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${
          isSelected ? 'border-white bg-white' : 'border-white/50'
        }`}>
          {isSelected && <div className="w-3 h-3 rounded-full bg-gimkit-blue" />}
        </div>
      );
    } else {
      return (
        <div className={`w-6 h-6 rounded border-2 mr-3 flex items-center justify-center ${
          isSelected ? 'border-white bg-white' : 'border-white/50'
        }`}>
          {isSelected && (
            <svg className="w-4 h-4 text-gimkit-blue" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
      );
    }
  };

  return (
    <button
      className={getButtonClasses()}
      onClick={onClick}
      disabled={isCooldown || isAnswered}
    >
      <div className="flex items-center">
        {getIcon()}
        <span className="flex-1">{answer.text}</span>
      </div>
    </button>
  );
}
