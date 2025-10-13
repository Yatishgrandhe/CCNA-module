'use client';

import { useState, useEffect, useCallback } from 'react';
import { Question, QuizState, GameStats } from '@/types';
import { shuffleQuestions, validateAnswer, calculateScore, updateGameStats, DEFAULT_GAME_SETTINGS } from '@/lib/gameLogic';
import QuizCard from '@/components/QuizCard';
import ScoreBoard from '@/components/ScoreBoard';
import Header from '@/components/Header';

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
    <div className="min-h-screen">
      {/* Fixed Header */}
      <Header 
        stats={gameStats}
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={questions.length}
      />

      {/* Main Content */}
      <div className="p-4 md:p-8 pt-8">
        <div className="max-w-6xl mx-auto">
          {/* Score Board */}
          <div className="mb-8">
            <ScoreBoard stats={gameStats} />
          </div>

          {/* Quiz Card */}
          <div className="mb-8">
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
        </div>
      </div>
    </div>
  );
}
