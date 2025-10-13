'use client';

import { GameStats } from '@/types';

interface ScoreBoardProps {
  stats: GameStats;
  className?: string;
}

export default function ScoreBoard({ stats, className = '' }: ScoreBoardProps) {
  return (
    <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-xl ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="space-y-2">
          <div className="text-2xl md:text-3xl font-bold text-gimkit-blue">
            {stats.score.toLocaleString()}
          </div>
          <div className="text-sm text-white/80">Score</div>
        </div>
        
        <div className="space-y-2">
          <div className="text-2xl md:text-3xl font-bold text-gimkit-orange">
            {stats.streak}
          </div>
          <div className="text-sm text-white/80">Streak</div>
        </div>
        
        <div className="space-y-2">
          <div className="text-2xl md:text-3xl font-bold text-gimkit-green">
            {stats.questionsAnswered}
          </div>
          <div className="text-sm text-white/80">Answered</div>
        </div>
        
        <div className="space-y-2">
          <div className="text-2xl md:text-3xl font-bold text-white">
            {Math.round((stats.correctAnswers / Math.max(stats.questionsAnswered, 1)) * 100)}%
          </div>
          <div className="text-sm text-white/80">Accuracy</div>
        </div>
      </div>
    </div>
  );
}
