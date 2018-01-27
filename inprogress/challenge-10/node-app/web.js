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

app.listen(3000, () => console.log('Example app listening on port 3000!'))

