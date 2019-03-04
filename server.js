const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
//These may not be necessary here as they will only be called in the Routes files
const axios = require("axios");
const cheerio = require("cheerio");

//Initialize Express
const app = express();

//Models
const db = require("./models");

const PORT = process.env.PORT || 3000;

//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Set public folder as root directory of app
app.use(express.static("public"));

//Connect to Mongo DB
//NOTE: You can name you Mongo Databse whatever you want, I simply choose to name it "fmCommunity"
mongoose.connect("mongodb://localhost/fmCommunity", { useNewUrlParser: true });

//Routes
//By saving these as seperate modules, our server.js file is kept smaller and a little tidier
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Handlebars
//This allows us to declare Handlebars as our VIEW ENGINE, and sets the default layout to 'main'
app.engine (
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

  
  // Route for grabbing a specific Article by id, populate it with it's note
  app.get("/articles/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Article.findOne({ _id: req.params.id })
      // ..and populate all of the notes associated with it
      .populate("note")
      .then(function(dbArticle) {
        // If we were able to successfully find an Article with the given id, send it back to the client
        console.log(dbArticle);
        //res.render(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
  
  // Route for saving/updating an Article's associated Note
  app.post("/articles/:id", function(req, res) {
    // Create a new note and pass the req.body to the entry
    db.Note.create(req.body)
      .then(function(dbNote) {
        // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
        // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
        // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
      })
      .then(function(dbArticle) {
        // If we were able to successfully update an Article, send it back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
  
  // Start the server
  app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });