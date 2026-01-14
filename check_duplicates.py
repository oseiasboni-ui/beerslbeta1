import re
from collections import Counter

file_path = '/Users/oseiassilvadossantos/Desktop/beersl/js/data/beer-parent-companies.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Regex to find keys: "Key": { ... }
keys = re.findall(r'^\s*"([^"]+)":\s*{', content, re.MULTILINE)

counts = Counter(keys)
duplicates = [k for k, v in counts.items() if v > 1]

print("Duplicate Keys Found:")
for k in duplicates:
    print(f"{k}: {counts[k]} times")
