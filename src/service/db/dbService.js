const MongoClient = require("mongodb").MongoClient;
const dbName = "smartbot";
const intentCollection = "intent";

// {useUnifiedTopology: true}
MongoClient.connect("mongodb://localhost:27017", (err, client) => {
    const db = client.db(dbName);
    db.collection(intentCollection, { useUnifiedTopology: true }, function (err, collection) {

        // node:90429) DeprecationWarning: collection.insert is deprecated. Use insertOne, insertMany or bulkWrite instead.
        // (node:90429) DeprecationWarning: collection.count is deprecated, and will be removed in a future version. Use Collection.countDocuments or Collection.estimatedDocumentCount instead

        collection.insert({ id: 1, name: "DomesticInternation", data: {} });
        collection.insert({ id: 2, name: "CabinType", data: { CabinType: "First Class" } });
        collection.insert({ id: 3, name: "QFFTier", data: { Tier: "Gold" } });

        db.collection("intent").count(function (err, count) {
            if (err) throw err;

            console.log("Total Rows: " + count);
        });
    });
});


MongoClient.connect("mongodb://localhost:27017/", function (err, client) {
    const db = client.db(dbName);
    db.collection(intentCollection, function (err, collection) {

        collection.update({ id: 1 }, { $set: { firstName: "James", lastName: "Gosling" } }, { w: 1 },
            function (err, result) {
                if (err) throw err;
                console.log("Document Updated Successfully");
            });

        collection.remove({ id: 2 }, { w: 1 }, function (err, result) {

            if (err) throw err;

            console.log("Document Removed Successfully");
        });

        collection.find().toArray(function (err, items) {
            if (err) throw err;
            console.log(items);
        });

    });

});