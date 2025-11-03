import { NextResponse } from 'next/server';
import { parseQuestionsFromText } from '@/lib/questionParser';
import fs from 'fs';
import path from 'path';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const moduleParam = searchParams.get('module') || '4-7';
    
    let filePath: string;
    if (moduleParam === '8-10') {
      filePath = path.join(process.cwd(), 'module8-10.txt');
    } else {
      filePath = path.join(process.cwd(), 'CCNA1 4-7 gimkit.txt');
    }
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: `Question file not found: ${path.basename(filePath)}` },
        { status: 404 }
      );
    }
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // If file is empty or too small, it might not have been extracted properly
    if (fileContent.trim().length < 100) {
      return NextResponse.json(
        { error: `Question file appears to be empty. Please ensure ${path.basename(filePath)} contains extracted text from the PDF.` },
        { status: 500 }
      );
    }
    
    const questions = parseQuestionsFromText(fileContent);
    
    if (questions.length === 0) {
      return NextResponse.json(
        { error: 'No questions were parsed from the file. Please check the file format.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json({ questions, count: questions.length, module: moduleParam });
  } catch (error) {
    console.error('Error loading questions:', error);
    return NextResponse.json(
      { error: 'Failed to load questions', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

