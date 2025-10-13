const fs = require('fs');
const path = require('path');

function parseQuestionsFromText(text) {
  const lines = text.split('\n');
  const questions = [];
  let currentQuestion = null;
  let currentAnswers = [];
  let answerId = 0;
  let fullQuestionText = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip empty lines and headers
    if (!line || line.startsWith('CCNA1') || line.startsWith('Here are the questions')) {
      continue;
    }

    // Check if this is a question number line
    const questionMatch = line.match(/^(\d+)\.\s*(.+)$/);
    if (questionMatch) {
      // Save previous question if exists
      if (currentQuestion && currentAnswers.length > 0) {
        const isMultipleChoice = fullQuestionText.includes('(Choose two)') || 
                                fullQuestionText.includes('(Choose three)') ||
                                fullQuestionText.includes('(Choose four)') ||
                                fullQuestionText.includes('Choose two') ||
                                fullQuestionText.includes('Choose three') ||
                                fullQuestionText.includes('Choose four');
        
        const correctAnswers = currentAnswers
          .filter(answer => answer.isCorrect)
          .map(answer => answer.id);

        questions.push({
          id: `q${currentQuestion.number}`,
          number: currentQuestion.number,
          text: fullQuestionText,
          type: isMultipleChoice ? 'multiple' : 'single',
          answers: currentAnswers,
          correctAnswers
        });
      }

      // Start new question
      const questionNumber = parseInt(questionMatch[1]);
      const questionText = questionMatch[2];
      
      currentQuestion = {
        number: questionNumber,
        text: questionText
      };
      fullQuestionText = questionText;
      currentAnswers = [];
      answerId = 0;
      continue;
    }

    // Check if this line contains "Choose" and is part of the current question
    if (currentQuestion && (line.includes('Choose two') || line.includes('Choose three') || line.includes('Choose four'))) {
      fullQuestionText += ' ' + line;
      continue;
    }

    // Check if this line contains just "Choose" (might be split across lines)
    if (currentQuestion && line.includes('Choose') && !line.includes('Choose two') && !line.includes('Choose three') && !line.includes('Choose four')) {
      // Look ahead to see if the next line contains the number
      if (i + 1 < lines.length) {
        const nextLine = lines[i + 1].trim();
        if (nextLine.includes('two.') || nextLine.includes('three.') || nextLine.includes('four.')) {
          fullQuestionText += ' ' + line + ' ' + nextLine;
          i++; // Skip the next line since we've processed it
          continue;
        }
      }
      // If no next line with number, just add the current line
      fullQuestionText += ' ' + line;
      continue;
    }

    // Check if this line contains just a number with period (like "three.)")
    if (currentQuestion && (line === 'two.)' || line === 'three.)' || line === 'four.)')) {
      fullQuestionText += ' ' + line;
      continue;
    }

    // Check if this is an answer option
    if (line === 'o' && currentQuestion) {
      // Look ahead for the answer text
      let answerText = '';
      let isCorrect = false;
      let j = i + 1;
      
      // Skip empty lines after 'o'
      while (j < lines.length && lines[j].trim() === '') {
        j++;
      }
      
      if (j < lines.length) {
        const answerLine = lines[j].trim();
        if (answerLine.startsWith('!')) {
          isCorrect = true;
          answerText = answerLine.substring(1).trim();
        } else {
          answerText = answerLine;
        }
      }

      if (answerText) {
        currentAnswers.push({
          id: `a${answerId++}`,
          text: answerText,
          isCorrect
        });
      }
    }
  }

  // Don't forget the last question
  if (currentQuestion && currentAnswers.length > 0) {
    const isMultipleChoice = fullQuestionText.includes('(Choose two)') || 
                            fullQuestionText.includes('(Choose three)') ||
                            fullQuestionText.includes('(Choose four)') ||
                            fullQuestionText.includes('Choose two') ||
                            fullQuestionText.includes('Choose three') ||
                            fullQuestionText.includes('Choose four');
    
    const correctAnswers = currentAnswers
      .filter(answer => answer.isCorrect)
      .map(answer => answer.id);

    questions.push({
      id: `q${currentQuestion.number}`,
      number: currentQuestion.number,
      text: fullQuestionText,
      type: isMultipleChoice ? 'multiple' : 'single',
      answers: currentAnswers,
      correctAnswers
    });
  }

  return questions;
}

// Read the file and parse questions
const filePath = path.join(__dirname, '..', 'CCNA1 4-7 gimkit.txt');
const fileContent = fs.readFileSync(filePath, 'utf8');
const questions = parseQuestionsFromText(fileContent);

// Generate the questions data file
const questionsData = `// Auto-generated questions data from CCNA1 4-7 gimkit.txt
import { Question } from '@/types';

export const QUESTIONS_DATA: Question[] = ${JSON.stringify(questions, null, 2)};

export default QUESTIONS_DATA;
`;

// Write to the data directory
const outputPath = path.join(__dirname, '..', 'data', 'questions.ts');
fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, questionsData);

console.log(`Parsed ${questions.length} questions and saved to ${outputPath}`);
