import re
import json

def get_keys(file_path):
    keys = set()
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            matches = re.findall(r'"([^"]+)":\s*"', content)
            keys.update(matches)
    except FileNotFoundError:
        pass
    return keys

def get_en_data(file_path):
    data = {}
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # This regex captures "Key": "Value"
            # It handles escaped quotes inside value roughly
            matches = re.finditer(r'"([^"]+)":\s*"((?:[^"\\]|\\.)*)"', content)
            for m in matches:
                data[m.group(1)] = m.group(2)
    except FileNotFoundError:
        pass
    return data

en_data = get_en_data('js/data/beer-histories-en.js')
de_keys = get_keys('js/data/beer-histories-de.js')

missing_keys = [k for k in en_data.keys() if k not in de_keys]

# Take batch of 20
batch = missing_keys[:20]

print(json.dumps({k: en_data[k] for k in batch}, indent=2))
