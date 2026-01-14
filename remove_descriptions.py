import re

file_path = '/Users/oseiassilvadossantos/Desktop/beersl/js/data/beer-parent-companies.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern to remove 'description: "...", ' or ', description: "..."'
# Case 1: description followed by comma
# We match description: "...", (including possible whitespace)
# We need to be careful about escaped quotes inside the string if any, though the file seems simple.
# The regex "[^"]*" handles non-quote characters. If there are escaped quotes it might fail, 
# but looking at the file, the descriptions seem to use simple quotes. 
# Safe pattern assuming no escaped double quotes inside the value (which seems true for this file).
# If there are escaped quotes, we'd need a more complex regex.
# Let's check the file content history... detailed descriptions might have quotes?
# Step 1049: "Bud Light": ... description: "O lançamento ocorreu ... \"Budweiser Light\". ..."
# Yes, there are escaped quotes! e.g. \"Budweiser Light\".
# So we need a regex that handles escaped quotes.
# Pattern: " ( [^"\\]* (?: \\. [^"\\]* )* ) "

string_pattern = r'"(?:[^"\\]|\\.)*"'
# Pattern: remove `description: <string_pattern>,` (with trailing comma)
# OR `description: <string_pattern>` (if at end)
# OR `, description: <string_pattern>` (if preceded by comma)

# Strategy: Replace key-value pair.
# We will look for `description: <string>` and remove it along with surrounding punctuation to keep JSON valid.

# Regex for the key-value pair:
# description\s*:\s*"(?:[^"\\]|\\.)*"

pattern_key_value = r'description\s*:\s*"(?:[^"\\]|\\.)*"'

# We prefer to remove the trailing comma if present, or the leading comma if it's the last item (though less likely here).
# Actually, simply removing `description: "...",` is the most common case.
# Let's try to remove `description: "...",` first.
# Then `description: "..."` (which might leave a double comma somewhere, but JS objects allow trailing commas often, or we fix double commas).

subbed_content = re.sub(r'description\s*:\s*"(?:[^"\\]|\\.)*",\s*', '', content) # Remove with trailing comma
subbed_content = re.sub(r',\s*description\s*:\s*"(?:[^"\\]|\\.)*"', '', subbed_content) # Remove with leading comma (if it was last item)
subbed_content = re.sub(r'description\s*:\s*"(?:[^"\\]|\\.)*"', '', subbed_content) # Remaining cases

# Clean up any potential double commas logic not covered or empty lines?
# The regexes above handle the comma associated with the field.

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(subbed_content)

print("Finished removing description fields.")
