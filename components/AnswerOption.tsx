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
    let baseClasses = 'w-full p-5 rounded-2xl text-left transition-all duration-300 font-medium text-lg border-2 relative overflow-hidden ';
    
    if (isCooldown) {
      baseClasses += 'cursor-not-allowed opacity-50 ';
    } else if (!isAnswered) {
      baseClasses += 'cursor-pointer transform hover:scale-[1.02] hover:shadow-xl ';
    }
    
    if (isAnswered) {
      if (isCorrect) {
        baseClasses += 'answer-correct';
      } else if (isIncorrect) {
        baseClasses += 'answer-incorrect';
      } else if (answer.isCorrect) {
        baseClasses += 'answer-correct';
      } else {
        baseClasses += 'bg-white/5 border-white/10 text-white/50';
      }
    } else {
      if (isSelected) {
        baseClasses += 'answer-selected';
      } else {
        baseClasses += 'answer-default';
      }
    }
    
    return baseClasses;
  };

  const getIcon = () => {
    if (type === 'single') {
      return (
        <div className={`w-7 h-7 rounded-full border-2 mr-4 flex items-center justify-center transition-all duration-300 ${
          isSelected ? 'border-white bg-white shadow-lg' : 'border-white/50'
        }`}>
          {isSelected && <div className="w-4 h-4 rounded-full bg-gradient-to-r from-gimkit-primary to-gimkit-secondary" />}
        </div>
      );
    } else {
      return (
        <div className={`w-7 h-7 rounded-lg border-2 mr-4 flex items-center justify-center transition-all duration-300 ${
          isSelected ? 'border-white bg-white shadow-lg' : 'border-white/50'
        }`}>
          {isSelected && (
            <svg className="w-5 h-5 text-gimkit-primary" fill="currentColor" viewBox="0 0 20 20">
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
      {/* Shimmer effect for selected answers */}
      {isSelected && !isAnswered && (
        <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-20"></div>
      )}
      
      <div className="flex items-center relative z-10">
        {getIcon()}
        <span className="flex-1 leading-relaxed">{answer.text}</span>
        
        {/* Status indicator */}
        {isAnswered && (
          <div className="ml-4">
            {isCorrect && (
              <div className="w-6 h-6 bg-gimkit-success rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            {isIncorrect && (
              <div className="w-6 h-6 bg-gimkit-danger rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            {answer.isCorrect && !isSelected && (
              <div className="w-6 h-6 bg-gimkit-success rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>
        )}
      </div>
    </button>
  );
}
