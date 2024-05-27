const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.method === 'GET' && req.url === '/') {
    res.end('Good job');
  }
    else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found!');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
