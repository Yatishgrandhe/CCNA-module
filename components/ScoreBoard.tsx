'use client';

import { GameStats } from '@/types';

interface ScoreBoardProps {
  stats: GameStats;
  className?: string;
}

export default function ScoreBoard({ stats, className = '' }: ScoreBoardProps) {
  const accuracy = Math.round((stats.correctAnswers / Math.max(stats.questionsAnswered, 1)) * 100);
  
  return (
    <div className={`card ${className} animate-fade-in`}>
      <div className="card-header">
        <h2 className="text-xl font-bold">Game Statistics</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Score */}
        <div className="text-center">
          <div className="text-3xl font-bold text-gimkit-primary mb-2">
            {stats.score.toLocaleString()}
          </div>
          <div className="text-sm font-medium text-gimkit-text-muted uppercase tracking-wider">
            Score
          </div>
          {stats.questionsAnswered > 0 && (
            <div className="text-xs text-gimkit-text-muted mt-1">
              Avg: {stats.averageScore}
            </div>
          )}
        </div>
        
        {/* Current Streak */}
        <div className="text-center">
          {stats.streak > 0 ? (
            <div className="streak-badge mb-2">
              🔥 {stats.streak}
            </div>
          ) : (
            <div className="text-3xl font-bold text-gimkit-text-muted mb-2">
              0
            </div>
          )}
          <div className="text-sm font-medium text-gimkit-text-muted uppercase tracking-wider">
            Current Streak
          </div>
          {stats.bestStreak > 0 && (
            <div className="text-xs text-gimkit-text-muted mt-1">
              Best: {stats.bestStreak}
            </div>
          )}
        </div>
        
        {/* Questions Answered */}
        <div className="text-center">
          <div className="text-3xl font-bold text-gimkit-secondary mb-2">
            {stats.questionsAnswered}
          </div>
          <div className="text-sm font-medium text-gimkit-text-muted uppercase tracking-wider">
            Answered
          </div>
          <div className="text-xs text-gimkit-text-muted mt-1">
            of {stats.totalQuestions}
          </div>
        </div>
        
        {/* Accuracy */}
        <div className="text-center">
          <div className={`text-3xl font-bold mb-2 ${
            accuracy >= 80 ? 'text-gimkit-accent' : 
            accuracy >= 60 ? 'text-gimkit-primary' : 
            'text-gimkit-error'
          }`}>
            {accuracy}%
          </div>
          <div className="text-sm font-medium text-gimkit-text-muted uppercase tracking-wider">
            Accuracy
          </div>
          <div className="text-xs text-gimkit-text-muted mt-1">
            {stats.correctAnswers} correct
          </div>
        </div>
      </div>
    </div>
  );
}
