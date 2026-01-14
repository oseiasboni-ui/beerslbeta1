import re

file_path = 'js/data/beer-histories-de.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Naive fix: Add comma to any line ending with quote that is followed by a line starting with whitespace and a quote
# This handles the case of missing commas between keys.
# Look for "Value" (newline) (whitespace) "Key"
# Replace with "Value", (newline) (whitespace) "Key"

# Regex:
# ("[^"]+")\s*\n\s*"
# Group 1 is the value.
# We want to ensure it has a comma.

# Better: iterate lines. If a line looks like a Key-Value pair and doesn't end with comma, checking if it's NOT the last line.
# Last line is followed by '};'.

lines = content.split('\n')
new_lines = []
for i, line in enumerate(lines):
    # Check if line is a key-value pair
    if re.search(r'^\s*"[^"]+":\s*"[^"]+"', line):
        # It's a key value pair.
        # Does it have a comma?
        if not line.strip().endswith(','):
            # Check next significant line
            next_line_idx = i + 1
            is_last = False
            while next_line_idx < len(lines):
                if lines[next_line_idx].strip() == '};':
                    is_last = True
                    break
                if lines[next_line_idx].strip():
                    break
                next_line_idx += 1
            
            if not is_last:
                # Add comma
                line = line.rstrip() + ','
    
    new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print("Fixed commas.")
