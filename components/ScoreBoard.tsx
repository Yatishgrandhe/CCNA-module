'use client';

import { GameStats } from '@/types';

interface ScoreBoardProps {
  stats: GameStats;
  className?: string;
}

export default function ScoreBoard({ stats, className = '' }: ScoreBoardProps) {
  const accuracy = Math.round((stats.correctAnswers / Math.max(stats.questionsAnswered, 1)) * 100);
  
  return (
    <div className={`glass-card rounded-3xl p-8 shadow-2xl ${className} animate-fade-in`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Score */}
        <div className="text-center space-y-3">
          <div className="score-glow">
            <div className="text-3xl md:text-4xl font-bold gradient-text">
              {stats.score.toLocaleString()}
            </div>
          </div>
          <div className="text-sm font-medium text-white/70 uppercase tracking-wider">
            Score
          </div>
        </div>
        
        {/* Streak */}
        <div className="text-center space-y-3">
          {stats.streak > 0 ? (
            <div className="streak-indicator">
              🔥 {stats.streak}
            </div>
          ) : (
            <div className="text-3xl md:text-4xl font-bold text-white/50">
              0
            </div>
          )}
          <div className="text-sm font-medium text-white/70 uppercase tracking-wider">
            Streak
          </div>
        </div>
        
        {/* Questions Answered */}
        <div className="text-center space-y-3">
          <div className="text-3xl md:text-4xl font-bold text-gimkit-accent">
            {stats.questionsAnswered}
          </div>
          <div className="text-sm font-medium text-white/70 uppercase tracking-wider">
            Answered
          </div>
        </div>
        
        {/* Accuracy */}
        <div className="text-center space-y-3">
          <div className={`text-3xl md:text-4xl font-bold ${
            accuracy >= 80 ? 'text-gimkit-success' : 
            accuracy >= 60 ? 'text-gimkit-warning' : 
            'text-gimkit-danger'
          }`}>
            {accuracy}%
          </div>
          <div className="text-sm font-medium text-white/70 uppercase tracking-wider">
            Accuracy
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mt-6">
        <div className="flex justify-between text-sm text-white/60 mb-2">
          <span>Progress</span>
          <span>{stats.questionsAnswered} / {stats.totalQuestions}</span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gimkit-primary to-gimkit-secondary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${(stats.questionsAnswered / stats.totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
