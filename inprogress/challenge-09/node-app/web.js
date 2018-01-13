const AWS = require('aws-sdk');
const express = require('express')
const fs = require('fs');
const app = express()

// load configuration file
const config = require("./config.js")


// load aws credentials for local development only!
const pathAWSConfig=config["aws"];
if (pathAWSConfig!=null) {
	console.log("loading " + pathAWSConfig);
	AWS.config.loadFromPath(pathAWSConfig);
}

// simple hello world
app.get('/', (req, res) => res.send('Hello World!'))


// list users
app.get('/users', function (req, res) {
	// Create an IAM client
	var iam = new AWS.IAM();

	var params = {};
	iam.listUsers(params, function(err, data) {
		if (err) {
			console.log(err, err.stack); // an error occurred
			res.send("There was an error");
		}
		else {
			console.log(data);           // successful response
			res.send("Total number of users: " + data.Users.length);
		}
	});
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

