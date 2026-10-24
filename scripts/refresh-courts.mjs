import {execFileSync} from 'node:child_process';
import {writeFile} from 'node:fs/promises';import {fetchPhoenixDirectory} from '../public/city-data.js';
if((process.env.HTTPS_PROXY||process.env.HTTP_PROXY)&&process.allowedNodeEnvironmentFlags.has('--use-env-proxy')&&!process.execArgv.includes('--use-env-proxy')){execFileSync(process.execPath,['--use-env-proxy',...process.argv.slice(1)],{stdio:'inherit',env:process.env});process.exit(0);}
const result=await fetchPhoenixDirectory(fetch,AbortSignal.timeout(45000));
await writeFile(new URL('../public/data/phoenix-courts.js',import.meta.url),'// Retrieved from the City of Phoenix Parks and Recreation public GIS.\nexport const phoenixDirectory='+JSON.stringify(result,null,2)+';\n');
console.log(`Saved ${result.parks.length} basketball locations from ${result.courtRecords} official court records (${result.checkedAt}).`);
