const db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        // res.render("index");
        db.Article.findAll({}).then(function(dbArticles) {
            res.render("index", { dbArticles: dbArticles });
        });
    });
}
