import { Question, GameStats, GameSettings } from '@/types';

// Fisher-Yates shuffle algorithm
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function shuffleQuestions(questions: Question[]): Question[] {
  return shuffleArray(questions).map(question => {
    if (question.type === 'matching' && question.rightItems) {
      // For matching questions, shuffle the right items
      return {
        ...question,
        rightItems: shuffleArray(question.rightItems)
      };
    } else if (question.answers) {
      // For single/multiple choice questions, shuffle answers
      return {
        ...question,
        answers: shuffleArray(question.answers)
      };
    }
    return question;
  });
}

export function calculateScore(
  isCorrect: boolean,
  currentStreak: number,
  settings: GameSettings
): number {
  if (!isCorrect) return 0;
  
  const baseScore = settings.baseScore;
  const streakBonus = currentStreak * settings.streakBonus;
  return baseScore + streakBonus;
}

export function updateGameStats(
  currentStats: GameStats,
  isCorrect: boolean,
  scoreGained: number
): GameStats {
  const newStreak = isCorrect ? currentStats.streak + 1 : 0;
  const newQuestionsAnswered = currentStats.questionsAnswered + 1;
  const newCorrectAnswers = isCorrect ? currentStats.correctAnswers + 1 : currentStats.correctAnswers;
  const newScore = currentStats.score + scoreGained;
  
  return {
    ...currentStats,
    score: newScore,
    streak: newStreak,
    bestStreak: Math.max(currentStats.bestStreak, newStreak),
    questionsAnswered: newQuestionsAnswered,
    correctAnswers: newCorrectAnswers,
    averageScore: Math.round(newScore / newQuestionsAnswered)
  };
}

export function validateAnswer(
  question: Question,
  selectedAnswers: string[],
  selectedMatches?: { leftId: string; rightId: string }[]
): boolean {
  if (question.type === 'single') {
    return selectedAnswers.length === 1 && 
           question.correctAnswers?.includes(selectedAnswers[0]);
  } else if (question.type === 'multiple') {
    // Multiple choice - must have exactly the right number of correct answers
    if (!question.correctAnswers || selectedAnswers.length !== question.correctAnswers.length) {
      return false;
    }
    
    // All selected answers must be correct
    return selectedAnswers.every(answerId => 
      question.correctAnswers?.includes(answerId)
    );
  } else if (question.type === 'matching') {
    // Matching question - validate matches
    if (!question.matchingPairs || !selectedMatches) {
      return false;
    }

    // Must have all matches
    if (selectedMatches.length !== question.matchingPairs.length) {
      return false;
    }

    // All matches must be correct
    return selectedMatches.every(match => 
      question.matchingPairs?.some(pair => 
        pair.leftId === match.leftId && pair.rightId === match.rightId
      )
    );
  }
  
  return false;
}

export function calculateAccuracy(stats: GameStats): number {
  return stats.questionsAnswered > 0 
    ? Math.round((stats.correctAnswers / stats.questionsAnswered) * 100)
    : 0;
}

export const DEFAULT_GAME_SETTINGS: GameSettings = {
  baseScore: 100,
  streakBonus: 50,
  cooldownTime: 1500 // 1.5 seconds
};
