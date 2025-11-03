const fs = require('fs');
const path = require('path');

function formatModule810Questions(inputFile, outputFile) {
  console.log('📝 Formatting Module 8-10 questions (simple reliable version)...\n');
  
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
    const originalLine = lines[i];
    
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
    
    // Skip explanation block
    if (line.startsWith('Explanation:')) {
      while (i < lines.length && !lines[i + 1]?.trim().match(/^\d+\./)) {
        i++;
        if (i >= lines.length) break;
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
      
      // Collect question text until we see an answer
      i++;
      while (i < lines.length) {
        const nextLine = lines[i].trim();
        
        if (!nextLine) {
          i++;
          continue;
        }
        
        // Stop conditions
        if (nextLine.match(/^\d+\./) ||  // Next question
            nextLine.startsWith('Explanation:') ||  // Explanation
            nextLine.startsWith('•')) {  // First answer
          break;
        }
        
        // Check if this looks like an answer (not question continuation)
        if (questionText.length > 30 &&  // Question is substantial
            !nextLine.includes('?') &&
            !nextLine.includes('Refer to') &&
            nextLine.length > 5 &&
            nextLine.length < 250) {
          // Might be answer - if question has ?, likely answer
          if (questionText.includes('?') || questionText.length > 60) {
            break;
          }
        }
        
        // Continue question
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
        
        // Collect continuation of bullet answer
        i++;
        while (i < lines.length) {
          const nextLine = lines[i].trim();
          
          if (!nextLine) {
            i++;
            continue;
          }
          
          // Stop conditions
          if (nextLine.match(/^\d+\./) ||
              nextLine.startsWith('Explanation:') ||
              nextLine.startsWith('•')) {
            break;
          }
          
          // Check if this is a new standalone answer (correct answer)
          // Standalone answers typically:
          // - Start with capital letter
          // - Are complete phrases (multiple words or reasonable length)
          // - Don't continue the previous bullet answer
          const looksLikeNewAnswer = 
            nextLine.match(/^[A-Z]/) &&  // Starts with capital
            nextLine.length > 10 &&  // Reasonable length
            nextLine.split(' ').length >= 2 &&  // Multiple words
            !nextLine.match(/^(the|a|an|of|to|in|on|at|for|with|by)/i);  // Not just article
          
          if (looksLikeNewAnswer) {
            // This is a new answer (correct answer), stop collecting
            break;
          }
          
          // Otherwise, it's continuation
          answerText += ' ' + nextLine;
          i++;
        }
        
        if (answerText.trim()) {
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
        
        // Collect continuation
        i++;
        while (i < lines.length) {
          const nextLine = lines[i].trim();
          
          if (!nextLine) {
            i++;
            continue;
          }
          
          // Stop conditions
          if (nextLine.match(/^\d+\./) ||
              nextLine.startsWith('Explanation:') ||
              nextLine.startsWith('•')) {
            break;
          }
          
          // Check if this is next answer
          const looksLikeNextAnswer =
            nextLine.match(/^[A-Z]/) &&
            nextLine.length > 10 &&
            nextLine.split(' ').length >= 2 &&
            !nextLine.toLowerCase().startsWith(answerText.toLowerCase().substring(0, 10));
          
          if (looksLikeNextAnswer) {
            break;
          }
          
          // Continue answer
          answerText += ' ' + nextLine;
          i++;
        }
        
        if (answerText.trim() && answerText.length > 3) {
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
  formattedLines.slice(0, firstQEnd > 0 ? firstQEnd : 20).forEach(l => console.log(l));
  console.log('-'.repeat(60));
  console.log();
  
  return formattedLines;
}

const inputFile = path.join(__dirname, '..', 'module8-10.txt');
const outputFile = path.join(__dirname, '..', 'module8-10-formatted.txt');

try {
  formatModule810Questions(inputFile, outputFile);
  console.log('✅ Formatting complete!\n');
  
  // Show stats
  const formatted = fs.readFileSync(outputFile, 'utf8');
  const questionMatches = formatted.match(/^\d+\./gm);
  const correctAnswers = (formatted.match(/^! /gm) || []).length;
  console.log(`📊 Statistics:`);
  console.log(`   Questions: ${questionMatches ? questionMatches.length : 0}`);
  console.log(`   Correct answers marked: ${correctAnswers}`);
  console.log();
  
  // Ask to replace
  console.log('Replacing original file...');
  fs.copyFileSync(outputFile, inputFile);
  console.log('✅ File replaced successfully!\n');
} catch (error) {
  console.error('❌ Error:', error.message);
  console.error(error.stack);
  process.exit(1);
}

