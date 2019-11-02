const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
var count1 = 0;
var count2 = 0;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  count1++;
  res.end(`${count1}.another server`);
});

server.listen(port, hostname, () => {
    count1++;
  console.log(`${count1}.Server running at http://${hostname}:${port}/`);
});


const server2 = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    count2++;
    res.end(`${count2}.another server`);
});
server2.listen(3001, 'localhost', () => {
    console.log(`Another server running at http://${hostname}:30001`);
});

console.log('started two servers');
