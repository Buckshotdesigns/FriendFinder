
var friendList = require("../data/friends.js");
path = require("path");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendList);
      });
    
      app.post("/api/friends", function(req, res) {
        var info = (req.body);
        friendList.push(info);
      })

};