const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test", { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
    //we're connected!
    //We first need to DEFINE a SCHEMA
    var kittySchema = new mongoose.Schema({
        name: String
    });

    //METHODS must be added to the schema BEFORE compiling it with Mongoose
    kittySchema.methods.speak = function() {
        var greeting = this.name
        ? "Meow name is " + this.name
        : "I don't have a name";
        console.log(greeting);
    }

    //Now we need to COMPILE our schema into a MODEL
    var Kitten = mongoose.model("Kitten", kittySchema);

    //Now we construct a DOCUMENT for each entity record
    // Each document will have it's own documents and behaviors as declared in our schema
    var silence = new Kitten({ name: "Silence"});
    console.log(silence.name);

    var fluffy = new Kitten({ name: "Fluffy" });
    //now we call our speak method
    fluffy.speak();
    
    //To SAVE to MongoDB.
    // silence.save(function (err, fluffy) {
    //     if (err) return console.error(err);
    //     fluffy.speak();
    // });

    //Now FIND all the Kitten documents using our Kitten Model
    //NOTE this will not work immediately after saving records. In testing a refresh was needed...
    Kitten.find(function (err, kittens) {
        if (err) return console.error(err);
        console.log(kittens);
    });

});