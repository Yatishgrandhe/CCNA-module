const fs = require('fs');
const path = require('path');

function formatModule810Questions(inputFile, outputFile) {
  console.log('📝 Formatting Module 8-10 questions correctly...\n');
  
  const content = fs.readFileSync(inputFile, 'utf8');
  const lines = content.split('\n');
  
  let formattedLines = [];
  let currentQuestion = null;
  let currentAnswers = [];
  let inExplanation = false;
  let collectingAnswer = false;
  let currentAnswerText = '';
  let currentAnswerIsCorrect = false;
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    const originalLine = lines[i];
    
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
        (line.includes('via') && line.includes('FastEthernet')) ||
        line.includes('Gateway of last resort') ||
        line.includes('is subnetted') ||
        line.includes('centput omitted') ||
        line.includes('packets with destination') ||
        line.match(/^\d+\.\d+\.\d+\.\d+\//) ||
        line.includes('Place the options')) {
      continue;
    }
    
    // Handle explanations
    if (line.startsWith('Explanation:')) {
      inExplanation = true;
      // Finish any current answer
      if (collectingAnswer && currentAnswerText) {
        currentAnswers.push({
          text: currentAnswerText.trim(),
          isCorrect: currentAnswerIsCorrect
        });
        collectingAnswer = false;
        currentAnswerText = '';
      }
      continue;
    }
    
    if (inExplanation) {
      // Check if next line is a new question
      if (i + 1 < lines.length && lines[i + 1].trim().match(/^\d+\./)) {
        inExplanation = false;
      }
      continue;
    }
    
    // Match question number
    const questionMatch = line.match(/^(\d+)\.\s*(.+)$/);
    if (questionMatch) {
      // Finish previous answer if collecting
      if (collectingAnswer && currentAnswerText) {
        currentAnswers.push({
          text: currentAnswerText.trim(),
          isCorrect: currentAnswerIsCorrect
        });
        collectingAnswer = false;
        currentAnswerText = '';
      }
      
      // Save previous question
      if (currentQuestion && currentAnswers.length > 0) {
        formattedLines.push(currentQuestion);
        currentAnswers.forEach(ans => {
          formattedLines.push('o');
          formattedLines.push('');
          formattedLines.push(ans.isCorrect ? '! ' + ans.text : ans.text);
        });
        formattedLines.push('');
      }
      
      // Start new question
      let questionNumber = parseInt(questionMatch[1]);
      let questionText = questionMatch[2];
      
      // Collect question text until we hit an answer
      let j = i + 1;
      while (j < lines.length) {
        const nextLine = lines[j].trim();
        
        // Stop at next question
        if (nextLine.match(/^\d+\./)) break;
        
        // Stop at answer (bullet)
        if (nextLine.startsWith('•')) break;
        
        // Stop at explanation
        if (nextLine.startsWith('Explanation:')) break;
        
        // Check if this looks like an answer start (no bullet, reasonable length)
        // But only if we have substantial question text
        if (questionText.length > 30 && 
            nextLine && 
            !nextLine.includes('?') && 
            !nextLine.match(/^Refer to/) &&
            nextLine.length > 5 && 
            nextLine.length < 250) {
          // Could be an answer - check if previous line ended question
          const prevLine = j > 0 ? lines[j - 1].trim() : '';
          if (prevLine.endsWith('?') || prevLine.endsWith('.')) {
            // This might be first answer
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
    
    // Process answer options
    if (currentQuestion && !inExplanation) {
      if (!line) {
        // Empty line - might end current answer
        if (collectingAnswer && currentAnswerText) {
          currentAnswers.push({
            text: currentAnswerText.trim(),
            isCorrect: currentAnswerIsCorrect
          });
          collectingAnswer = false;
          currentAnswerText = '';
          currentAnswerIsCorrect = false;
        }
        continue;
      }
      
      // Answer with bullet = incorrect
      if (line.startsWith('•')) {
        // Finish previous answer if any
        if (collectingAnswer && currentAnswerText) {
          currentAnswers.push({
            text: currentAnswerText.trim(),
            isCorrect: currentAnswerIsCorrect
          });
        }
        
        // Start new incorrect answer
        collectingAnswer = true;
        currentAnswerText = line.substring(1).trim();
        currentAnswerIsCorrect = false;
      }
      // Line without bullet - check if it's answer continuation or new answer
      else if (line && 
               !line.match(/^\d+\./) &&
               !line.startsWith('Explanation') &&
               !line.includes('Refer to the exhibit') &&
               !line.includes('Match') &&
               !line.includes('Place') &&
               line.length > 3 &&
               line.length < 300 &&
               !line.match(/^[A-Z][a-z]+ [a-z]+ [a-z]+:/) &&
               !line.includes('is directly connected') &&
               !line.includes('via') &&
               !line.match(/^\d+\.\d+\.\d+\.\d+\//)) {
        
        // Check if we're collecting an answer
        if (collectingAnswer) {
          // Continue current answer
          currentAnswerText += ' ' + line;
        } else {
          // This might be a correct answer (no bullet)
          // Check context - if previous line was empty or bullet, this is likely answer
          const prevLine = i > 0 ? lines[i - 1].trim() : '';
          if (!prevLine || prevLine.startsWith('•') || prevLine === 'o' || prevLine.match(/^\d+\./)) {
            collectingAnswer = true;
            currentAnswerText = line;
            currentAnswerIsCorrect = true; // No bullet = correct
          }
        }
      }
    }
  }
  
  // Finish last answer
  if (collectingAnswer && currentAnswerText) {
    currentAnswers.push({
      text: currentAnswerText.trim(),
      isCorrect: currentAnswerIsCorrect
    });
  }
  
  // Save last question
  if (currentQuestion && currentAnswers.length > 0) {
    formattedLines.push(currentQuestion);
    currentAnswers.forEach(ans => {
      formattedLines.push('o');
      formattedLines.push('');
      formattedLines.push(ans.isCorrect ? '! ' + ans.text : ans.text);
    });
  }
  
  // Write output
  fs.writeFileSync(outputFile, formattedLines.join('\n'), 'utf8');
  
  // Count questions
  const questionCount = formattedLines.filter(l => l && l.match && l.match(/^\d+\./)).length;
  
  console.log(`✅ Formatted ${questionCount} questions`);
  console.log(`   Saved to: ${path.basename(outputFile)}\n`);
  
  // Show sample
  console.log('Sample formatted output (first question):');
  console.log('-'.repeat(60));
  const firstQuestionEnd = formattedLines.findIndex((l, idx) => idx > 0 && l && l.match && l.match(/^\d+\./));
  formattedLines.slice(0, firstQuestionEnd > 0 ? firstQuestionEnd : 30).forEach(l => console.log(l));
  console.log('-'.repeat(60));
  console.log();
  
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

