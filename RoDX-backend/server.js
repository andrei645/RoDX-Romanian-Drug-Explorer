const http = require('http');
const {Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.development' });

const pgConfig = {
  user: process.env.USER || '',
  host: process.env.HOST || '',
  database: process.env.DATABASE || '',
  password: process.env.PASSWORD || '',
  port: process.env.PORT || '',
};

const client = new Client(pgConfig);

client.connect()
  .then(() => console.log('Connected.'))
  .catch(err => console.error('Connection error', err.stack));

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.method === 'GET' && req.url === '/') {
    res.end('Connected successfully!');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found!');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
