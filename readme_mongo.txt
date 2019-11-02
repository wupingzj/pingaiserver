
*** mongodb ********
https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/
docker pull mongo:4.2
docker run -d -it -p 27017-27019:27017-27019 --name mongodb mongo:4.2

# attach to mongodb shell
docker exec -it mongodb bash

# launch mongodb shell client
mongo

# in mongodb shell client, show dbs
> show dbs
> use smartbot
> db
> db.createCollection("intent");
> db.intent.save({name: "welcome", confidenceLevel: 0.8})
> db.people.save({firstname: "John", lastname: "Smith"})

mongodb commands
http://www.dba86.com/docs/mongo/2.4/tutorial/getting-started-with-the-mongo-shell.html

show collections;
db.getCollectionNames();
show users;
db.getUsers();
show roles

db.intent.save({name: "welcome", confidenceLevel: 0.8})
db.intent.save({name: "departure city", confidenceLevel: 1})

db.intent.find();
db.intent.find().limit(10);
db.intent.find({"_id": ObjectId("someid")});
//
// Retrieve values of specific collection attributes by passing an object having 
// attribute names assigned to 1 or 0 based on whether that attribute value needs 
// to be included in the output or not, respectively.
//
db.intent.find({"_id": ObjectId("someid")}, {field1: 1, field2: 1});
db.intent.find({"_id": ObjectId("someid")}, {field1: 0}); // Exclude field1
db.intent.count();