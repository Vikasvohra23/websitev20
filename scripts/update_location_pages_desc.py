import re
from pathlib import Path

path = Path('src/data/locationPages.js')
text = path.read_text(encoding='utf-8')
pattern = re.compile(r'(?P<indent>\s+)"(?P<slug>[^"]+)": \{\n(?P<inner>.+?)\n(?P=indent)\},', re.S)

def make_desc(name):
    if name == 'Delhi NCR':
        return (
            'Household shifting, office shifting and industrial machinery relocation services across Delhi NCR. '
            'Expert packing, rigging, CNC/CMM machine shifting, hydraulic jacking and precision transport for homes, offices and factories. '
            'ISO 9001:2015 certified.'
        )
    return (
        f'Household shifting, office shifting and industrial relocation services in {name}. '
        'Expert packing, rigging, CNC/CMM machine shifting, hydraulic jacking and precision transport for homes, offices and factories. '
        'ISO 9001:2015 certified.'
    )

changed = False

def replace_block(match):
    global changed
    indent = match.group('indent')
    slug = match.group('slug')
    inner = match.group('inner')
    name_match = re.search(r'name:\s*"([^"]+)"', inner)
    if not name_match:
        return match.group(0)
    name = name_match.group(1)
    new_meta = make_desc(name)
    new_inner = re.sub(r'metaDesc:\s*"[^"]*"', f'metaDesc: "{new_meta}"', inner)
    if new_inner != inner:
        changed = True
    return f'{indent}"{slug}": {{\n{new_inner}\n{indent}}},'

new_text = pattern.sub(replace_block, text)
if changed:
    path.write_text(new_text, encoding='utf-8')
    print('Updated metaDesc for locationPages.js')
else:
    print('No changes made')
