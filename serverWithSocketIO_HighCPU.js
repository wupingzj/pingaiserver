// https://socket.io/get-started/chat/

var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
// var io      = require('socket.io').listen(server);

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  console.log(`**** a user connected`);
  res.sendFile(__dirname + '/resource/indexWithSocketIO_HighCPU.html');
}).get('/heartbeat', (req, res) => {
  // res.status(401).end();
  res.send(`The server is healthy, fast and even-driven`);
});

io.on('connection', function (socket) {
  socket.on('chat message', function (msg) {
    // console.log('message ' + msg);
    io.emit('chat message', msg);
  });
});

let server = http.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
