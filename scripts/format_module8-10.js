const fs = require('fs');
const path = require('path');

function formatModule810Questions(inputFile, outputFile) {
  console.log('📝 Formatting Module 8-10 questions...\n');
  
  const content = fs.readFileSync(inputFile, 'utf8');
  const lines = content.split('\n');
  
  let formattedLines = [];
  let currentQuestion = null;
  let currentAnswers = [];
  let inExplanation = false;
  let questionNumber = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Skip header line
    if (line.includes('Modules 8 - 10') || line.includes('CCNA1')) {
      continue;
    }
    
    // Skip exam answers reference
    if (line.includes('/ExamAnswers') || line.includes('ExamAnswers')) {
      continue;
    }
    
    // Detect explanation sections
    if (line.startsWith('Explanation:')) {
      inExplanation = true;
      continue;
    }
    
    // Skip explanation content until next question
    if (inExplanation) {
      // Check if next line starts a new question
      const nextQuestionMatch = lines[i + 1] && lines[i + 1].trim().match(/^\d+\./);
      if (nextQuestionMatch) {
        inExplanation = false;
      }
      continue;
    }
    
    // Match question number: "1.", "2.", etc.
    const questionMatch = line.match(/^(\d+)\.\s*(.+)$/);
    if (questionMatch) {
      // Save previous question if exists
      if (currentQuestion && currentAnswers.length > 0) {
        formattedLines.push(currentQuestion);
        currentAnswers.forEach(ans => formattedLines.push(ans));
        formattedLines.push(''); // Empty line after question
      }
      
      // Start new question
      questionNumber = parseInt(questionMatch[1]);
      let questionText = questionMatch[2];
      
      // Check if question continues on next line
      let j = i + 1;
      while (j < lines.length) {
        const nextLine = lines[j].trim();
        // Stop if next line is a bullet point or new question
        if (nextLine.match(/^\d+\./) || nextLine.startsWith('•') || nextLine.startsWith('o')) {
          break;
        }
        // Stop if it's an explanation
        if (nextLine.startsWith('Explanation:') || nextLine.includes('Refer to the exhibit')) {
          break;
        }
        // Continue question text
        if (nextLine && !nextLine.match(/^[A-Z][a-z]+ [a-z]+:/)) {
          questionText += ' ' + nextLine;
          j++;
        } else {
          break;
        }
      }
      
      currentQuestion = `${questionNumber}. ${questionText}`;
      currentAnswers = [];
      continue;
    }
    
    // Match answer options - lines with bullet "•" or without bullet (correct answer)
    if (currentQuestion && !line.match(/^\d+\./)) {
      // Remove leading/trailing whitespace but keep content
      const cleanLine = line.trim();
      
      // Skip empty lines
      if (!cleanLine) {
        continue;
      }
      
      // Skip "Place the options" instructions for matching questions
      if (cleanLine.includes('Place the options') || cleanLine.includes('in the following order')) {
        continue;
      }
      
      // Check if this is part of a matching question (question 15)
      if (currentQuestion.includes('Match') || currentQuestion.includes('match')) {
        // Skip matching question for now - we'll handle it separately
        continue;
      }
      
      // If line starts with bullet "•", it's a wrong answer
      if (cleanLine.startsWith('•')) {
        formattedLines.push('o');
        formattedLines.push('');
        formattedLines.push(cleanLine.substring(1).trim());
        currentAnswers.push('o');
        currentAnswers.push('');
        currentAnswers.push(cleanLine.substring(1).trim());
      } else if (cleanLine && !cleanLine.startsWith('Explanation') && 
                 !cleanLine.includes('Refer to') &&
                 !cleanLine.match(/^[A-Z][a-z]+ [a-z]+:/)) {
        // Line without bullet is the correct answer
        // But check if we already have answers - if so, this might be continuation
        if (currentAnswers.length === 0 || 
            (currentAnswers.length > 0 && currentAnswers[currentAnswers.length - 1].startsWith('!'))) {
          // This is a correct answer
          formattedLines.push('o');
          formattedLines.push('');
          formattedLines.push('! ' + cleanLine);
          currentAnswers.push('o');
          currentAnswers.push('');
          currentAnswers.push('! ' + cleanLine);
        } else {
          // This might be continuation of previous answer
          const lastAnswer = currentAnswers[currentAnswers.length - 1];
          if (lastAnswer && !lastAnswer.includes('•') && !lastAnswer.startsWith('o')) {
            // Append to last answer
            currentAnswers[currentAnswers.length - 1] = lastAnswer + ' ' + cleanLine;
            // Update formatted lines too
            const formattedLastIdx = formattedLines.length - 1;
            if (formattedLines[formattedLastIdx] && !formattedLines[formattedLastIdx].startsWith('o')) {
              formattedLines[formattedLastIdx] = formattedLines[formattedLastIdx] + ' ' + cleanLine;
            }
          }
        }
      }
    }
  }
  
  // Don't forget last question
  if (currentQuestion && currentAnswers.length > 0) {
    formattedLines.push(currentQuestion);
    currentAnswers.forEach(ans => formattedLines.push(ans));
  }
  
  // Write formatted output
  fs.writeFileSync(outputFile, formattedLines.join('\n'), 'utf8');
  
  console.log(`✅ Formatted questions saved to: ${path.basename(outputFile)}`);
  console.log(`   Total lines: ${formattedLines.length}`);
  console.log(`   Questions found: ${questionNumber}\n`);
  
  return formattedLines;
}

// Run the formatter
const inputFile = path.join(__dirname, '..', 'module8-10.txt');
const outputFile = path.join(__dirname, '..', 'module8-10-formatted.txt');

try {
  formatModule810Questions(inputFile, outputFile);
  console.log('✅ Formatting complete!\n');
  console.log('Next step: Review the formatted file and rename it:');
  console.log(`   mv module8-10-formatted.txt module8-10.txt\n`);
} catch (error) {
  console.error('❌ Error:', error.message);
  process.exit(1);
}

