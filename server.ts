var express = require('express');
var bodyParser = require('body-parser');
var mongo = require("connect-mongo");
var mongoose = require('mongoose');
var bluebird = require('bluebird');
var bodyParser = require("body-parser");
var session = require("express-session");

const MongoStore = mongo(session);

// Controllers (route handlers)
// import * as homeController from "./controllers/intent";

var app = express();
app
.use(bodyParser.urlencoded({ extended: false }))
.use('/getimage', express.static(__dirname + '/images')); // serve static files

app
.get('/', function (req, res) {
    console.log(`**** a user connected`);
    res.send('home page');
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
