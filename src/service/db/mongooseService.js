
import mongoose from "mongoose";
// elegant mongodb object modeling for node.js
// https://mongoosejs.com/docs/index.html


const connection = mongoose.connection;
const connect = mongoose.connect;
const model = mongoose.model;

const db = connection;
db
.on("error", console.error.bind(console, "connection error"))
.once("open", function() {
  console.log("mongo database is connected.");
});

connect("mongodb://localhost:27017/smartbot", {useNewUrlParser: true});

// it automatically create intents collection
const Intent = model("intent", { name: String });
const clubIntent = new Intent({ name: "ClubMembership" });
clubIntent.save().then(() => console.log("successfully saved club intent"));

const Response = model("response", { name: String });
const allGoodResponse = new Response({ name: "all good" });
allGoodResponse.save().then(() => console.log("successfully saved AllGood response"));
