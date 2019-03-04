# fmCommunity

### Overview

This project uses Mongoose and Cheerio to scrape the latest forum posts from the FileMaker community website and save the basic info (along with links to the original articles) to a responsive web application and Mongo Databse for users to then easily peruse and search through.

### Project Objectives

   1. Scrape Articles from a website of my choosing. I chose https://community.filemaker.com/community/discussions

   2. Save the articles to a No-SQL Database using Mongo DB and Mongoose

   3. Allow users to add notes to an article, as well as have the option to delete such notes, update or add to these notes or even delete the entire article itself.

### Technology Used

   * [Node.js](https://nodejs.org/en/) - for Javascript based server code and logic
   * [Express](https://expressjs.com/) - companion Web Framework for node.js
   * [Express-handlebars](https://www.npmjs.com/package/express-handlebars) - A handlebars express engine for node.js. Also see the Handlebarsjs documentation [here](https://handlebarsjs.com/).
   * [MongoDB](https://docs.mongodb.com/manual/) - An open-source no-SQL database for collecting and storing data.
   * [Mongoose](http://mongoosejs.com/docs/api.html) - A tool to provide some structure to MongoDB that works well with Node.js
   * [Cheerio](https://github.com/cheeriojs/cheerio) - A fantastic Javascript website scraping and parsing tool!
   * [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for node.js used for making GET requests.
   * [jQuery](https://jquery.com/) - for a few Javascript shortcuts like data selectors and parsing.
   * [bootstrap css](https://getbootstrap.com/) - for a responsive front-end framwork and styling library.
   * [Heroku](https://www.heroku.com/) - for app deployment and hosting
   * Custom Javascript, HTML, and CSS - for everything else!

---
