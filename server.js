// https://socket.io/get-started/chat/

var app = require('express')();
var http = require('http').createServer(app);

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  console.log(`**** a user connected`);
  // this file requires Socket.io, high CPU utilisation
  //res.sendFile(__dirname + '/resource/indexWithSocketIO_HighCPU.html'); 
  res.sendFile(__dirname + '/resource/index.html');
}).get('/heartbeat', (req, res) => {
  // res.status(401).end();  
  res.send(`The server is healthy, fast and even-driven`);
}).get('/test1', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify({ message: "Hello World"}));

  res.end();
  // res.send(`The 222server is healthy, fast and even-driven`);
});

http.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
