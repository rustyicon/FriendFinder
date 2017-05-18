var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static('public'))

app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res){
	res.sendFile(path.join(__dirname, "survey.html"));
});

/*
app.post("/new", function(req, res){
	res.sendFile(path.join(__dirname, ""))
});
*/

app.listen(3000);



