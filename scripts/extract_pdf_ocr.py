#!/usr/bin/env python3
"""
Script to extract text from PDF using OCR if needed.
This requires the PDF to be converted to images first, then OCR.
"""

import sys
import os

def extract_with_ocr_instructions():
    print("""
Since the PDF appears to be image-based (scanned), you'll need to use OCR to extract text.

OPTION 1: Use online OCR tools
1. Go to https://www.onlineocr.net/ or https://www.ilovepdf.com/pdf_to_word
2. Upload module8-10.pdf
3. Convert and download as text
4. Save as module8-10.txt in this directory

OPTION 2: Use macOS Preview
1. Open module8-10.pdf in Preview
2. Select All (Cmd+A)
3. Copy (Cmd+C)
4. Paste into a text editor
5. Save as module8-10.txt

OPTION 3: Install and use Tesseract OCR
   pip3 install pytesseract pillow pdf2image
   Then run: python3 scripts/extract_pdf_with_ocr.py

OPTION 4: Use Adobe Acrobat or similar PDF software
   Most PDF software can export PDFs as text files.

After extracting the text, save it as 'module8-10.txt' in the project root directory.
""")

if __name__ == "__main__":
    extract_with_ocr_instructions()

