const fs = require('fs');
fs.mkdirSync('public/rapports', { recursive: true });
fs.copyFileSync('../Rapports APOSP/2021 RAPPORT_104211.pdf', 'public/rapports/rapport-2021.pdf');
fs.copyFileSync('../Rapports APOSP/2022 RAPPORT_104517.pdf', 'public/rapports/rapport-2022.pdf');
fs.copyFileSync('../Rapports APOSP/2023 RAPPORT_104732.pdf', 'public/rapports/rapport-2023.pdf');
fs.copyFileSync('../Rapports APOSP/APOSP_RAPPORT D\'ACTIVITES 2024_VERSION DEFINITIVE_110956.pdf', 'public/rapports/rapport-2024.pdf');
console.log('Copies done');
