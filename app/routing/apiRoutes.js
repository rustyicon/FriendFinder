var friendsData = require("../data/friends");

module.exports = function (app){

	
	app.get("/api/friends", function (req, res){
		res.json(friendsData);
	});

	
	app.post("/api/friends", function(req, res){
		var newFriend = req.body;
		var match;
		var matchF = 0;
		var val = 0;
		var index;

		for (var i = 0; i < friendsData.length; i++) {
			for (var x = 0; i < friendsData[i]scores.length; x++) {
			 matched += Math.abs(parseInt(newFriend.scores[i] - parseInt(friendsData[i].score)));
			}
		}

		friendsData.push(req.body);
		res.json(friendsData[i])

	});

}

