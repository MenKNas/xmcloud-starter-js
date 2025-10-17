const fs = require('fs');
const path = require('path');

const importMapPath = path.join(__dirname, '..', '.sitecore', 'import-map.ts');

try {
  // Read the current content
  let content = fs.readFileSync(importMapPath, 'utf8');
  
  // Check if 'use client' is already present
  if (!content.includes("'use client'")) {
    // Add 'use client' directive at the top
    content = "'use client';\n\n" + content;
    
    // Write the modified content back
    fs.writeFileSync(importMapPath, content, 'utf8');
    
    console.log('✅ Fixed import-map.ts by adding "use client" directive');
  } else {
    console.log('✅ import-map.ts already has "use client" directive');
  }
} catch (error) {
  console.error('❌ Error fixing import-map.ts:', error.message);
  process.exit(1);
}
