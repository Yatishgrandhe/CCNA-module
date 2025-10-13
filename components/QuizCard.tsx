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
    <div className="glass-card rounded-3xl p-8 md:p-10 shadow-2xl max-w-5xl mx-auto animate-fade-in">
      {/* Question Header */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="question-number">
              {question.number}
            </div>
            <div className="text-white/80 font-medium">
              Question {question.number}
            </div>
          </div>
          <div className={`px-4 py-2 rounded-full text-sm font-semibold ${
            question.type === 'single' 
              ? 'bg-gimkit-primary/20 text-gimkit-primary border border-gimkit-primary/30' 
              : 'bg-gimkit-secondary/20 text-gimkit-secondary border border-gimkit-secondary/30'
          }`}>
            {question.type === 'single' ? 'Single Choice' : 'Multiple Choice'}
          </div>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-white leading-relaxed">
          {question.text}
        </h2>
      </div>

      {/* Answer Options */}
      <div className="space-y-4 mb-10">
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
      <div className="flex justify-center space-x-6">
        {question.type === 'multiple' && !isAnswered && (
          <button
            onClick={onSubmit}
            disabled={!canSubmit}
            className={`px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
              canSubmit
                ? 'btn-primary hover:scale-105'
                : 'bg-white/5 text-white/30 cursor-not-allowed border border-white/10'
            }`}
          >
            Submit Answer
          </button>
        )}
        
        {isAnswered && !isCooldown && (
          <button
            onClick={onNext}
            className="btn-primary px-10 py-4 rounded-2xl font-bold text-lg animate-bounce-in"
          >
            Next Question →
          </button>
        )}
      </div>

      {/* Feedback Message */}
      {showFeedback && (
        <div className={`mt-8 p-6 rounded-2xl text-center font-bold text-xl animate-slide-up ${
          selectedAnswers.every(id => 
            question.answers.find(a => a.id === id)?.isCorrect
          ) && selectedAnswers.length === question.correctAnswers.length
            ? 'bg-gradient-to-r from-gimkit-success/20 to-emerald-500/20 text-gimkit-success border-2 border-gimkit-success/30'
            : 'bg-gradient-to-r from-gimkit-danger/20 to-red-500/20 text-gimkit-danger border-2 border-gimkit-danger/30'
        }`}>
          <div className="flex items-center justify-center space-x-3">
            <span className="text-2xl">
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
