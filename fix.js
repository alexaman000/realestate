const fs = require('fs');
const path = require('path');

const srcDir = './src';
const componentsDir = './src/components';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/import React from 'react';\r?\n/g, '');
  content = content.replace(/import React, \{ /g, 'import { ');
  
  if (filePath.includes('ContactFooter.tsx')) {
    content = content.replace(/Mail, /g, '');
    content = content.replace(/Globe, /g, '');
  }
  
  fs.writeFileSync(filePath, content);
}

fs.readdirSync(componentsDir).forEach(file => {
  if (file.endsWith('.tsx')) {
    fixFile(path.join(componentsDir, file));
  }
});
fixFile(path.join(srcDir, 'App.tsx'));
