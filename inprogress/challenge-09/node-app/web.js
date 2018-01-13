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


// who am i
app.get('/whoami', function (req, res) {
	// Create an IAM client
	var iam = new AWS.IAM();
	// If you do not specify a user name, IAM determines the user name 
	// implicitly based on the AWS access key ID used to sign the 
	// request to this API.
	var params = {
		UserName: null 
	};
	iam.getUser(params, function(err, data) {
		if (err) {
			console.log(err, err.stack); // an error occurred
			res.send("There was an error");
		}
		else {
			console.log(data);           // successful response
			res.send("The current user was " + data.User.UserName);
		}

		/*
		data = {
		User: {
			Arn: "arn:aws:iam::123456789012:user/Bob", 
			CreateDate: <Date Representation>, 
			Path: "/", 
			UserId: "AKIAIOSFODNN7EXAMPLE", 
			UserName: "Bob"
		}
		}
		*/
	});
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

