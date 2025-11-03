const fs = require('fs');
const path = require('path');

function formatModule810Questions(inputFile, outputFile) {
  console.log('📝 Formatting Module 8-10 questions (perfect version)...\n');
  
  const content = fs.readFileSync(inputFile, 'utf8');
  const rawLines = content.split('\n');
  const lines = rawLines.map(l => l.trim());
  
  let formattedLines = [];
  let currentQuestion = null;
  let currentAnswers = [];
  let i = 0;
  let lastWasBullet = false;
  
  // Skip header
  while (i < lines.length && (lines[i].includes('Modules 8 - 10') || !lines[i])) {
    i++;
  }
  
  while (i < lines.length) {
    let line = lines[i];
    
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
      
      // Collect question text
      i++;
      lastWasBullet = false;
      while (i < lines.length) {
        const nextLine = lines[i];
        
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
        
        // Stop at standalone answer
        if (nextLine &&
            !nextLine.includes('?') &&
            !nextLine.includes('(') &&
            !nextLine.includes('Refer to') &&
            !nextLine.match(/^[A-Z][a-z]+ [a-z]+ [a-z]+:/) &&
            nextLine.length > 3 &&
            nextLine.length < 250 &&
            (questionText.includes('?') || questionText.length > 50)) {
          break;
        }
        
        // Continue question
        questionText += ' ' + nextLine;
        i++;
      }
      
      currentQuestion = `${questionNum}. ${questionText.trim()}`;
      currentAnswers = [];
      lastWasBullet = false;
      continue;
    }
    
    // Process answers
    if (currentQuestion) {
      // Answer with bullet = incorrect
      if (line.startsWith('•')) {
        let answerText = line.substring(1).trim();
        lastWasBullet = true;
        
        // Collect continuation - continue if next line doesn't start with bullet or capital standalone answer
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
          
          // Stop at next bullet answer
          if (nextLine.startsWith('•')) break;
          
          // KEY DECISION: Is this continuation or new answer?
          // Continuation if:
          // - Starts lowercase (clearly continuation)
          // - Starts with word that continues previous sentence
          // - Is short fragment
          // New answer if:
          // - Starts with capital and is complete sentence/phrase
          // - Is reasonable length standalone phrase
          
          const isContinuation = 
            !nextLine.match(/^[A-Z]/) ||  // lowercase start = continuation
            (nextLine.split(' ').length <= 3 && nextLine.length < 15) ||  // short fragment
            nextLine.match(/^(the|a|an|of|to|in|on|at|for|with|by|this|that|these|those|it|they)/i); // starts with article/preposition
          
          if (isContinuation) {
            // This is continuation
            answerText += ' ' + nextLine;
            i++;
          } else {
            // This is new answer (correct answer)
            break;
          }
        }
        
        lastWasBullet = false;
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
               line.length >= 3 &&
               line.length < 300) {
        
        let answerText = line;
        lastWasBullet = false;
        
        // Collect continuation
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
          
          // Stop at next standalone answer (different complete phrase)
          if (nextLine &&
              !nextLine.startsWith('•') &&
              !nextLine.match(/^\d+\./) &&
              !nextLine.startsWith('Explanation') &&
              !nextLine.includes('Refer to') &&
              !nextLine.includes('is directly connected') &&
              nextLine.length >= 5 &&
              nextLine.length < 300 &&
              nextLine.match(/^[A-Z]/) &&
              // Not continuation if it's clearly different
              !nextLine.toLowerCase().startsWith(answerText.toLowerCase().substring(0, Math.min(15, answerText.length)))) {
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
  console.log('Sample (first 2 questions):');
  console.log('-'.repeat(60));
  const secondQEnd = formattedLines.findIndex((l, idx) => idx > 0 && l && typeof l === 'string' && l.match(/^2\./));
  formattedLines.slice(0, secondQEnd > 0 ? secondQEnd : 35).forEach(l => console.log(l));
  console.log('-'.repeat(60));
  console.log();
  
  return formattedLines;
}

const inputFile = path.join(__dirname, '..', 'module8-10.txt');
const outputFile = path.join(__dirname, '..', 'module8-10-formatted.txt');

try {
  formatModule810Questions(inputFile, outputFile);
  console.log('✅ Formatting complete!\n');
  console.log('Replacing original file...');
  fs.copyFileSync(outputFile, inputFile);
  console.log('✅ File replaced successfully!\n');
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}

