export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface MatchingPair {
  leftId: string;
  rightId: string;
  leftText: string;
  rightText: string;
}

export interface MatchingItem {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  number: number;
  text: string;
  type: 'single' | 'multiple' | 'matching';
  answers?: Answer[];
  correctAnswers?: string[];
  // For matching questions
  matchingPairs?: MatchingPair[];
  leftItems?: MatchingItem[];
  rightItems?: MatchingItem[];
}

export interface QuizState {
  currentQuestionIndex: number;
  questions: Question[];
  selectedAnswers: string[];
  isAnswered: boolean;
  showFeedback: boolean;
  isCooldown: boolean;
}

export interface GameStats {
  score: number;
  streak: number;
  bestStreak: number;
  questionsAnswered: number;
  correctAnswers: number;
  totalQuestions: number;
  averageScore: number;
  timeStarted: number;
}

export interface GameSettings {
  baseScore: number;
  streakBonus: number;
  cooldownTime: number;
}
