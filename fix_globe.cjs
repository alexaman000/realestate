const fs = require('fs');
let code = fs.readFileSync('src/components/ui/3d-globe.tsx', 'utf8');
code = code.replace(/\\`/g, '`').replace(/\\\$/g, '$');
fs.writeFileSync('src/components/ui/3d-globe.tsx', code);
