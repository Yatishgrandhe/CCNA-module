'use client';

import { GameStats } from '@/types';

interface HeaderProps {
  stats: GameStats;
  currentQuestion: number;
  totalQuestions: number;
}

export default function Header({ stats, currentQuestion, totalQuestions }: HeaderProps) {
  const progressPercentage = (currentQuestion / totalQuestions) * 100;

  return (
    <header className="bg-gimkit-primary text-gimkit-text-light shadow-medium">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">CCNA Quiz</h1>
              <p className="text-sm opacity-90">Interactive Networking Challenge</p>
            </div>
          </div>

          {/* Score and Stats */}
          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{stats.score.toLocaleString()}</div>
              <div className="text-xs opacity-90">Score</div>
            </div>
            
            {stats.streak > 0 && (
              <div className="flex items-center space-x-2 bg-gimkit-accent px-3 py-1 rounded-full">
                <span className="text-sm">🔥</span>
                <span className="text-sm font-semibold">{stats.streak}</span>
              </div>
            )}
            
            <div className="text-center">
              <div className="text-lg font-bold">{Math.round((stats.correctAnswers / Math.max(stats.questionsAnswered, 1)) * 100)}%</div>
              <div className="text-xs opacity-90">Accuracy</div>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Question {currentQuestion} of {totalQuestions}</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
}
