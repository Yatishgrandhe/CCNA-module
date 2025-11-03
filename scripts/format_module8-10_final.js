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
    let line = lines[i].trim();
    
    // Skip header
    if (line.includes('Modules 8 - 10') || line.includes('CCNA1')) {
      continue;
    }
    
    // Skip exam answers reference
    if (line.includes('/ExamAnswers') || line.includes('ExamAnswers')) {
      continue;
    }
    
    // Skip routing table and exhibit data
    if (line.includes('is directly connected') ||
        line.includes('via') && line.includes('FastEthernet') ||
        line.includes('Gateway of last resort') ||
        line.includes('is subnetted') ||
        line.includes('centput omitted') ||
        line.includes('packets with destination') ||
        line.match(/^\d+\.\d+\.\d+\.\d+\//)) {
      continue;
    }
    
    // Skip "Place the options" instructions
    if (line.includes('Place the options') || line.includes('in the following order')) {
      continue;
    }
    
    // Handle explanations
    if (line.startsWith('Explanation:')) {
      inExplanation = true;
      continue;
    }
    
    if (inExplanation) {
      // Check if next meaningful line is a new question
      for (let j = i + 1; j < Math.min(i + 10, lines.length); j++) {
        const nextLine = lines[j].trim();
        if (nextLine.match(/^\d+\./)) {
          inExplanation = false;
          break;
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
        currentAnswers.forEach(ans => {
          formattedLines.push('o');
          formattedLines.push('');
          formattedLines.push(ans);
        });
        formattedLines.push('');
      }
      
      // Start new question
      questionNumber = parseInt(questionMatch[1]);
      let questionText = questionMatch[2];
      
      // Collect question text that may span multiple lines
      let j = i + 1;
      while (j < lines.length) {
        const nextLine = lines[j].trim();
        
        // Stop at next question
        if (nextLine.match(/^\d+\./)) break;
        
        // Stop at answer (has bullet or looks like standalone answer)
        if (nextLine.startsWith('•')) break;
        
        // Stop at explanation
        if (nextLine.startsWith('Explanation:')) break;
        
        // Check if next line is an answer (no bullet but looks like answer)
        // Answers are typically: not too long, don't have question marks, don't start with capital word patterns
        if (nextLine && 
            !nextLine.includes('?') && 
            !nextLine.includes('(') &&
            nextLine.length > 5 && 
            nextLine.length < 200 &&
            !nextLine.match(/^Refer to/) &&
            !nextLine.match(/^[A-Z][a-z]+ [a-z]+ [a-z]+:/)) {
          // Might be answer, but let's check context
          // If previous line was part of question, continue collecting
          // If we have enough question text, might be answer
          if (questionText.length > 50 && 
              !questionText.includes('Refer to') && 
              !questionText.includes('Match')) {
            // This is probably an answer
            break;
          }
        }
        
        // Continue question text
        if (nextLine) {
          questionText += ' ' + nextLine;
        }
        j++;
      }
      
      currentQuestion = `${questionNumber}. ${questionText.trim()}`;
      currentAnswers = [];
      continue;
    }
    
    // Process answer options - only if we have a current question
    if (currentQuestion && !inExplanation) {
      if (!line) continue;
      
      // Answer with bullet = incorrect answer
      if (line.startsWith('•')) {
        const answerText = line.substring(1).trim();
        if (answerText) {
          currentAnswers.push(answerText);
        }
      }
      // Answer without bullet = correct answer (but verify it's not question continuation)
      else if (line && 
               !line.match(/^\d+\./) &&
               !line.startsWith('Explanation') &&
               !line.includes('Refer to the exhibit') &&
               !line.includes('Match') &&
               !line.includes('Place') &&
               line.length > 3 &&
               line.length < 250 &&
               !line.match(/^[A-Z][a-z]+ [a-z]+ [a-z]+:/) &&
               !line.includes('is directly connected') &&
               !line.includes('via') &&
               !line.match(/^\d+\.\d+\.\d+\.\d+/)) {
        // This is likely a correct answer
        // Make sure we're not accidentally capturing question text
        if (currentAnswers.length === 0 || 
            (i > 0 && lines[i-1].trim().startsWith('•'))) {
          currentAnswers.push('! ' + line);
        }
      }
    }
  }
  
  // Save last question
  if (currentQuestion && currentAnswers.length > 0) {
    formattedLines.push(currentQuestion);
    currentAnswers.forEach(ans => {
      formattedLines.push('o');
      formattedLines.push('');
      formattedLines.push(ans);
    });
  }
  
  // Write output
  fs.writeFileSync(outputFile, formattedLines.join('\n'), 'utf8');
  
  // Count questions
  const questionCount = formattedLines.filter(l => typeof l === 'string' && l.match(/^\d+\./)).length;
  
  console.log(`✅ Formatted ${questionCount} questions`);
  console.log(`   Saved to: ${path.basename(outputFile)}\n`);
  
  // Show sample
  console.log('Sample formatted output (first 30 lines):');
  console.log('-'.repeat(60));
  formattedLines.slice(0, 30).forEach(l => console.log(l));
  console.log('-'.repeat(60));
  console.log();
  
  return formattedLines;
}

const inputFile = path.join(__dirname, '..', 'module8-10.txt');
const outputFile = path.join(__dirname, '..', 'module8-10-formatted.txt');

try {
  formatModule810Questions(inputFile, outputFile);
  console.log('✅ Formatting complete!\n');
  console.log('Next: Review and replace the original file:');
  console.log(`   cp module8-10-formatted.txt module8-10.txt\n`);
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}

