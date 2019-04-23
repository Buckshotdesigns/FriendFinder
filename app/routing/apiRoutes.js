
var friendList = require("../data/friends.js");
path = require("path");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendList);
      });
    
      app.post("/api/friends", function(req, res) {
        var scoresArray = [];
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: scoresArray
        };
        for (i = 0; i < req.body.scores.length; i++) {
            scoresArray.push(parseInt(req.body.scores[i]))
        }
        friendList.push(newFriend);
      })

};