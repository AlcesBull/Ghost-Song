//Testing out a new method for building Slackbots in a local machine test env

var express = require('express');
var request = require('request');

//variables obscured in env
var clientID = process.env.clientID;
var clientSECRET = process.env.clientSECRET;

var app = express();

const PORT=4390;

app.listen(PORT, function(){
	console.log("Example app listening on port " + PORT);
});

app.get('/', function(req, res) {
	res.sent('The path to your fixed purpose is paved with iron rails! Path Hit: ' + req.url);
});

app.get('/oauth', function(req, res) {
	if (!req.query.code) {
		res.status(500);
		res.send({"Error": "Looks like we're not getting code."});
		console.log("Looks like we're not getting code.");
	} else {
	request({
		url: 'https://slack.com/api/oauth.access',
		qs: {code: req.query.code, client_id: clientID, client_secret: clientSECRET},
		method: 'GET',
	}, function (error, response, body) {
		if (error) {
			console.log(error);
		} else {
			res.json(body);
		}
	})
	}
});

app.post('/command', function(req, res) {
	res.send('Swerve you?! The path to your fixed purpose is paved with iron rails!');
});
