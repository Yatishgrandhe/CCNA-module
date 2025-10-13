export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: string;
  number: number;
  text: string;
  type: 'single' | 'multiple';
  answers: Answer[];
  correctAnswers: string[];
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
