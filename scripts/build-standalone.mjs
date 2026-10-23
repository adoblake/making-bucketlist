import {readFile,writeFile} from 'node:fs/promises';
let html=await readFile(new URL('../public/index.html',import.meta.url),'utf8');
const css=await readFile(new URL('../public/styles.css',import.meta.url),'utf8');
const domain=(await readFile(new URL('../public/domain.js',import.meta.url),'utf8')).replace(/^export /gm,'');
const app=(await readFile(new URL('../public/app.js',import.meta.url),'utf8')).replace(/^import .*?;\n/,'');
html=html.replace('<link rel="stylesheet" href="/styles.css">','<style>'+css+'</style>').replace('<script type="module" src="/app.js"></script>','').replace('</body>','<script>'+domain+'\n'+app+'</script></body>');
await writeFile(new URL('../BucketList.html',import.meta.url),html);
console.log('Built BucketList.html: standalone app with embedded styles and scripts. Google Maps requires Internet.');
