const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type' : 'application/json'});
  const rs = {
    url: req.url,
    type: req.method
  };
  res.write(JSON.stringify(rs));
  res.end();
}).listen(8888);