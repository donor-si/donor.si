const st = require('st');
const http = require('http');
const path = require('path');
const mount = st({ path: path.join(__dirname, '/build'), url: '/' , index: 'index.html' });

http.createServer((req, res) => {
  // Add security headers
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;");
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  const stHandled = mount(req, res);
  if (stHandled) {
    return;
  }
  res.end('this is not a static file');
}).listen(8080);
