#!/bin/bash
# Quick script to check if module8-10.txt exists and is valid

echo "📋 Checking Module 8-10 Question File Status"
echo "============================================"
echo ""

FILE="module8-10.txt"

if [ ! -f "$FILE" ]; then
    echo "❌ File not found: $FILE"
    echo ""
    echo "📝 Next steps:"
    echo "   1. Open module8-10.pdf in Preview (should be opening now)"
    echo "   2. Press ⌘+A to select all"
    echo "   3. Press ⌘+C to copy"
    echo "   4. Open TextEdit and paste (⌘+V)"
    echo "   5. Save as 'module8-10.txt' in this directory"
    echo ""
    exit 1
fi

SIZE=$(wc -c < "$FILE" | tr -d ' ')
LINES=$(wc -l < "$FILE" | tr -d ' ')

echo "✅ File found: $FILE"
echo "   Size: $SIZE bytes"
echo "   Lines: $LINES"
echo ""

if [ "$SIZE" -lt 100 ]; then
    echo "⚠️  Warning: File is very small (less than 100 bytes)"
    echo "   The extraction might not have worked properly."
    echo ""
    exit 1
fi

# Check for question patterns
if grep -q "^[0-9]\+\. " "$FILE"; then
    QUESTION_COUNT=$(grep -c "^[0-9]\+\. " "$FILE")
    echo "✅ Found $QUESTION_COUNT question(s) in the file"
    echo ""
    echo "📊 Sample (first 3 questions):"
    grep "^[0-9]\+\. " "$FILE" | head -3
    echo ""
    echo "✅ Ready to use! The website will load these questions automatically."
else
    echo "⚠️  Warning: No question patterns found (format: '1. Question text?')"
    echo "   The file might not be in the correct format."
    echo ""
    echo "   First 20 lines of file:"
    head -20 "$FILE"
    echo ""
fi

