var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app
.use(bodyParser.urlencoded({ extended: false }))
.use('/getimage', express.static(__dirname + '/images')); // serve static files

app
.get('/', function (req, res) {
    res.sendFile('index.html');
})
.get('/heartbeat', (req, res) => {
    res.end('PingAi smartbot is healty, scalable and smart');
})
.post('/newperson', function (req, res) {
    console.log(req.body);
    var name = req.body.firstName + ' ' + req.body.lastName;

    res.send(name + ' Submitted Successfully 2!');
});

var server = app.listen(3000, function () {
    console.log('Node server is running.. 2');
});
