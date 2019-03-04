const db = require("../models");
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = function(app) {
    app.get("/scrape", function(req, res) {
        // First, we grab the body of the html with axios
        axios.get("https://community.filemaker.com/community/discussions").then(function(response) {
          // Then, we load that into cheerio and save it to $ for a shorthand selector
          var $ = cheerio.load(response.data);
      
          // Now, we grab every h2 within an article tag, and do the following:
          $("div.j-act-init").each(function(i, element) {
            // Save an empty result object
            var result = {};
      
            // Add the text and href of every link, and save them as properties of the result object
            //.children() DOESN'T work since what we are looking for is more than one level below our element selection
            //Use .find() instead
            //See: https://api.jquery.com/children/
            result.title = $(this)
              .find("a.title")
              .text();
            result.slug = $(this)
              .find("span.j-excerpt-slug")
              .text();
            link = $(this)
              .find("a.title")
              .attr("href");
            //links need the root https://community.filemaker.com/ 
            result.link = "https://community.filemaker.com" + link;
      
            // Create a new Article using the `result` object built from scraping
            db.Article.create(result)
              .then(function(dbArticle) {
                // View the added result in the console
                //console.log(dbArticle);
              })
              .catch(function(err) {
                // If an error occurred, log it
                console.log(err);
              });
          });
      
          // Send a message to the client
          //res.send("Scrape Complete");
          res.render("scrape");
        
        });
      });

    app.get("/api", function(req, res) {
        // Grab every document in the Articles collection
        db.Article.find({})
          .then(function(dbArticle) {
            // If we were able to successfully find Articles, send them back to the client
            res.json(dbArticle);
          })
          .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
          });
      });

      app.delete("/post/:id", function(req, res) {
        db.Article.findByIdAndRemove(req.params.id)
        .then(dbArticle => res.json(dbArticle))
        .catch(err => res.json(err))
      });


      // Route for grabbing a specific Article by id, populate it with it's note
      app.get("/post/:id", function(req, res) {
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
      app.post("/post/:id", function(req, res) {
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


}