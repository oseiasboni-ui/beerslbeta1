import re
import json

# File paths
top_250_path = '/Users/oseiassilvadossantos/Desktop/beersl/js/data/top-250-beers.js'
data_path = '/Users/oseiassilvadossantos/Desktop/beersl/js/data/beer-parent-companies.js'

# 1. Parse top 250 brands
with open(top_250_path, 'r', encoding='utf-8') as f:
    t250_content = f.read()

# Extract list items: "Brand", "Brand 2", ...
# Regex specific to the array format
matches = re.findall(r'"([^"]+)"', t250_content)
# Filter out "use strict" or keys, generally list is just strings.
# The file content viewed earlier shows a simple array of strings.
active_brands = set(matches)
# cleanup: remove 'top250Beers' if matched (it won't be in quotes typically) or other artifacts
# Just relying on matches is safe enough given the file structure.

# 2. Parse existing data
with open(data_path, 'r', encoding='utf-8') as f:
    data_content = f.read()

# Naive parsing of JS object keys and history presence
# We can track which keys have 'history:'
# Regex to find keys and their content block is hard without a parser, 
# but duplicate script logic was robust. Let's reuse similar logic or just regex.

# We need to know if a SPECIFIC key has history.
# Let's use the same parsing logic as remove_bad_duplicates
entries = {}
pattern_start = re.compile(r'^\s*"([^"]+)"\s*:\s*\{', re.MULTILINE)

for match in pattern_start.finditer(data_content):
    key = match.group(1)
    # Just need to check if "history" string exists before the next key starts? 
    # That's risky. Better to parse block.
    
    brace_count = 0
    i = match.end() - 1
    found_end = False
    
    start_search = i
    
    # scan for balancing braces
    while i < len(data_content):
        char = data_content[i]
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                end_index = i + 1
                block_content = data_content[start_search:end_index]
                entries[key] = "history:" in block_content
                found_end = True
                break
        i += 1

# 3. Compare
missing_history = []
missing_entry = []

found_count = 0
active_brands_list = sorted(list(active_brands))

for brand in active_brands_list:
    # Skip possible structural strings if regex caught non-brands (should be fine)
    if brand == "top250Beers": continue 
    
    if brand not in entries:
        missing_entry.append(brand)
    elif not entries[brand]:
        missing_history.append(brand)
    else:
        found_count += 1

print(f"Total Active Brands Checked: {len(active_brands_list)}")
print(f"Brands with History: {found_count}")
print("\n--- Brands MISSING History (Present in data file but empty history) ---")
for b in missing_history:
    print(f"- {b}")

print("\n--- Brands Missing Data Entry (Not in parent companies file) ---")
for b in missing_entry:
    print(f"- {b}")
