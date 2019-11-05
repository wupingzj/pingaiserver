import express from "express";
var bodyParser = require("body-parser");
const mongo = require("connect-mongo");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
var bodyParser = require("body-parser");
const session = require("express-session");
const secrets = require("./utils/secrets");

const MongoStore = mongo(session);

// Controllers (route handlers)
// import * as homeController from "./controllers/intent";
// Controllers (route handlers)
const intentController = require("./controllers/intent");

const app = express();

// Connect to MongoDB
const mongoUrl = secrets.MONGODB_URI;
// mongoose.Promise = bluebird;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true } ).then(
    () => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ },
).catch(err => {
    console.log("MongoDB connection error. Please make sure MongoDB is running. " + err);
    // process.exit();
});


app
// .use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())
.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secrets.SESSION_SECRET,
    store: new MongoStore({
        url: mongoUrl,
        autoReconnect: true
    })
}))
.use("/images", express.static(__dirname + "/images")); // serve static files

app
.get("/", function (req, res) {
    console.log("**** a user connected");
    res.send("home page");
})
.get("/intent", intentController.getIntent)
.get("/heartbeat", (req, res) => {
    res.end("PingAi smartbot is healty, scalable and smart");
})
.post("/newperson", function (req, res) {
    console.log(req.body);
    const name = req.body.firstName + " " + req.body.lastName;

    res.send(name + " Submitted Successfully 2!");
});

const server = app.listen(3000, function () {
    console.log("Node server is running.. 2");
});
