#!/usr/bin/env python3
import sys
import os

# Try multiple PDF libraries
def try_pypdf2(pdf_path):
    try:
        import PyPDF2
        text = ""
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n"
        return text if len(text.strip()) > 100 else None
    except:
        return None

def try_pdfplumber(pdf_path):
    try:
        import pdfplumber
        text = ""
        with pdfplumber.open(pdf_path) as pdf:
            for page in pdf.pages:
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
        return text if len(text.strip()) > 100 else None
    except:
        return None

def try_pypdfium2(pdf_path):
    try:
        import pypdfium2 as pdfium
        pdf = pdfium.PdfDocument(pdf_path)
        text = ""
        for i in range(len(pdf)):
            page = pdf[i]
            textpage = page.get_textpage()
            text += textpage.get_text_range() + "\n"
        pdf.close()
        return text if len(text.strip()) > 100 else None
    except:
        return None

if __name__ == "__main__":
    pdf_path = "module8-10.pdf"
    output_path = "module8-10.txt"
    
    print("Trying PyPDF2...")
    text = try_pypdf2(pdf_path)
    if text and len(text.strip()) > 100:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Successfully extracted {len(text)} characters using PyPDF2")
        sys.exit(0)
    
    print("Trying pdfplumber...")
    text = try_pdfplumber(pdf_path)
    if text and len(text.strip()) > 100:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Successfully extracted {len(text)} characters using pdfplumber")
        sys.exit(0)
    
    print("Trying pypdfium2...")
    try:
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdfium2", "--quiet"])
    except:
        pass
    
    text = try_pypdfium2(pdf_path)
    if text and len(text.strip()) > 100:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f"Successfully extracted {len(text)} characters using pypdfium2")
        sys.exit(0)
    
    print("ERROR: Could not extract text from PDF. The PDF might be image-based or encrypted.")
    print(f"File size: {os.path.getsize(pdf_path)} bytes")
    sys.exit(1)

