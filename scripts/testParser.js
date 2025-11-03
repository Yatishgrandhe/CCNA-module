const fs = require('fs');
const path = require('path');

// Simple test to see if we can read and parse questions
const filePath = path.join(__dirname, '..', 'CCNA1 4-7 gimkit.txt');
const fileContent = fs.readFileSync(filePath, 'utf8');

// Count questions by looking for question number patterns
const questionMatches = fileContent.match(/\n\d+\.\s/g);
console.log(`Found ${questionMatches ? questionMatches.length : 0} questions in the file`);

// Show first few questions
const lines = fileContent.split('\n');
let questionCount = 0;
for (let i = 0; i < lines.length && questionCount < 5; i++) {
  const line = lines[i].trim();
  const match = line.match(/^(\d+)\.\s*(.+)$/);
  if (match) {
    questionCount++;
    console.log(`\nQuestion ${match[1]}: ${match[2].substring(0, 80)}...`);
  }
}

