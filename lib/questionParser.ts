import { Question, Answer, MatchingPair, MatchingItem } from '@/types';

export function parseQuestionsFromText(text: string): Question[] {
  const lines = text.split('\n');
  const questions: Question[] = [];
  let currentQuestion: Partial<Question> | null = null;
  let currentAnswers: Answer[] = [];
  let answerId = 0;
  let buildingQuestionText = false;

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
        
        // Check if this is a matching question
        const isMatching = questionText.toLowerCase().includes('match') || 
                          questionText.toLowerCase().includes('matching') ||
                          questionText.toLowerCase().includes('match the');
        
        if (isMatching && currentQuestion.leftItems && currentQuestion.rightItems && currentQuestion.matchingPairs) {
          // This is a matching question
          questions.push({
            id: `q${currentQuestion.number}`,
            number: currentQuestion.number!,
            text: questionText,
            type: 'matching',
            leftItems: currentQuestion.leftItems,
            rightItems: currentQuestion.rightItems,
            matchingPairs: currentQuestion.matchingPairs
          });
        } else {
          // Regular single/multiple choice question
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
      }

      // Start new question
      const questionNumber = parseInt(questionMatch[1]);
      let questionText = questionMatch[2];
      
      // Check if answer is inline (e.g., "question text * ! answer")
      const inlineAnswerMatch = questionText.match(/^(.+?)\s*\*\s*!\s*(.+)$/);
      if (inlineAnswerMatch) {
        questionText = inlineAnswerMatch[1].trim();
        // Create an answer option for the inline answer
        // But we'll still process the regular options below
      }
      
      currentQuestion = {
        number: questionNumber,
        text: questionText.trim()
      };
      currentAnswers = [];
      answerId = 0;
      buildingQuestionText = false;
      continue;
    }

    // Check if line continues the question text (when we have a current question but no answers yet)
    if (currentQuestion && currentAnswers.length === 0 && line !== 'o' && line !== '' && !line.startsWith('!')) {
      // Check if this looks like question continuation (has words, not a question number)
      const isQuestionContinuation = !line.match(/^\d+\./) && 
                                     (line.includes('?') || 
                                      line.length > 20 || 
                                      /^[A-Z]/.test(line));
      
      // Check next non-empty line
      let nextNonEmptyLine = '';
      for (let k = i + 1; k < lines.length && k < i + 3; k++) {
        const checkLine = lines[k].trim();
        if (checkLine !== '') {
          nextNonEmptyLine = checkLine;
          break;
        }
      }
      
      // If next line is 'o', this is definitely question text continuation
      if (nextNonEmptyLine === 'o' && isQuestionContinuation) {
        currentQuestion.text = (currentQuestion.text || '') + ' ' + line;
        continue;
      }
      
      // If line ends with question mark or contains question keywords, it's continuation
      if (line.includes('?') || line.match(/(Choose|Which|What|How|Why|When|Where)/i)) {
        currentQuestion.text = (currentQuestion.text || '') + ' ' + line;
        continue;
      }
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
          // Check if answer continues on next line
          let k = j + 1;
          while (k < lines.length && lines[k].trim() !== '' && lines[k].trim() !== 'o' && !lines[k].trim().match(/^\d+\./)) {
            const nextLine = lines[k].trim();
            if (!nextLine.startsWith('!')) {
              answerText += ' ' + nextLine;
              k++;
            } else {
              break;
            }
          }
        } else if (answerLine) {
          answerText = answerLine;
          // Check if answer continues on next line
          let k = j + 1;
          while (k < lines.length && lines[k].trim() !== '' && lines[k].trim() !== 'o' && !lines[k].trim().match(/^\d+\./)) {
            const nextLine = lines[k].trim();
            if (!nextLine.startsWith('!')) {
              answerText += ' ' + nextLine;
              k++;
            } else {
              break;
            }
          }
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
    
    // Check if this is a matching question
    const isMatching = questionText.toLowerCase().includes('match') || 
                      questionText.toLowerCase().includes('matching') ||
                      questionText.toLowerCase().includes('match the');
    
    if (isMatching && currentQuestion.leftItems && currentQuestion.rightItems && currentQuestion.matchingPairs) {
      // This is a matching question
      questions.push({
        id: `q${currentQuestion.number}`,
        number: currentQuestion.number!,
        text: questionText,
        type: 'matching',
        leftItems: currentQuestion.leftItems,
        rightItems: currentQuestion.rightItems,
        matchingPairs: currentQuestion.matchingPairs
      });
    } else {
      // Regular single/multiple choice question
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
