const fs = require('fs');

const progPath = 'app/programmes/page.tsx';
const impactPath = 'app/impact/page.tsx';

let progContent = fs.readFileSync(progPath, 'utf8');
const impactContent = fs.readFileSync(impactPath, 'utf8');

// Update imports in programmes
if (!progContent.includes('ImpactChart')) {
  progContent = progContent.replace(
    'import { ArrowRight } from "lucide-react";',
    'import { ArrowRight, MapPin, Download, CheckCircle2 } from "lucide-react";\nimport { ImpactChart } from "@/components/impact/ImpactChart";'
  );
}

// Extract the 3 sections from impact page
// The first section starts with `<section className="bg-surface py-20 lg:py-32">`
const startIndex = impactContent.indexOf('<section className="bg-surface py-20 lg:py-32">');
const endIndex = impactContent.lastIndexOf('</section>') + '</section>'.length;

if (startIndex !== -1 && endIndex !== -1) {
  let sectionsHtml = impactContent.substring(startIndex, endIndex);
  
  // Replace the first section's opening tag to add id="impact" and border
  sectionsHtml = sectionsHtml.replace(
    '<section className="bg-surface py-20 lg:py-32">',
    '<section id="impact" className="bg-surface py-20 lg:py-32 border-t border-border">'
  );
  
  // Find the insertion point in programmes page (before </> )
  const insertIndex = progContent.lastIndexOf('</section>') + '</section>'.length;
  
  const beforeInsert = progContent.substring(0, insertIndex);
  const afterInsert = progContent.substring(insertIndex);
  
  progContent = beforeInsert + '\n\n      {/* --- SECTION IMPACT FUSIONNÉE --- */}\n      ' + sectionsHtml + afterInsert;
  
  fs.writeFileSync(progPath, progContent);
  console.log("Merge successful");
} else {
  console.log("Could not find sections");
}
