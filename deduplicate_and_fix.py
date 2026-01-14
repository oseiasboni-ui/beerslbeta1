import re
import json

def clean_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the variable name
    var_match = re.search(r'export const (\w+) = \{', content)
    if not var_match:
        print(f"Could not find export object in {file_path}")
        return

    var_name = var_match.group(1)
    
    # regex to find all key-value pairs
    # This is a simple parser, might need adjustment if values contain escaped quotes
    # But for this file structure it's likely sufficient
    matches = re.findall(r'"([^"]+)":\s*"([^"]+)"', content)
    
    data = {}
    duplicates = []
    
    for key, value in matches:
        if key in data:
            duplicates.append(key)
            # Keep the longest description
            if len(value) > len(data[key]):
                data[key] = value
        else:
            data[key] = value
            
    if duplicates:
        print(f"Found {len(duplicates)} duplicates in {file_path}: {duplicates}")
        
        # Reconstruct file content
        new_content = f"export const {var_name} = {{\n"
        
        # Sort keys to maintain some order, or just iterate existing keys?
        # Let's keep keys in typical JSON order (insertion order in python 3.7+)
        # We need to preserve the keys that were kept.
        
        keys = list(data.keys())
        for i, key in enumerate(keys):
            comma = "," if i < len(keys) - 1 else ""
            new_content += f'    "{key}": "{data[key]}"{comma}\n'
            
        new_content += "};\n"
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed {file_path}")
    else:
        print(f"No duplicates found in {file_path}")

clean_file('js/data/beer-histories-en.js')
clean_file('js/data/beer-histories-de.js')
