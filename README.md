# 🎯 Gimkit-Style CCNA Quiz

An interactive quiz application built with Next.js 15, React, TypeScript, and Tailwind CSS that tests your CCNA networking knowledge in a fun, game-like format similar to Gimkit.

## ✨ Features

- **69 CCNA Questions**: Comprehensive coverage of CCNA1 chapters 4-7
- **Gimkit-Style Gameplay**: Immediate feedback, scoring system, and streak tracking
- **Question Types**: Supports both single-choice and multiple-choice questions
- **Infinite Loop**: Questions reshuffle after completion for endless practice
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradients, animations, and smooth transitions
- **Score System**: Base points + streak bonuses for competitive gameplay

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd gimkit-ccna-quiz
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎮 How to Play

1. **Single Choice Questions**: Click on your answer - it submits automatically
2. **Multiple Choice Questions**: Select all correct answers, then click "Submit Answer"
3. **Scoring**: 
   - Base score: 100 points per correct answer
   - Streak bonus: +50 points per consecutive correct answer
4. **Feedback**: Immediate visual feedback with correct/incorrect indicators
5. **Cooldown**: Brief pause after answering before "Next Question" appears
6. **Infinite Loop**: Questions reshuffle after completing all 69 questions

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready
- **Questions**: Parsed from CCNA1 4-7 curriculum

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Main quiz page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── QuizCard.tsx       # Main quiz interface
│   ├── AnswerOption.tsx   # Individual answer buttons
│   └── ScoreBoard.tsx     # Score and stats display
├── lib/                   # Utility functions
│   ├── gameLogic.ts       # Game mechanics and scoring
│   └── questionParser.ts  # Question parsing utilities
├── data/                  # Question data
│   └── questions.ts       # Parsed CCNA questions
├── types/                 # TypeScript definitions
│   └── index.ts           # Type interfaces
└── scripts/               # Build scripts
    └── parseQuestions.js  # Question parser script
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
npm start
```

## 🎨 Customization

### Adding New Questions

1. Add questions to `CCNA1 4-7 gimkit.txt` following the format:
```
1. Your question text here?
o

! Correct answer (marked with !)
o

Incorrect answer
```

2. Run the parser:
```bash
node scripts/parseQuestions.js
```

### Styling

- Modify `tailwind.config.ts` for theme colors
- Update `app/globals.css` for global styles
- Customize component styles in individual `.tsx` files

### Game Settings

Adjust game mechanics in `lib/gameLogic.ts`:
```typescript
export const DEFAULT_GAME_SETTINGS: GameSettings = {
  baseScore: 100,        // Points per correct answer
  streakBonus: 50,       // Bonus per streak level
  cooldownTime: 1500     // Cooldown in milliseconds
};
```

## 📊 Question Statistics

- **Total Questions**: 69
- **Single Choice**: ~45 questions
- **Multiple Choice**: ~24 questions
- **Topics Covered**: OSI layers, networking media, data link layer, switching, cabling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is for educational purposes. CCNA questions are from Cisco's official curriculum.

## 🙏 Acknowledgments

- Cisco for the CCNA curriculum
- Gimkit for the gameplay inspiration
- Next.js team for the amazing framework
# CCNA-module
