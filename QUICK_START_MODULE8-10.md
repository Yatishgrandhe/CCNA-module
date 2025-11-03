# Quick Start: Module 8-10 Questions

## Current Status
The `module8-10.pdf` file is a scanned/image-based PDF. You need to extract the text manually.

## ⚡ FASTEST METHOD (Recommended)

### Step 1: Extract Text using macOS Preview

1. **Open the PDF:**
   ```bash
   open module8-10.pdf
   ```
   Or double-click `module8-10.pdf` in Finder

2. **Select and Copy All Text:**
   - Press `⌘+A` (Command+A) to select all
   - Press `⌘+C` (Command+C) to copy

3. **Paste and Save:**
   - Open TextEdit (or any text editor)
   - Press `⌘+V` to paste
   - Save as: `module8-10.txt` in the project root directory
   - Make sure to save as **Plain Text** (not Rich Text)

### Step 2: Verify Extraction

Run the validator:
```bash
node scripts/validate_questions.js
```

Or the website will automatically check when you load it.

### Step 3: Test the Website

```bash
npm run dev
```

The website will automatically load questions from `module8-10.txt` if available!

---

## Alternative Methods

### Method 2: Online OCR Tool

1. Visit: https://www.onlineocr.net/
2. Upload `module8-10.pdf`
3. Select output format: **Plain Text (.txt)**
4. Click "Convert"
5. Download and save as `module8-10.txt` in project root

### Method 3: Adobe Acrobat (if you have it)

1. Open PDF in Adobe Acrobat
2. Go to: **File → Export To → Text (Plain)**
3. Save as `module8-10.txt`

---

## Expected Format

The parser expects questions in this format:

```
1. What is the purpose of...?
o

! Correct answer text
o

Incorrect answer option
o

Another incorrect option

2. Which two statements...? (Choose two.)
o

! First correct answer
o

! Second correct answer
o

Incorrect answer
```

**Key points:**
- Question numbers: `1.`, `2.`, etc.
- Answer markers: `o` (lowercase letter o)
- Correct answers: Start with `!` (exclamation mark)
- Multiple choice: Include `(Choose two.)` or `(Choose three.)` in question text

---

## Troubleshooting

### If questions don't load:

1. **Check file exists:**
   ```bash
   ls -lh module8-10.txt
   ```

2. **Check file size:**
   - Should be at least a few KB (not 0 bytes)

3. **Check file format:**
   ```bash
   head -20 module8-10.txt
   ```
   Should show question text, not binary data

4. **Validate questions:**
   ```bash
   node scripts/validate_questions.js
   ```

---

## Next Steps After Extraction

Once `module8-10.txt` is created:

✅ The website will automatically detect and load it  
✅ Questions will be parsed and ready to use  
✅ You can start taking the quiz immediately  

No additional configuration needed!

