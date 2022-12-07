const st = require('st');
const http = require('http');
const path = require('path');
const mount = st({ path: path.join(__dirname, '/docs'), url: '/' , index: 'index.html' });

http.createServer((req, res) => {
  const stHandled = mount(req, res);
  if (stHandled) {
    return;
  }
  res.end('this is not a static file');
}).listen(8080);
