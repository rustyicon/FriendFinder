var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static('public'));	



/*
app.post("/new", function(req, res){
	res.sendFile(path.join(__dirname, ""))
});
*/

app.listen(3000, function (){
	console.log("listening on port: " + 3000);
});
