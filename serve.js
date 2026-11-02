const http = require('http');
const fs = require('fs');
const path = require('path');
const root = __dirname;
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.md':'text/markdown; charset=utf-8'};
http.createServer((req,res)=>{
  let pathname = decodeURIComponent((req.url || '/').split('?')[0]);
  if(pathname === '/') pathname = '/index.html';
  const file = path.normalize(path.join(root, pathname));
  if(!file.startsWith(root)){res.writeHead(403);return res.end('Forbidden');}
  fs.readFile(file,(err,data)=>{
    if(err){res.writeHead(404,{'Content-Type':'text/plain'});return res.end('File not found');}
    res.writeHead(200,{'Content-Type':types[path.extname(file)] || 'application/octet-stream'});
    res.end(data);
  });
}).listen(3000,()=>console.log('Library Management System running at http://localhost:3000'));
