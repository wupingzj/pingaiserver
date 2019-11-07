import mongoose from "mongoose";

const url = "mongodb://localhost:27017";
mongoose.connect(url, { useNewUrlParser: true });

const db = mongoose.connection;
// tslint:disable-next-line: no-console
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
    // tslint:disable-next-line: no-console
    console.log("connected to mongodb");
});

const kittenSchema = new mongoose.Schema({
    name: String
});

kittenSchema.pre("save", function(next) {
    // tslint:disable-next-line: no-console
    console.log(`Using this: ${ name }`);
    next();
  });

kittenSchema.methods.speak = () => {
    const greeting = name
        ? "Meow, my name is " + name
        : "I have no name yet";

    // tslint:disable-next-line: no-console
    console.log(greeting);
};

const Kitten = mongoose.model("Kitten", kittenSchema);

const mm = new Kitten({
    name: "MengMeng"
});

mm.speak();

mm.save((err, mm) => {
    if (err) return console.error(err);
    mm.speak();
});

