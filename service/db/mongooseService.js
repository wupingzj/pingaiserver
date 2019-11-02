
// elegant mongodb object modeling for node.js
// https://mongoosejs.com/docs/index.html
const mongoose = require('mongoose');

var db = mongoose.connection;
db
.on('error', console.error.bind(console, 'connection error'))
.once('open', function() {
  console.log('mongo database is connected.')
});

mongoose.connect('mongodb://localhost:27017/smartbot', {useNewUrlParser: true});

// it automatically create intents collection
const Intent = mongoose.model('intent', { name: String });
const clubIntent = new Intent({ name: 'ClubMembership' });
clubIntent.save().then(() => console.log('successfully saved club intent'));

const Response = mongoose.model('response', { name: String });
const allGoodResponse = new Response({ name: 'all good' });
allGoodResponse.save().then(() => console.log('successfully saved AllGood response'));
