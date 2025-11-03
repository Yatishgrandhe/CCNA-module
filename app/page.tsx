'use client';

import { useState, useEffect, useCallback } from 'react';
import { Question, QuizState, GameStats } from '@/types';
import { shuffleQuestions, validateAnswer, calculateScore, updateGameStats, DEFAULT_GAME_SETTINGS } from '@/lib/gameLogic';
import QuizCard from '@/components/QuizCard';
import ScoreBoard from '@/components/ScoreBoard';
import Header from '@/components/Header';
import QuestionFilters, { QuestionFilters as QuestionFiltersType } from '@/components/QuestionFilters';

export default function Home() {
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [selectedMatches, setSelectedMatches] = useState<{ leftId: string; rightId: string }[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  const [gameStats, setGameStats] = useState<GameStats>({
    score: 0,
    streak: 0,
    bestStreak: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
    totalQuestions: 0,
    averageScore: 0,
    timeStarted: Date.now()
  });

  // Initialize questions on mount - load from file
  useEffect(() => {
    const loadQuestions = async () => {
      try {
        setIsLoading(true);
        // Try module 8-10 first, fallback to 4-7
        let response = await fetch('/api/questions?module=8-10');
        if (!response.ok) {
          // Fallback to module 4-7
          response = await fetch('/api/questions?module=4-7');
        }
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ error: 'Failed to load questions' }));
          throw new Error(errorData.error || 'Failed to load questions');
        }
        
        const data = await response.json();
        const loadedQuestions = data.questions as Question[];
        
        if (loadedQuestions.length > 0) {
          setAllQuestions(loadedQuestions);
          setGameStats(prev => ({
            ...prev,
            totalQuestions: loadedQuestions.length
          }));
        } else {
          throw new Error('No questions found in the file');
        }
      } catch (error) {
        console.error('Error loading questions:', error);
        // Show error to user
        alert(`Error loading questions: ${error instanceof Error ? error.message : 'Unknown error'}\n\nPlease ensure the question files are in the project directory.`);
      } finally {
        setIsLoading(false);
      }
    };

    loadQuestions();
  }, []);

  // Handle filter application
  const handleStartQuiz = useCallback((filters: QuestionFiltersType) => {
    const filteredQuestions = allQuestions.filter(q => {
      if (q.type === 'single' && filters.single) return true;
      if (q.type === 'multiple' && filters.multiple) return true;
      if (q.type === 'matching' && filters.matching) return true;
      return false;
    });

    if (filteredQuestions.length > 0) {
      const shuffledQuestions = shuffleQuestions(filteredQuestions);
      setQuestions(shuffledQuestions);
      setGameStats(prev => ({
        ...prev,
        totalQuestions: filteredQuestions.length,
        timeStarted: Date.now()
      }));
      setShowFilters(false);
      setCurrentQuestionIndex(0);
      setSelectedAnswers([]);
      setSelectedMatches([]);
      setIsAnswered(false);
      setShowFeedback(false);
    } else {
      alert('No questions match your selected filters. Please select at least one question type.');
    }
  }, [allQuestions]);

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

  const handleMatchSelect = useCallback((leftId: string, rightId: string) => {
    if (isAnswered || isCooldown) return;

    setSelectedMatches(prev => {
      // Remove any existing match for this left item
      const filtered = prev.filter(m => m.leftId !== leftId);
      // Remove any existing match for this right item
      const filteredRight = filtered.filter(m => m.rightId !== rightId);
      // Add the new match
      return [...filteredRight, { leftId, rightId }];
    });
  }, [isAnswered, isCooldown]);

  const handleMatchRemove = useCallback((leftId: string) => {
    if (isAnswered || isCooldown) return;

    setSelectedMatches(prev => prev.filter(m => m.leftId !== leftId));
  }, [isAnswered, isCooldown]);

  const handleSubmit = useCallback(() => {
    if (isAnswered || isCooldown) return;

    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return;

    const isCorrect = validateAnswer(
      currentQuestion, 
      selectedAnswers,
      currentQuestion.type === 'matching' ? selectedMatches : undefined
    );
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
  }, [currentQuestionIndex, questions, selectedAnswers, selectedMatches, isAnswered, isCooldown, gameStats.streak]);

  const handleChangeFilters = useCallback(() => {
    setShowFilters(true);
  }, []);

  const handleNext = useCallback(() => {
    if (isCooldown) return;

    const nextIndex = (currentQuestionIndex + 1) % questions.length;
    
    // If we've completed all questions, reshuffle
    if (nextIndex === 0 && currentQuestionIndex === questions.length - 1 && questions.length > 0) {
      const reshuffledQuestions = shuffleQuestions(questions);
      setQuestions(reshuffledQuestions);
    }
    
    setCurrentQuestionIndex(nextIndex);
    setSelectedAnswers([]);
    setSelectedMatches([]);
    setIsAnswered(false);
    setShowFeedback(false);
    setIsCooldown(false);
  }, [currentQuestionIndex, questions.length, isCooldown]);

  // Calculate question counts by type
  const questionCounts = {
    single: allQuestions.filter(q => q.type === 'single').length,
    multiple: allQuestions.filter(q => q.type === 'multiple').length,
    matching: allQuestions.filter(q => q.type === 'matching').length
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gimkit-bg">
        <div className="text-gimkit-text-dark text-xl">Loading questions...</div>
      </div>
    );
  }

  if (showFilters) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <Header 
          stats={gameStats}
          currentQuestion={0}
          totalQuestions={0}
        />
        <QuestionFilters
          onStart={handleStartQuiz}
          totalQuestions={allQuestions.length}
          questionCounts={questionCounts}
        />
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion || questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <Header 
          stats={gameStats}
          currentQuestion={0}
          totalQuestions={0}
        />
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="text-gimkit-error text-xl mb-4">No questions available.</div>
          <button
            onClick={handleChangeFilters}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
          >
            Change Filters
          </button>
        </div>
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
              selectedMatches={selectedMatches}
              isAnswered={isAnswered}
              showFeedback={showFeedback}
              isCooldown={isCooldown}
              onAnswerSelect={handleAnswerSelect}
              onMatchSelect={currentQuestion.type === 'matching' ? handleMatchSelect : undefined}
              onMatchRemove={currentQuestion.type === 'matching' ? handleMatchRemove : undefined}
              onSubmit={handleSubmit}
              onNext={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
