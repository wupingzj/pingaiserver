var MongoClient = require('mongodb').MongoClient;


// {useUnifiedTopology: true}
MongoClient.connect("mongodb://localhost:27017/smartbot", (err, database) => {
    var db = database.db("smartbot");
    // var collection = new Mongo.Collection("intent");
    console.log("I am in");
    db.collection('intent', { useUnifiedTopology: true }, function (err, collection) {

        collection.insert({ id: 1, name: 'DomesticInternation', data: {} });
        collection.insert({ id: 2, name: 'CabinType', data: { CabinType: "First Class" } });
        collection.insert({ id: 3, name: 'QFFTier', data: { Tier: "Gold" } });

        db.collection('intent').count(function (err, count) {
            if (err) throw err;

            console.log('Total Rows: ' + count);
        });
    });
});