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
    <div className="card max-w-4xl mx-auto animate-fade-in">
      {/* Question Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="question-badge">
              {question.number}
            </div>
            <div className="text-gimkit-text-muted font-medium">
              Question {question.number}
            </div>
          </div>
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${
            question.type === 'single' 
              ? 'bg-gimkit-primary text-gimkit-text-light' 
              : 'bg-gimkit-secondary text-gimkit-text-light'
          }`}>
            {question.type === 'single' ? 'Single Choice' : 'Multiple Choice'}
          </div>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gimkit-text-dark leading-relaxed">
          {question.text}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="options-grid mb-8">
        {question.answers.map((answer, index) => {
          const isSelected = selectedAnswers.includes(answer.id);
          const isCorrect = showFeedback && answer.isCorrect;
          const isIncorrect = showFeedback && isSelected && !answer.isCorrect;
          
          return (
            <div key={answer.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <AnswerOption
                answer={answer}
                isSelected={isSelected}
                isAnswered={isAnswered}
                isCorrect={isCorrect}
                isIncorrect={isIncorrect}
                isCooldown={isCooldown}
                onClick={() => handleAnswerClick(answer.id)}
                type={question.type}
              />
            </div>
          );
        })}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        {question.type === 'multiple' && !isAnswered && (
          <button
            onClick={onSubmit}
            disabled={!canSubmit}
            className={`btn-primary ${
              !canSubmit ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Submit Answer
          </button>
        )}
        
        {isAnswered && !isCooldown && (
          <button
            onClick={onNext}
            className="btn-primary animate-bounce-in"
          >
            Next Question →
          </button>
        )}
      </div>

      {/* Feedback Message */}
      {showFeedback && (
        <div className={`mt-6 p-4 rounded-lg text-center font-bold text-lg animate-slide-up ${
          selectedAnswers.every(id => 
            question.answers.find(a => a.id === id)?.isCorrect
          ) && selectedAnswers.length === question.correctAnswers.length
            ? 'bg-gimkit-accent text-gimkit-text-light'
            : 'bg-gimkit-error text-gimkit-text-light'
        }`}>
          <div className="flex items-center justify-center space-x-3">
            <span className="text-xl">
              {selectedAnswers.every(id => 
                question.answers.find(a => a.id === id)?.isCorrect
              ) && selectedAnswers.length === question.correctAnswers.length
                ? '🎉' : '❌'}
            </span>
            <span>
              {selectedAnswers.every(id => 
                question.answers.find(a => a.id === id)?.isCorrect
              ) && selectedAnswers.length === question.correctAnswers.length
                ? 'Correct! Great job!' : 'Incorrect. Better luck next time!'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
