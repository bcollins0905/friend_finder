
// var path = require('path');

var friends = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  //  console.log(req)
  });

  app.post("/api/friends", function(req, res) {

    var userInput = req.body;

    var userResponses = userInput.scores

    var matchName = "";

    var matchImage = "";

    var toatlDifference = 10000;
    console.log(req.body.scores)

    var diffArr = [];

    for (var i = 0; i < friends.length; i++) {
      
        var diff = 0


        for (var j = 0; j < friends[i].scores.length; j++) {
          //console.log("friends"+friends[i].scores[j])
          //console.log("userResponses"+req.body.scores[j])
              diff = diff + Math.abs(parseInt(friends[i].scores[j] - parseInt(req.body.scores[j])));
            }
            
            diffArr.push(diff);
      }

    var smallestdiff = diffArr.indexOf(Math.min.apply(null, diffArr))
    friends.push(req.body);

    console.log({ name: friends[smallestdiff].name, photo: friends[smallestdiff].photo})

    res.json({ name: friends[smallestdiff].name, photo: friends[smallestdiff].photo });

  });

}
            