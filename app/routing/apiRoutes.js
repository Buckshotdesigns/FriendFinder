var path = require("path");

module.exports = function(app) {

    app.get("/api/survey", function(req, res) {
        res.json();
      });
    
      app.post("/api/friends", function(req, res) {
        res.json();
      });

};