# PDF to Text Extraction Guide

## Issue
The `module8-10.pdf` file appears to be a scanned/image-based PDF, which means it doesn't contain extractable text directly. You'll need to use OCR (Optical Character Recognition) to extract the text.

## Recommended Solutions

### Option 1: macOS Preview (Easiest)
1. Open `module8-10.pdf` in macOS Preview
2. Select All (⌘+A / Cmd+A)
3. Copy (⌘+C / Cmd+C)
4. Paste into TextEdit or any text editor
5. Save as `module8-10.txt` in the project root directory

### Option 2: Online OCR Tools
1. Visit https://www.onlineocr.net/ or https://www.ilovepdf.com/pdf_to_word
2. Upload `module8-10.pdf`
3. Convert and download as text
4. Save the text file as `module8-10.txt` in the project root directory

### Option 3: Adobe Acrobat (If Available)
1. Open the PDF in Adobe Acrobat
2. Go to File → Export To → Text (Plain)
3. Save as `module8-10.txt` in the project root directory

### Option 4: Install Tesseract OCR (Advanced)
```bash
# Install Tesseract
brew install tesseract

# Install Python dependencies
pip3 install pytesseract pillow pdf2image

# Run extraction (script will be created)
python3 scripts/extract_pdf_with_ocr.py
```

## After Extraction

Once you have `module8-10.txt`:
1. Place it in the project root directory (same level as `CCNA1 4-7 gimkit.txt`)
2. The website will automatically load questions from module8-10.txt if available
3. If module8-10.txt is not found, it will fall back to module 4-7 questions

## Format Expected

The parser expects a format similar to:
```
1. Question text here?
o

! Correct answer
o

Wrong answer
o

Another wrong answer
```

Make sure the extracted text follows a similar structure with:
- Question numbers like "1.", "2.", etc.
- "o" markers for answer options
- "!" prefix for correct answers
- "(Choose two.)" or "(Choose three.)" for multiple choice questions

