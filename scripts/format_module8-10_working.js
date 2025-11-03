const fs = require('fs');
const path = require('path');

function formatModule810Questions(inputFile, outputFile) {
  console.log('📝 Formatting Module 8-10 questions...\n');
  
  const content = fs.readFileSync(inputFile, 'utf8');
  const lines = content.split('\n').map(l => l.trim());
  
  let formattedLines = [];
  let currentQuestion = null;
  let currentAnswers = [];
  let i = 0;
  
  // Skip header
  while (i < lines.length && (lines[i].includes('Modules 8 - 10') || !lines[i])) {
    i++;
  }
  
  while (i < lines.length) {
    let line = lines[i];
    
    // Skip empty lines between processing
    if (!line) {
      i++;
      continue;
    }
    
    // Skip routing table, exhibits, explanations
    if (line.includes('is directly connected') ||
        (line.includes('via') && line.includes('FastEthernet')) ||
        line.includes('Gateway of last resort') ||
        line.includes('is subnetted') ||
        line.includes('centput omitted') ||
        line.includes('packets with destination') ||
        line.match(/^\d+\.\d+\.\d+\.\d+\//) ||
        line.includes('Place the options') ||
        line.startsWith('Explanation:')) {
      // Skip explanation block
      if (line.startsWith('Explanation:')) {
        while (i < lines.length && !lines[i + 1]?.match(/^\d+\./)) {
          i++;
          if (i >= lines.length) break;
        }
      }
      i++;
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
          formattedLines.push(ans.isCorrect ? '! ' + ans.text : ans.text);
        });
        formattedLines.push('');
      }
      
      // Start new question
      let questionNum = parseInt(questionMatch[1]);
      let questionText = questionMatch[2];
      
      // Collect question text (may span multiple lines)
      i++;
      while (i < lines.length) {
        const nextLine = lines[i];
        
        // Stop at next question
        if (nextLine && nextLine.match(/^\d+\./)) break;
        
        // Stop at explanation
        if (nextLine && nextLine.startsWith('Explanation:')) break;
        
        // Stop at first answer (bullet or standalone text that looks like answer)
        if (nextLine && nextLine.startsWith('•')) {
          break;
        }
        
        // Check if this looks like an answer (no bullet, reasonable length, not question-like)
        if (nextLine && 
            !nextLine.includes('?') &&
            !nextLine.includes('(') &&
            !nextLine.includes('Refer to') &&
            nextLine.length > 5 &&
            nextLine.length < 300 &&
            questionText.length > 20) {
          // Might be answer, check if question seems complete
          if (questionText.includes('?') || questionText.length > 50) {
            // Question seems complete, this is probably an answer
            break;
          }
        }
        
        // Continue question
        if (nextLine) {
          questionText += ' ' + nextLine;
        }
        i++;
      }
      
      currentQuestion = `${questionNum}. ${questionText.trim()}`;
      currentAnswers = [];
      continue;
    }
    
    // Process answers
    if (currentQuestion) {
      // Answer with bullet = incorrect
      if (line.startsWith('•')) {
        let answerText = line.substring(1).trim();
        
        // Collect multi-line answer
        i++;
        while (i < lines.length) {
          const nextLine = lines[i];
          
          // Stop at next question
          if (nextLine && nextLine.match(/^\d+\./)) break;
          
          // Stop at explanation
          if (nextLine && nextLine.startsWith('Explanation:')) break;
          
          // Stop at next bullet (next answer)
          if (nextLine && nextLine.startsWith('•')) break;
          
          // Stop at standalone answer (no bullet, reasonable length)
          if (nextLine && 
              !nextLine.startsWith('•') &&
              !nextLine.includes('?') &&
              !nextLine.includes('Refer to') &&
              nextLine.length > 5 &&
              nextLine.length < 300 &&
              !nextLine.match(/^\d+\./)) {
            // This might be a correct answer, but check context
            // If previous answer was bullet, this continuation is unlikely
            // Actually, if it's standalone, it's probably correct answer
            // But let's check: if it starts with capital and is reasonable length, it's likely answer
            if (nextLine.match(/^[A-Z]/) && nextLine.length > 10) {
              // This is probably a correct answer starting
              break;
            }
          }
          
          // Continue answer text
          if (nextLine && !nextLine.includes('is directly connected')) {
            answerText += ' ' + nextLine;
          }
          i++;
        }
        
        if (answerText) {
          currentAnswers.push({
            text: answerText.trim(),
            isCorrect: false
          });
        }
        continue;
      }
      // Answer without bullet = correct (but verify)
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
        
        let answerText = line;
        
        // Collect multi-line correct answer
        i++;
        while (i < lines.length) {
          const nextLine = lines[i];
          
          // Stop at next question
          if (nextLine && nextLine.match(/^\d+\./)) break;
          
          // Stop at explanation
          if (nextLine && nextLine.startsWith('Explanation:')) break;
          
          // Stop at next answer (bullet)
          if (nextLine && nextLine.startsWith('•')) break;
          
          // Stop at next standalone answer
          if (nextLine &&
              !nextLine.startsWith('•') &&
              !nextLine.match(/^\d+\./) &&
              !nextLine.startsWith('Explanation') &&
              !nextLine.includes('Refer to') &&
              nextLine.length > 5 &&
              nextLine.length < 300 &&
              nextLine.match(/^[A-Z]/)) {
            // This is probably next answer
            break;
          }
          
          // Continue answer
          if (nextLine && !nextLine.includes('is directly connected')) {
            answerText += ' ' + nextLine;
          }
          i++;
        }
        
        if (answerText && answerText.length > 3) {
          currentAnswers.push({
            text: answerText.trim(),
            isCorrect: true
          });
        }
        continue;
      }
    }
    
    i++;
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
  
  const questionCount = formattedLines.filter(l => l && l.match && l.match(/^\d+\./)).length;
  console.log(`✅ Formatted ${questionCount} questions`);
  console.log(`   Saved to: ${path.basename(outputFile)}\n`);
  
  // Show sample
  console.log('Sample (first question with answers):');
  console.log('-'.repeat(60));
  const sampleEnd = Math.min(20, formattedLines.length);
  formattedLines.slice(0, sampleEnd).forEach(l => console.log(l));
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

