var path = require("path");
var friendList = require('../data/friends.js');

module.exports = function(app) {

    app.get("/api/survey", function(req, res) {
        res.json();
      });
    
      app.post("/api/friends", function(req, res) {
        res.json(friendList);
      });

};