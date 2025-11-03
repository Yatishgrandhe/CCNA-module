const fs = require('fs');
const path = require('path');

function formatModule810Questions(inputFile, outputFile) {
  console.log('📝 Formatting Module 8-10 questions...\n');
  
  const content = fs.readFileSync(inputFile, 'utf8');
  const lines = content.split('\n');
  
  let formattedLines = [];
  let currentQuestion = null;
  let collectingQuestion = false;
  let inExplanation = false;
  let currentAnswers = [];
  let questionNumber = 0;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    
    // Skip header
    if (line.includes('Modules 8 - 10') || line.includes('CCNA1')) {
      continue;
    }
    
    // Skip exam answers reference
    if (line.includes('/ExamAnswers') || line.includes('ExamAnswers')) {
      continue;
    }
    
    // Skip "Refer to the exhibit" lines that are separate from questions
    if (line.startsWith('Refer to the exhibit') && !line.match(/^\d+\./)) {
      // Check if this is part of a question or standalone
      const prevLine = i > 0 ? lines[i-1].trim() : '';
      if (!prevLine.match(/^\d+\./)) {
        // Skip standalone exhibit references
        continue;
      }
    }
    
    // Detect and skip explanations
    if (line.startsWith('Explanation:') || inExplanation) {
      inExplanation = true;
      // Check if next non-empty line is a new question
      for (let j = i + 1; j < lines.length && j < i + 5; j++) {
        const nextLine = lines[j].trim();
        if (nextLine.match(/^\d+\./)) {
          inExplanation = false;
          break;
        }
        if (nextLine && !nextLine.startsWith('Explanation')) {
          // Still in explanation
          continue;
        }
      }
      continue;
    }
    
    // Match question number
    const questionMatch = line.match(/^(\d+)\.\s*(.+)$/);
    if (questionMatch) {
      // Save previous question
      if (currentQuestion && currentAnswers.length > 0) {
        formattedLines.push(currentQuestion);
        formattedLines.push(''); // Empty line
        currentAnswers.forEach(ans => {
          formattedLines.push('o');
          formattedLines.push('');
          formattedLines.push(ans);
        });
        formattedLines.push(''); // Empty line after question
      }
      
      // Start new question
      questionNumber = parseInt(questionMatch[1]);
      let questionText = questionMatch[2];
      collectingQuestion = true;
      currentAnswers = [];
      
      // Collect question text until we hit an answer
      let j = i + 1;
      while (j < lines.length) {
        const nextLine = lines[j].trim();
        
        // Stop at next question
        if (nextLine.match(/^\d+\./)) break;
        
        // Stop at answer (bullet or plain text that looks like answer)
        if (nextLine.startsWith('•') || 
            (nextLine && !nextLine.includes('?') && !nextLine.includes('(') && 
             nextLine.length > 10 && nextLine.length < 150 && 
             !nextLine.match(/^[A-Z][a-z]+ [a-z]+:/))) {
          // Might be an answer, but check if it's really part of question
          if (nextLine.includes('Refer to') || nextLine.includes('Match')) {
            questionText += ' ' + nextLine;
            j++;
            continue;
          }
          break;
        }
        
        // Stop at explanation
        if (nextLine.startsWith('Explanation:')) break;
        
        // Continue collecting question
        if (nextLine && nextLine.length > 0) {
          questionText += ' ' + nextLine;
          j++;
        } else {
          j++;
        }
      }
      
      currentQuestion = `${questionNumber}. ${questionText.trim()}`;
      collectingQuestion = false;
      continue;
    }
    
    // Process answer options
    if (currentQuestion && !inExplanation) {
      const cleanLine = line.trim();
      
      // Skip empty lines
      if (!cleanLine) {
        continue;
      }
      
      // Skip instructions
      if (cleanLine.includes('Place the options') || 
          cleanLine.includes('in the following order') ||
          cleanLine.includes('centput omitted') ||
          cleanLine.match(/^[A-Z][a-z]+ [a-z]+:/) && cleanLine.includes('Gateway')) {
        continue;
      }
      
      // Skip routing table content
      if (cleanLine.includes('is directly connected') || 
          cleanLine.includes('via') && cleanLine.includes('FastEthernet')) {
        continue;
      }
      
      // Handle matching questions - skip for now, handle separately later
      if (currentQuestion.includes('Match') || currentQuestion.includes('match')) {
        continue;
      }
      
      // Answer with bullet = incorrect
      if (cleanLine.startsWith('•')) {
        currentAnswers.push({
          text: cleanLine.substring(1).trim(),
          isCorrect: false
        });
      } 
      // Answer without bullet = correct (but check context)
      else if (cleanLine && 
               !cleanLine.startsWith('Explanation') &&
               !cleanLine.includes('Refer to the exhibit') &&
               cleanLine.length > 3 && 
               cleanLine.length < 200 &&
               !cleanLine.match(/^\d+\./) &&
               !cleanLine.includes('Gateway of last resort') &&
               !cleanLine.match(/^\d+\.\d+\.\d+\.\d+/)) {
        // This looks like a correct answer (no bullet)
        // But make sure we're not reading question text
        if (currentAnswers.length === 0 || 
            (i > 0 && lines[i-1].trim().startsWith('•'))) {
          currentAnswers.push({
            text: cleanLine,
            isCorrect: true
          });
        }
      }
    }
  }
  
  // Save last question
  if (currentQuestion && currentAnswers.length > 0) {
    formattedLines.push(currentQuestion);
    formattedLines.push('');
    currentAnswers.forEach(ans => {
      formattedLines.push('o');
      formattedLines.push('');
      formattedLines.push(ans.isCorrect ? '! ' + ans.text : ans.text);
    });
  }
  
  // Write output
  fs.writeFileSync(outputFile, formattedLines.join('\n'), 'utf8');
  
  // Count questions
  const questionCount = formattedLines.filter(l => l.match(/^\d+\./)).length;
  
  console.log(`✅ Formatted ${questionCount} questions`);
  console.log(`   Saved to: ${path.basename(outputFile)}\n`);
  
  return formattedLines;
}

const inputFile = path.join(__dirname, '..', 'module8-10.txt');
const outputFile = path.join(__dirname, '..', 'module8-10-formatted.txt');

try {
  formatModule810Questions(inputFile, outputFile);
  console.log('✅ Formatting complete!\n');
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}

