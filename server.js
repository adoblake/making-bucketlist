import http from 'node:http';
import { readFile } from 'node:fs/promises';
const assets = {'/':['index.html','text/html'], '/app.js':['app.js','text/javascript'], '/styles.css':['styles.css','text/css']};
const server = http.createServer(async (req,res) => {
  const asset = assets[new URL(req.url,'http://localhost').pathname];
  if (!asset) {res.writeHead(404);res.end('Not found');return;}
  try {const data=await readFile(new URL(`./public/${asset[0]}`,import.meta.url));res.writeHead(200,{'Content-Type':`${asset[1]}; charset=utf-8`,'X-Content-Type-Options':'nosniff'});res.end(data);}
  catch {res.writeHead(500);res.end('Unable to load application');}
});
server.listen(Number(process.env.PORT || 3000),'0.0.0.0',()=>console.log('BucketList listening on port '+(process.env.PORT || 3000)));
