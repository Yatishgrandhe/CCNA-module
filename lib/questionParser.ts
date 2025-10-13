import { Question, Answer } from '@/types';

export function parseQuestionsFromText(text: string): Question[] {
  const lines = text.split('\n');
  const questions: Question[] = [];
  let currentQuestion: Partial<Question> | null = null;
  let currentAnswers: Answer[] = [];
  let answerId = 0;

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
        const questionText = currentQuestion.text || '';
        const isMultipleChoice = questionText.includes('Choose two') || 
                                questionText.includes('Choose three') ||
                                questionText.includes('Choose four');
        
        const correctAnswers = currentAnswers
          .filter(answer => answer.isCorrect)
          .map(answer => answer.id);

        questions.push({
          id: `q${currentQuestion.number}`,
          number: currentQuestion.number!,
          text: questionText,
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
      currentAnswers = [];
      answerId = 0;
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
    const questionText = currentQuestion.text || '';
    const isMultipleChoice = questionText.includes('Choose two') || 
                            questionText.includes('Choose three') ||
                            questionText.includes('Choose four');
    
    const correctAnswers = currentAnswers
      .filter(answer => answer.isCorrect)
      .map(answer => answer.id);

    questions.push({
      id: `q${currentQuestion.number}`,
      number: currentQuestion.number!,
      text: questionText,
      type: isMultipleChoice ? 'multiple' : 'single',
      answers: currentAnswers,
      correctAnswers
    });
  }

  return questions;
}

export function loadQuestions(): Question[] {
  // In a real app, this would read from a file or API
  // For now, we'll return the parsed questions
  const fs = require('fs');
  const path = require('path');
  
  try {
    const filePath = path.join(process.cwd(), 'CCNA1 4-7 gimkit.txt');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return parseQuestionsFromText(fileContent);
  } catch (error) {
    console.error('Error loading questions:', error);
    return [];
  }
}
