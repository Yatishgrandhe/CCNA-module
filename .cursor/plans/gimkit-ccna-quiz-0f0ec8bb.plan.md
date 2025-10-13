<!-- 0f0ec8bb-44e9-4fda-b03b-5b636a04cbff 95bbf7b9-c1a8-4f28-9138-b8a284151c22 -->
# Gimkit-Style CCNA Quiz Application

## Project Structure

Create a Next.js 15 app with TypeScript and Tailwind CSS, organized as follows:

- `app/` - Next.js app directory with main page and layout
- `components/` - React components for quiz UI
- `lib/` - Utility functions for question parsing and game logic
- `data/` - Parsed questions data
- `types/` - TypeScript interfaces

## Implementation Steps

### 1. Parse Questions from Text File

Create a parser in `lib/questionParser.ts` that:

- Reads the CCNA1 4-7 gimkit.txt file
- Identifies question numbers and text
- Detects single-choice vs multiple-choice (looks for "Choose two", "Choose three" in question text)
- Parses answers marked with "!" as correct
- Handles multiline answers properly
- Outputs structured JSON with question type, text, options, and correct answers

### 2. Initialize Next.js Project

- Create Next.js 15 project with TypeScript, Tailwind CSS, and App Router
- Set up `package.json` with necessary dependencies
- Configure `tailwind.config.ts` with Gimkit-inspired color scheme (blues, greens, purples)
- Create basic layout in `app/layout.tsx`

### 3. Build Core Quiz Components

**QuizCard Component** (`components/QuizCard.tsx`):

- Displays current question and answer options
- For single-choice: clicking an option immediately submits
- For multiple-choice: checkbox selection + Submit button
- Shows immediate feedback (green for correct, red for incorrect)
- Displays correct answer(s) after submission
- Cooldown period (1-2 seconds) before "Next" button appears

**AnswerOption Component** (`components/AnswerOption.tsx`):

- Single-choice: radio-style button that auto-submits
- Multiple-choice: checkbox that can be toggled
- Color states: default, selected, correct (green), incorrect (red)
- Disabled state during cooldown

**ScoreBoard Component** (`components/ScoreBoard.tsx`):

- Current score display
- Streak counter
- Questions answered counter
- Animated score updates

### 4. Game Logic

Create `lib/gameLogic.ts` with:

- Fisher-Yates shuffle for randomizing questions and answers
- Score calculation (+100 base, +50 per streak)
- Streak tracking (resets on incorrect answer)
- Question rotation (infinite loop, reshuffle after all questions)

### 5. Main Quiz Page

Build `app/page.tsx` with:

- State management for current question, score, streak, answered count
- Question shuffling on mount and after completing all questions
- Answer validation logic
- Cooldown timer management
- Responsive layout with Gimkit-style UI

### 6. Styling & Polish

- Gimkit-inspired gradient backgrounds
- Smooth animations for answer feedback
- Confetti or celebration effects for correct answers
- Sound-ready hooks (optional audio can be added later)
- Mobile-responsive design

### 7. Vercel Deployment Setup

- Add `vercel.json` if needed
- Ensure all static assets are properly referenced
- Configure build settings for optimal performance
- Test production build locally

## Key Features

- 79 questions from CCNA1 chapters 4-7
- Randomized question and answer order each round
- Immediate feedback on answers
- Score tracking with streak multipliers
- Infinite gameplay loop
- Both single-select and multi-select question support
- Gimkit-style UI with animations
- Fully responsive design
- Vercel-ready deployment

## Technical Decisions

- Next.js 15 with App Router for modern React features
- Server-side question parsing for initial data
- Client-side state management (useState/useEffect)
- Tailwind CSS for rapid, consistent styling
- TypeScript for type safety
- No external state management library needed (simple enough for useState)

### To-dos

- [ ] Create question parser to extract all 79 questions from text file with proper handling of single/multiple choice and correct answers marked with '!'
- [ ] Initialize Next.js 15 project with TypeScript, Tailwind CSS, and configure project structure
- [ ] Create TypeScript interfaces for Question, Answer, QuizState, and GameStats
- [ ] Implement shuffle functions, score calculation, streak tracking, and infinite loop logic
- [ ] Build QuizCard, AnswerOption, and ScoreBoard components with Gimkit-style design
- [ ] Create main quiz page with state management, answer validation, and cooldown logic
- [ ] Apply Gimkit-inspired styling with gradients, animations, and responsive design
- [ ] Verify Vercel deployment configuration and test production build