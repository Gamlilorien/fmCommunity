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
// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/fmCommunity";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

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

  
  
  // Start the server
  app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });