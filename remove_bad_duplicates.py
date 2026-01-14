import re

file_path = '/Users/oseiassilvadossantos/Desktop/beersl/js/data/beer-parent-companies.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Identify all entries
# regex to find key and opening brace: ^\s*"([^"]+)"\s*:\s*{
# We will iterate through the file to find these start points, then scan for the matching closing brace.

entries = [] # List of dicts: {'key': k, 'start': start_idx, 'end': end_idx, 'content': content_str, 'has_history': bool}

pattern_start = re.compile(r'^\s*"([^"]+)"\s*:\s*\{', re.MULTILINE)

for match in pattern_start.finditer(content):
    key = match.group(1)
    start_index = match.start()
    
    # Find closing brace by counting
    brace_count = 0
    i = match.end() - 1 # start at the opening brace
    found_end = False
    
    # scan for balancing braces
    while i < len(content):
        char = content[i]
        if char == '{':
            brace_count += 1
        elif char == '}':
            brace_count -= 1
            if brace_count == 0:
                # Check if there is a trailing comma immediately after
                # We want to include the comma in the deletion if we delete it
                end_index = i + 1
                if end_index < len(content) and content[end_index] == ',':
                    end_index += 1
                
                # Check content for history
                entry_content = content[start_index:end_index]
                has_history = "history:" in entry_content
                
                entries.append({
                    'key': key,
                    'start': start_index,
                    'end': end_index,
                    'content': entry_content,
                    'has_history': has_history
                })
                found_end = True
                break
        i += 1
    
    if not found_end:
        print(f"Warning: Could not find closing brace for {key}")

# 2. Group by key
key_map = {}
for e in entries:
    if e['key'] not in key_map:
        key_map[e['key']] = []
    key_map[e['key']].append(e)

# 3. Determine deletions
to_delete_ranges = []

for key, occurences in key_map.items():
    if len(occurences) > 1:
        # Strategy:
        # Prefer the one with history.
        # If multiple have history, keep the first one (original location).
        # If none have history, keep the first one.
        
        # Find index of winner
        winner_idx = -1
        
        # Check for history first
        for idx, occ in enumerate(occurences):
            if occ['has_history']:
                winner_idx = idx
                break # Found one with history, keep it (prioritize first occurrence with history)
        
        if winner_idx == -1:
            # None have history, keep the very first one
            winner_idx = 0
            
        print(f"Duplicate found for '{key}': {len(occurences)} times. Keeping occurrence #{winner_idx+1} (History: {occurences[winner_idx]['has_history']})")
        
        # Mark losers for deletion
        for idx, occ in enumerate(occurences):
            if idx != winner_idx:
                to_delete_ranges.append((occ['start'], occ['end']))

# 4. Apply deletions (sort reverse order to avoid index shifts)
to_delete_ranges.sort(key=lambda x: x[0], reverse=True)

new_content = list(content)
for start, end in to_delete_ranges:
    # Also remove preceding whitespace/newline if it leaves an empty line?
    # For now, just remove the object definition.
    # To be cleaner, we might want to check if the previous char is a newline and remove that too.
    
    # Safe delete of the range
    new_content[start:end] = []

final_content = "".join(new_content)

# Clean up potential double empty lines or comma artifacts? 
# JS tolerates extra newlines. The trailing comma logic handled above.

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"Removed {len(to_delete_ranges)} duplicate entries.")
