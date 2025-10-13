'use client';

import { Question, Answer } from '@/types';
import AnswerOption from './AnswerOption';

interface QuizCardProps {
  question: Question;
  selectedAnswers: string[];
  isAnswered: boolean;
  showFeedback: boolean;
  isCooldown: boolean;
  onAnswerSelect: (answerId: string) => void;
  onSubmit: () => void;
  onNext: () => void;
}

export default function QuizCard({
  question,
  selectedAnswers,
  isAnswered,
  showFeedback,
  isCooldown,
  onAnswerSelect,
  onSubmit,
  onNext
}: QuizCardProps) {
  const handleAnswerClick = (answerId: string) => {
    if (isAnswered || isCooldown) return;
    
    if (question.type === 'single') {
      onAnswerSelect(answerId);
      // Auto-submit for single choice
      setTimeout(() => onSubmit(), 100);
    } else {
      onAnswerSelect(answerId);
    }
  };

  const canSubmit = question.type === 'multiple' && 
                   selectedAnswers.length > 0 && 
                   !isAnswered && 
                   !isCooldown;

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-4xl mx-auto animate-fade-in">
      {/* Question Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-gimkit-blue font-semibold text-lg">
            Question {question.number}
          </span>
          <span className="text-white/60 text-sm">
            {question.type === 'single' ? 'Single Choice' : 'Multiple Choice'}
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
          {question.text}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="space-y-4 mb-8">
        {question.answers.map((answer) => {
          const isSelected = selectedAnswers.includes(answer.id);
          const isCorrect = showFeedback && answer.isCorrect;
          const isIncorrect = showFeedback && isSelected && !answer.isCorrect;
          
          return (
            <AnswerOption
              key={answer.id}
              answer={answer}
              isSelected={isSelected}
              isAnswered={isAnswered}
              isCorrect={isCorrect}
              isIncorrect={isIncorrect}
              isCooldown={isCooldown}
              onClick={() => handleAnswerClick(answer.id)}
              type={question.type}
            />
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        {question.type === 'multiple' && !isAnswered && (
          <button
            onClick={onSubmit}
            disabled={!canSubmit}
            className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-200 ${
              canSubmit
                ? 'bg-gimkit-green hover:bg-green-600 text-white shadow-lg hover:scale-105'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            Submit Answer
          </button>
        )}
        
        {isAnswered && !isCooldown && (
          <button
            onClick={onNext}
            className="px-8 py-3 bg-gimkit-purple hover:bg-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-200 animate-bounce-in"
          >
            Next Question
          </button>
        )}
      </div>

      {/* Feedback Message */}
      {showFeedback && (
        <div className={`mt-6 p-4 rounded-xl text-center font-semibold text-lg animate-slide-up ${
          selectedAnswers.every(id => 
            question.answers.find(a => a.id === id)?.isCorrect
          ) && selectedAnswers.length === question.correctAnswers.length
            ? 'bg-green-500/20 text-green-300 border border-green-400'
            : 'bg-red-500/20 text-red-300 border border-red-400'
        }`}>
          {selectedAnswers.every(id => 
            question.answers.find(a => a.id === id)?.isCorrect
          ) && selectedAnswers.length === question.correctAnswers.length
            ? '🎉 Correct! Great job!'
            : '❌ Incorrect. Better luck next time!'}
        </div>
      )}
    </div>
  );
}
