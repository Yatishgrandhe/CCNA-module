'use client';

import { useState, useEffect, useCallback } from 'react';
import { Question, QuizState, GameStats } from '@/types';
import { shuffleQuestions, validateAnswer, calculateScore, updateGameStats, DEFAULT_GAME_SETTINGS } from '@/lib/gameLogic';
import QuizCard from '@/components/QuizCard';
import ScoreBoard from '@/components/ScoreBoard';

import { QUESTIONS_DATA } from '@/data/questions';

export default function Home() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const [gameStats, setGameStats] = useState<GameStats>({
    score: 0,
    streak: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
    totalQuestions: QUESTIONS_DATA.length
  });

  // Initialize questions on mount
  useEffect(() => {
    const shuffledQuestions = shuffleQuestions(QUESTIONS_DATA);
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswerSelect = useCallback((answerId: string) => {
    if (isAnswered || isCooldown) return;

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    if (currentQuestion.type === 'single') {
      setSelectedAnswers([answerId]);
    } else {
      setSelectedAnswers(prev => {
        if (prev.includes(answerId)) {
          return prev.filter(id => id !== answerId);
        } else {
          return [...prev, answerId];
        }
      });
    }
  }, [currentQuestionIndex, questions, isAnswered, isCooldown]);

  const handleSubmit = useCallback(() => {
    if (isAnswered || isCooldown) return;

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const isCorrect = validateAnswer(currentQuestion, selectedAnswers);
    const scoreGained = calculateScore(isCorrect, gameStats.streak, DEFAULT_GAME_SETTINGS);
    
    setIsAnswered(true);
    setShowFeedback(true);
    
    // Update game stats
    setGameStats(prev => updateGameStats(prev, isCorrect, scoreGained));

    // Start cooldown
    setIsCooldown(true);
    setTimeout(() => {
      setIsCooldown(false);
    }, DEFAULT_GAME_SETTINGS.cooldownTime);
  }, [currentQuestionIndex, questions, selectedAnswers, isAnswered, isCooldown, gameStats.streak]);

  const handleNext = useCallback(() => {
    if (isCooldown) return;

    const nextIndex = (currentQuestionIndex + 1) % questions.length;
    
    // If we've completed all questions, reshuffle
    if (nextIndex === 0 && currentQuestionIndex === questions.length - 1) {
      const reshuffledQuestions = shuffleQuestions(QUESTIONS_DATA);
      setQuestions(reshuffledQuestions);
    }
    
    setCurrentQuestionIndex(nextIndex);
    setSelectedAnswers([]);
    setIsAnswered(false);
    setShowFeedback(false);
    setIsCooldown(false);
  }, [currentQuestionIndex, questions.length, isCooldown]);

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading questions...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-down">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-gimkit-primary to-gimkit-secondary rounded-full mb-6 shadow-glow animate-float">
            <span className="text-4xl">🎯</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6 animate-bounce-in">
            CCNA Quiz
          </h1>
          <p className="text-white/80 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
            Master networking concepts with this interactive quiz game. Challenge yourself with 69+ CCNA questions!
          </p>
        </div>

        {/* Score Board */}
        <div className="mb-12">
          <ScoreBoard stats={gameStats} />
        </div>

        {/* Quiz Card */}
        <div className="mb-12">
          <QuizCard
            question={currentQuestion}
            selectedAnswers={selectedAnswers}
            isAnswered={isAnswered}
            showFeedback={showFeedback}
            isCooldown={isCooldown}
            onAnswerSelect={handleAnswerSelect}
            onSubmit={handleSubmit}
            onNext={handleNext}
          />
        </div>

        {/* Footer */}
        <div className="text-center">
          <div className="glass-card rounded-2xl p-6 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-4 text-white/70">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gimkit-success rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
              </div>
              {gameStats.streak > 0 && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm">🔥</span>
                  <span className="text-sm font-medium">Keep the streak going!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
