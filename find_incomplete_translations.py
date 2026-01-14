import re
import json

def load_js_object(file_path, var_name):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    data = {}
    if 'beerParentCompanies' in var_name:
        pattern = r'"([^"]+)":\s*\{[^}]*history:\s*"([^"]+)"'
        matches = re.findall(pattern, content)
        for key, history in matches:
            data[key] = history
    else:
        pattern = r'"([^"]+)":\s*"([^"]+)"'
        matches = re.findall(pattern, content)
        for key, value in matches:
            data[key] = value
    return data

pt_data = load_js_object('js/data/beer-parent-companies.js', 'beerParentCompanies')
en_data = load_js_object('js/data/beer-histories-en.js', 'beerHistoriesEn')

incomplete_candidates = []

for key, pt_hist in pt_data.items():
    if key in en_data:
        en_hist = en_data[key]
        # Heuristic: If PT is > 50% longer than EN, it might be incomplete/summarized
        if len(pt_hist) > len(en_hist) * 1.5:
            diff = len(pt_hist) - len(en_hist)
            incomplete_candidates.append({
                'key': key,
                'pt': pt_hist,
                'en': en_hist,
                'diff': diff
            })

# Sort by length difference descending
incomplete_candidates.sort(key=lambda x: x['diff'], reverse=True)

print(f"Total candidates likely incomplete: {len(incomplete_candidates)}")
print("\n--- Top 20 Candidates for Re-Translation ---")

batch = incomplete_candidates[:20]
batch_keys = [item['key'] for item in batch]

print(json.dumps(batch, indent=2, ensure_ascii=False))

# Save keys for next step
with open('batch_incomplete_keys.json', 'w') as f:
    json.dump(batch_keys, f)
