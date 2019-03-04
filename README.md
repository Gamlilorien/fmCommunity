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

### Submission on BCS

* **This assignment must be deployed.** * Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!

## Instructions

* Create an app that accomplishes the following:

  1. Whenever a user visits your site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to your application database. At a minimum, the app should scrape and display the following information for each article:

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

     * Feel free to add more content to your database (photos, bylines, and so on).

  2. Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.

* Beyond these requirements, be creative and have fun with this!

### Tips

* Go back to Saturday's activities if you need a refresher on how to partner one model with another.

* Whenever you scrape a site for stories, make sure an article isn't already represented in your database before saving it; Do not save any duplicate entries.

* Don't just clear out your database and populate it with scraped articles whenever a user accesses your site.

  * If your app deletes stories every time someone visits, your users won't be able to see any comments except the ones that they post.

### Reminder: Submission on BCS

* Please submit both the deployed Heroku link to your homework AND the link to the Github Repository!

---

### Minimum Requirements

* **This assignment must be deployed.** Attempt to complete homework assignment as described in instructions. If unable to complete certain portions, please pseudocode these portions to describe what remains to be completed. Hosting on Heroku and adding a README.md are required for this homework. In addition, add this homework to your portfolio, more information can be found below.

---

### Add To Your Portfolio

After completing the homework please add the piece to your portfolio. Make sure to add a link to your updated portfolio in the comments section of your homework so the TAs can easily ensure you completed this step when they are grading the assignment. To receive an 'A' on any assignment, you must link to it from your portfolio.
