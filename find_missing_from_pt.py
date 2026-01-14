import re
import json

def load_js_object(file_path, var_name):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex to find keys and history values
    # For beer-parent-companies.js: "Key": { ... history: "Value" ... }
    # For beer-histories-en.js: "Key": "Value"
    
    data = {}
    
    if 'beerParentCompanies' in var_name:
        # Regex for parsing the complex object structure in beer-parent-companies.js
        # Look for "Key": { ... history: "Value"
        # This is a bit fragile but should work for the file format seen
        pattern = r'"([^"]+)":\s*\{[^}]*history:\s*"([^"]+)"'
        matches = re.findall(pattern, content)
        for key, history in matches:
            data[key] = history
    else:
        # Simple Key-Value for histories files
        pattern = r'"([^"]+)":\s*"([^"]+)"'
        matches = re.findall(pattern, content)
        for key, value in matches:
            data[key] = value
            
    return data

pt_data = load_js_object('js/data/beer-parent-companies.js', 'beerParentCompanies')
en_data = load_js_object('js/data/beer-histories-en.js', 'beerHistoriesEn')
de_data = load_js_object('js/data/beer-histories-de.js', 'beerHistoriesDe')

missing_in_en = [k for k in pt_data.keys() if k not in en_data]
missing_in_de = [k for k in pt_data.keys() if k not in de_data]

print(f"Total items in PT source: {len(pt_data)}")
print(f"Missing in EN: {len(missing_in_en)}")
print(f"Missing in DE: {len(missing_in_de)}")

print("\n--- Missing in DE (from PT source) ---")
for k in missing_in_de:
    print(k)

print("\n--- Next Batch of 20 Missing in EN ---")
batch = missing_in_en[:20]
batch_data = {k: pt_data[k] for k in batch}
print(json.dumps(batch_data, indent=2, ensure_ascii=False))

