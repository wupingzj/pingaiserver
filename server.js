// https://socket.io/get-started/chat/

var app = require('express')();
var http = require('http').createServer(app);

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/resource/index.html');
}).get('/heartbeat', (req, res) => {
  // res.send('<h1>Hello world</h1>');
  // res.status(401).end();
  res.end(`The server is healthy, fast and even-driven`);
});

http.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
