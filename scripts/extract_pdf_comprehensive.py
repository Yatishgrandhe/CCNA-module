#!/usr/bin/env python3
"""
Comprehensive PDF text extraction with multiple fallback methods
"""

import sys
import os

def extract_with_pdfplumber_layout(pdf_path):
    """Extract text preserving layout"""
    try:
        import pdfplumber
        text = ""
        with pdfplumber.open(pdf_path) as pdf:
            total = len(pdf.pages)
            print(f"Extracting from {total} pages with pdfplumber...")
            
            for i, page in enumerate(pdf.pages):
                # Try different extraction strategies
                page_text = page.extract_text(layout=True)
                if not page_text:
                    page_text = page.extract_text()
                if not page_text:
                    # Try extracting tables and text
                    tables = page.extract_tables()
                    page_text = ""
                    if tables:
                        for table in tables:
                            for row in table:
                                if row:
                                    page_text += " ".join([str(cell) if cell else "" for cell in row]) + "\n"
                    text_content = page.chars
                    if text_content:
                        page_text = " ".join([char.get('text', '') for char in text_content])
                
                if page_text:
                    text += page_text + "\n\n"
                
                if (i + 1) % 5 == 0:
                    print(f"  Processed {i + 1}/{total} pages...")
        
        return text if len(text.strip()) > 100 else None
    except Exception as e:
        print(f"pdfplumber layout method failed: {e}")
        return None

def extract_with_pypdfium(pdf_path):
    """Try pypdfium2 with different settings"""
    try:
        import pypdfium2 as pdfium
        pdf = pdfium.PdfDocument(pdf_path)
        text = ""
        total = len(pdf)
        print(f"Extracting from {total} pages with pypdfium2...")
        
        for i in range(total):
            page = pdf[i]
            textpage = page.get_textpage()
            page_text = textpage.get_text_range()
            if page_text:
                text += page_text + "\n\n"
            if (i + 1) % 5 == 0:
                print(f"  Processed {i + 1}/{total} pages...")
        
        pdf.close()
        return text if len(text.strip()) > 100 else None
    except Exception as e:
        print(f"pypdfium2 method failed: {e}")
        return None

def extract_with_pypdf(pdf_path):
    """Try newer PyPDF"""
    try:
        import pypdf
        text = ""
        with open(pdf_path, 'rb') as file:
            pdf_reader = pypdf.PdfReader(file)
            total = len(pdf_reader.pages)
            print(f"Extracting from {total} pages with pypdf...")
            
            for i, page in enumerate(pdf_reader.pages):
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n\n"
                if (i + 1) % 5 == 0:
                    print(f"  Processed {i + 1}/{total} pages...")
        
        return text if len(text.strip()) > 100 else None
    except Exception as e:
        print(f"pypdf method failed: {e}")
        return None

if __name__ == "__main__":
    pdf_path = "module8-10.pdf"
    output_path = "module8-10.txt"
    
    print("=" * 60)
    print("PDF Text Extraction - Multiple Methods")
    print("=" * 60)
    
    # Install dependencies if needed
    print("\n1. Checking/installing dependencies...")
    try:
        import pdfplumber
        print("   ✓ pdfplumber installed")
    except ImportError:
        print("   Installing pdfplumber...")
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pdfplumber", "--quiet"])
        import pdfplumber
    
    # Try extraction methods
    text = None
    
    print("\n2. Attempting extraction with pdfplumber (layout mode)...")
    text = extract_with_pdfplumber_layout(pdf_path)
    
    if not text:
        print("\n3. Attempting extraction with pypdfium2...")
        try:
            import subprocess
            subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdfium2", "--quiet"], 
                                stderr=subprocess.DEVNULL)
        except:
            pass
        text = extract_with_pypdfium(pdf_path)
    
    if not text:
        print("\n4. Attempting extraction with pypdf...")
        try:
            import subprocess
            subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf", "--quiet"],
                                stderr=subprocess.DEVNULL)
        except:
            pass
        text = extract_with_pypdf(pdf_path)
    
    if text and len(text.strip()) > 100:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"\n✓ SUCCESS!")
        print(f"  Extracted {len(text)} characters")
        print(f"  Saved to {output_path}")
        print(f"  Preview (first 500 chars):")
        print("-" * 60)
        print(text[:500])
        print("-" * 60)
        sys.exit(0)
    else:
        print("\n✗ EXTRACTION FAILED")
        print("\nThe PDF appears to be image-based (scanned).")
        print("You'll need to use OCR. Options:")
        print("\n  OPTION A: macOS Preview (Easiest)")
        print("    1. Open module8-10.pdf in Preview")
        print("    2. Select All (Cmd+A)")
        print("    3. Copy (Cmd+C)")
        print("    4. Paste into TextEdit, save as module8-10.txt")
        print("\n  OPTION B: Online OCR")
        print("    Visit: https://www.onlineocr.net/")
        print("    Upload PDF, download as text")
        sys.exit(1)

