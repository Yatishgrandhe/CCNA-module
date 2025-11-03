#!/usr/bin/env python3
import sys
try:
    import PyPDF2
except ImportError:
    print("Installing PyPDF2...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PyPDF2", "--quiet"])
    import PyPDF2

def extract_text_from_pdf(pdf_path, output_path):
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            text = ""
            
            print(f"Processing {len(pdf_reader.pages)} pages...")
            for i, page in enumerate(pdf_reader.pages):
                page_text = page.extract_text()
                text += page_text + "\n"
                if (i + 1) % 10 == 0:
                    print(f"Processed {i + 1} pages...")
            
            with open(output_path, 'w', encoding='utf-8') as out_file:
                out_file.write(text)
            
            print(f"Successfully extracted text to {output_path}")
            print(f"Total characters: {len(text)}")
            return True
    except Exception as e:
        print(f"Error: {e}")
        return False

if __name__ == "__main__":
    pdf_path = "module8-10.pdf"
    output_path = "module8-10.txt"
    
    if extract_text_from_pdf(pdf_path, output_path):
        sys.exit(0)
    else:
        sys.exit(1)

