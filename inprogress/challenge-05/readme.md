Challenge 05 - An Introduction to Amazon DynamoDB and CloudWatch Events
==================

Create a lambda function that is executed every minute and writes an entry to a dynamodb table.

### Create AWS Lambda function:
Create new lambda function that spits out "Hello DynamoDB" to console:
	* named: hello-dynamodb 
	* new execution role: lambda_hello_dynamodb_execution

Make sure to test the lambda and review the logs and verify output is displayed.

### Schedule Lambda Execution:
Add a new trigger on the lambda that will execute every minute. 

Review the execution logs for the lambda function under CloudWatch > Logs > hello-dynamodb

### Create DynamoDB Table
Create a DynamoDB table:
	* named "helloDynamo"
	* primary key named date of datatype number

This will be the primary key for the table.  Not ideal for production environments, but adequate for this challenge

It may take a few moments before the table is fully created.

### Download Lambda Function:
Export the lambda function using Actions > Export Function 

### Modify Lambda function
```
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
exports.handler = (event, context, callback) => {
	var record = {
		Item: {
			date: Date.now(),
			message: "Hello, beautiful"
		},
		TableName: 'helloDynamo'
	}
	docClient.put(record, function(err, data) {
		if (err) {
			callback(err, null);
		} else {
			callback(null, data);
		}
	})
};
```

### Update Lambda
Create new deployment package and replace Lambda function using console or CLI.

### Test lambda function
Try testing lambda function.  Should receive error.  What is the error?

### Grant DynamoDB Access
Update the lambda role to have access to Amazon DynamoDB table

### Test lambda function
Re-test and confirm


### Teardown
* Delete CloudWatch Event Rule
* Delete Lambdas
* Delete Logs under CloudWatch for Lambda
* Delete DynamoDB

### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation

### Resources
http://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html
https://www.youtube.com/watch?v=G_-aEXmluq8

### Questions:

* What are a few ways a lambda function can be triggered?
* What is CloudWatch Event?
* What schedule syntax does CloudWatch Events use?
* What is AWS DynamoDB?
* What type of database is DynamoDB?
* What permissions are required to make a DynamoDB writable?
* What is an ARN?







