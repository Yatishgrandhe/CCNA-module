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
    let baseClasses = 'answer-option ';
    
    if (isCooldown) {
      baseClasses += 'opacity-50 cursor-not-allowed ';
    } else if (!isAnswered) {
      baseClasses += 'cursor-pointer ';
    }
    
    if (isAnswered) {
      if (isCorrect) {
        baseClasses += 'correct ';
      } else if (isIncorrect) {
        baseClasses += 'incorrect ';
      } else if (answer.isCorrect) {
        baseClasses += 'correct ';
      }
    } else {
      if (isSelected) {
        baseClasses += 'selected ';
      }
    }
    
    return baseClasses;
  };

  const getIcon = () => {
    if (type === 'single') {
      return (
        <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center transition-all duration-200 ${
          isSelected ? 'border-white bg-white' : 'border-gimkit-border'
        }`}>
          {isSelected && <div className="w-3 h-3 rounded-full bg-gimkit-primary" />}
        </div>
      );
    } else {
      return (
        <div className={`w-6 h-6 rounded border-2 mr-3 flex items-center justify-center transition-all duration-200 ${
          isSelected ? 'border-white bg-white' : 'border-gimkit-border'
        }`}>
          {isSelected && (
            <svg className="w-4 h-4 text-gimkit-primary" fill="currentColor" viewBox="0 0 20 20">
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
        <span className="flex-1 text-left font-medium">{answer.text}</span>
        
        {/* Status indicator */}
        {isAnswered && (
          <div className="ml-3">
            {isCorrect && (
              <div className="w-5 h-5 bg-gimkit-accent rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            {isIncorrect && (
              <div className="w-5 h-5 bg-gimkit-error rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            {answer.isCorrect && !isSelected && (
              <div className="w-5 h-5 bg-gimkit-accent rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
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
