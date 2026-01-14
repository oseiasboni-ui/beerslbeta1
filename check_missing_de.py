import re

def get_keys(file_path):
    keys = set()
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Extract keys like "Brand Name":
            matches = re.findall(r'"([^"]+)":\s*"', content)
            keys.update(matches)
    except FileNotFoundError:
        print(f"File not found: {file_path}")
    return keys

def get_all_beers_with_history(file_path):
    keys = set()
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            # Crude regex to find beer entries with history
            # Looking for: "Brand": { ... history: "..." }
            # usage of regex for nested objects is hard, but let's try to match the beer name keys of the big object
            # format is '    "Brand Name": {'
            matches = re.findall(r'^\s*"([^"]+)":\s*{', content, re.MULTILINE)
            keys.update(matches)
    except FileNotFoundError:
        print(f"File not found: {file_path}")
    return keys

en_keys = get_keys('js/data/beer-histories-en.js')
de_keys = get_keys('js/data/beer-histories-de.js')
all_beers = get_all_beers_with_history('js/data/beer-parent-companies.js')

# If en_keys is empty (due to regex fail), alert me
if not en_keys:
    print("Warning: No EN keys found. Check regex.")

missing_de = all_beers - de_keys
# Also check if I missed any from EN file (assuming EN file is the gold standard for "translated")
missing_de_from_en = en_keys - de_keys

print(f"Total beers in source: {len(all_beers)}")
print(f"Total EN translations: {len(en_keys)}")
print(f"Total DE translations: {len(de_keys)}")
print(f"Missing DE translations (vs Source): {len(missing_de)}")
print(f"Missing DE translations (vs EN): {len(missing_de_from_en)}")

print("\nMissing items (Top 50 source):")
for k in list(missing_de)[:50]:
    print(k)
