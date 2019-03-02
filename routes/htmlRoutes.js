const db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        // res.render("index");
        var count = db.Article.count();
        console.log(count);
        db.Article.find({}).sort({ date: -1}).then(function(dbArticles) {
            res.render("index", { dbArticles: dbArticles });
        });
    });
}
