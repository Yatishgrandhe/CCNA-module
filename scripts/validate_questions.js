const fs = require('fs');
const path = require('path');
const { parseQuestionsFromText } = require('../lib/questionParser.ts');

function validateQuestions(filePath) {
  try {
    console.log(`Validating questions from: ${path.basename(filePath)}\n`);
    
    if (!fs.existsSync(filePath)) {
      console.log('❌ File does not exist');
      return false;
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    if (fileContent.trim().length < 100) {
      console.log('❌ File is too small (less than 100 characters)');
      console.log('   The file might be empty or not properly extracted.\n');
      return false;
    }
    
    console.log(`✓ File size: ${fileContent.length} characters`);
    console.log(`✓ Number of lines: ${fileContent.split('\n').length}\n`);
    
    // Try to parse
    const questions = parseQuestionsFromText(fileContent);
    
    if (questions.length === 0) {
      console.log('❌ No questions were parsed from the file');
      console.log('\nExpected format:');
      console.log('  1. Question text here?');
      console.log('  o');
      console.log('  ! Correct answer');
      console.log('  o');
      console.log('  Wrong answer\n');
      
      // Show sample of file content
      console.log('First 500 characters of file:');
      console.log('-'.repeat(60));
      console.log(fileContent.substring(0, 500));
      console.log('-'.repeat(60));
      return false;
    }
    
    console.log(`✓ Successfully parsed ${questions.length} questions!\n`);
    
    // Show statistics
    const singleChoice = questions.filter(q => q.type === 'single').length;
    const multipleChoice = questions.filter(q => q.type === 'multiple').length;
    const matching = questions.filter(q => q.type === 'matching').length;
    
    console.log('Question breakdown:');
    console.log(`  Single choice: ${singleChoice}`);
    console.log(`  Multiple choice: ${multipleChoice}`);
    console.log(`  Matching: ${matching}\n`);
    
    // Show sample questions
    console.log('Sample questions (first 3):');
    questions.slice(0, 3).forEach((q, idx) => {
      console.log(`\n${idx + 1}. [${q.type.toUpperCase()}] Q${q.number}: ${q.text.substring(0, 60)}...`);
      if (q.answers) {
        console.log(`   Answers: ${q.answers.length} options`);
      }
    });
    
    return true;
  } catch (error) {
    console.log(`❌ Error: ${error.message}`);
    return false;
  }
}

// Check both files
console.log('='.repeat(60));
console.log('Question File Validator');
console.log('='.repeat(60));
console.log();

const filesToCheck = [
  path.join(__dirname, '..', 'module8-10.txt'),
  path.join(__dirname, '..', 'CCNA1 4-7 gimkit.txt')
];

filesToCheck.forEach(filePath => {
  const exists = fs.existsSync(filePath);
  const basename = path.basename(filePath);
  
  if (exists) {
    console.log(`\n📄 ${basename}:`);
    validateQuestions(filePath);
  } else {
    console.log(`\n📄 ${basename}: ❌ File not found`);
  }
});

