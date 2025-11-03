#!/usr/bin/env python3
import sys
try:
    import pdfplumber
except ImportError:
    print("Installing pdfplumber...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pdfplumber", "--quiet"])
    import pdfplumber

def extract_text_from_pdf(pdf_path, output_path):
    try:
        text = ""
        with pdfplumber.open(pdf_path) as pdf:
            total_pages = len(pdf.pages)
            print(f"Processing {total_pages} pages...")
            
            for i, page in enumerate(pdf.pages):
                page_text = page.extract_text()
                if page_text:
                    text += page_text + "\n"
                if (i + 1) % 10 == 0:
                    print(f"Processed {i + 1}/{total_pages} pages...")
        
        with open(output_path, 'w', encoding='utf-8') as out_file:
            out_file.write(text)
        
        print(f"Successfully extracted text to {output_path}")
        print(f"Total characters: {len(text)}")
        print(f"Total lines: {len(text.splitlines())}")
        return True
    except Exception as e:
        print(f"Error: {e}")
        import traceback
        traceback.print_exc()
        return False

if __name__ == "__main__":
    pdf_path = "module8-10.pdf"
    output_path = "module8-10.txt"
    
    if extract_text_from_pdf(pdf_path, output_path):
        sys.exit(0)
    else:
        sys.exit(1)

