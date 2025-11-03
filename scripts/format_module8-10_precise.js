const fs = require('fs');
const path = require('path');

function formatModule810Questions(inputFile, outputFile) {
  console.log('📝 Formatting Module 8-10 questions with precise parsing...\n');
  
  const content = fs.readFileSync(inputFile, 'utf8');
  const lines = content.split('\n');
  
  let formattedLines = [];
  let currentQuestion = null;
  let currentAnswers = [];
  let i = 0;
  
  // Skip header
  while (i < lines.length && (lines[i].includes('Modules 8 - 10') || !lines[i].trim())) {
    i++;
  }
  
  while (i < lines.length) {
    let line = lines[i].trim();
    
    // Skip empty lines, routing tables, explanations
    if (!line ||
        line.includes('is directly connected') ||
        (line.includes('via') && line.includes('FastEthernet')) ||
        line.includes('Gateway of last resort') ||
        line.includes('is subnetted') ||
        line.includes('centput omitted') ||
        line.includes('packets with destination') ||
        line.match(/^\d+\.\d+\.\d+\.\d+\//) ||
        line.includes('Place the options') ||
        line.startsWith('Explanation:')) {
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
      
      // Collect question text (may span lines until we hit an answer)
      i++;
      while (i < lines.length) {
        const nextLine = lines[i].trim();
        
        if (!nextLine) {
          i++;
          continue;
        }
        
        // Stop at next question
        if (nextLine.match(/^\d+\./)) break;
        
        // Stop at explanation
        if (nextLine.startsWith('Explanation:')) break;
        
        // Stop at first answer (has bullet)
        if (nextLine.startsWith('•')) break;
        
        // Check if this is a standalone answer (no bullet, looks like answer not question)
        if (nextLine &&
            !nextLine.includes('?') &&
            !nextLine.includes('(') &&
            !nextLine.includes('Refer to') &&
            !nextLine.match(/^[A-Z][a-z]+ [a-z]+ [a-z]+:/) &&
            nextLine.length > 3 &&
            nextLine.length < 250 &&
            questionText.length > 30) {
          // This might be an answer - if question has question mark, it's probably answer
          if (questionText.includes('?') || questionText.length > 60) {
            break;
          }
        }
        
        // Continue question text
        questionText += ' ' + nextLine;
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
        
        // Collect continuation of this answer
        i++;
        while (i < lines.length) {
          const nextLine = lines[i].trim();
          
          if (!nextLine) {
            i++;
            continue;
          }
          
          // Stop at next question
          if (nextLine.match(/^\d+\./)) break;
          
          // Stop at explanation
          if (nextLine.startsWith('Explanation:')) break;
          
          // Stop at next answer (bullet)
          if (nextLine.startsWith('•')) break;
          
          // Stop at standalone answer (no bullet, starts with capital, reasonable length)
          if (nextLine &&
              !nextLine.startsWith('•') &&
              !nextLine.match(/^\d+\./) &&
              !nextLine.startsWith('Explanation') &&
              !nextLine.includes('Refer to') &&
              !nextLine.includes('is directly connected') &&
              nextLine.length > 5 &&
              nextLine.length < 300 &&
              nextLine.match(/^[A-Z]/)) {
            // This is probably the next answer (correct answer without bullet)
            break;
          }
          
          // Continue answer text
          answerText += ' ' + nextLine;
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
      // Answer without bullet = correct answer
      else if (line &&
               !line.match(/^\d+\./) &&
               !line.startsWith('Explanation') &&
               !line.includes('Refer to the exhibit') &&
               !line.includes('Match') &&
               !line.includes('Place') &&
               !line.includes('is directly connected') &&
               !line.includes('via') &&
               !line.match(/^\d+\.\d+\.\d+\.\d+\//) &&
               line.length > 3 &&
               line.length < 300 &&
               line.match(/^[A-Z]/)) {
        
        let answerText = line;
        
        // Collect continuation of correct answer
        i++;
        while (i < lines.length) {
          const nextLine = lines[i].trim();
          
          if (!nextLine) {
            i++;
            continue;
          }
          
          // Stop at next question
          if (nextLine.match(/^\d+\./)) break;
          
          // Stop at explanation
          if (nextLine.startsWith('Explanation:')) break;
          
          // Stop at next answer (bullet)
          if (nextLine.startsWith('•')) break;
          
          // Stop at next standalone answer
          if (nextLine &&
              !nextLine.startsWith('•') &&
              !nextLine.match(/^\d+\./) &&
              !nextLine.startsWith('Explanation') &&
              !nextLine.includes('Refer to') &&
              !nextLine.includes('is directly connected') &&
              nextLine.length > 5 &&
              nextLine.length < 300 &&
              nextLine.match(/^[A-Z]/) &&
              !nextLine.includes('packets with destination')) {
            // This is probably next answer
            break;
          }
          
          // Continue answer
          answerText += ' ' + nextLine;
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
  
  const questionCount = formattedLines.filter(l => l && typeof l === 'string' && l.match(/^\d+\./)).length;
  console.log(`✅ Formatted ${questionCount} questions`);
  console.log(`   Saved to: ${path.basename(outputFile)}\n`);
  
  // Show sample
  console.log('Sample (first question):');
  console.log('-'.repeat(60));
  const firstQEnd = formattedLines.findIndex((l, idx) => idx > 0 && l && typeof l === 'string' && l.match(/^\d+\./));
  formattedLines.slice(0, firstQEnd > 0 ? firstQEnd : 25).forEach(l => console.log(l));
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

