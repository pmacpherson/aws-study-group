Challenge 05 - AWS Lambda, Amazon DynamoDB, CloudWatch Events
==================

Create a lambda function that is executed every minute and writes an entry to a dynamodb table.

### Create AWS Lambda function:
* Create new lambda function:
	* named: hello-dynamodb 
	* new execution role: lambda_hello_dynamodb_execution
* Upload package created above with:
	* Handler: CreateThumbnail.handler (note this is the name of the CreateThumbnail.js)
* Modify inline content and output "Hello World" to the console.  eg console.log("Hello World")
* Test the lambda and review the logs and verify output is displayed

### Schedule Lambda Execution:
* Add a new trigger on the lambda by creating a Cloudwatch Events that will execute every minute.
* Review the execution logs for the lambda function under CloudWatch > Logs > hello-dynamodb
* Confirm execution is happening every mintue


### Create DynamoDB Table
* Create dynamo db table
	 * Table Name: helloDynamo
	 * Primary Key: date / number 
			* This will be the primary key for the table.  Not ideal for production environments, but adequate for this challenge
	 * Create the table 
* Wait for table to be properly created and confirm schema structure contains one field named "date"

### Download Lambda Function:
* Export the lambda function using Actions > Export Function 
* Download Deployment package and save to your local environment
* Unzip the file

### Modify Lambda function
* Open the index.js file locally
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
* Create new deployment zip package with index.js
* Update the helloDynamo with the deployment package (either Console or CLI)


### Test lambda function
* Try testing lambda function.
* Should receive error.  What is the error?

### Grant DynamoDB Access
* Locate lambda role created above in IAM > Roles
* Add inline policy
	 * Policy Generator
			* Effect: Allow
			* AWS Service: Amazon DynamoDB
			* Actions: All
			* ARN: The ARN of the DynamoDB table created above (See this on the DynamoDB table details)
		* Next and Apply
		* Review newly generated policy on role

### Test lambda function
* Try testing lambda function.
* Should be successful
* Check dynamodb to see newly generated records

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

* What is AWS Lambda?
* What are a few ways a lambda function can be triggered?
* What schedule syntax does CloudWatch Events use?
* What is AWS DynamoDB?
* What type of database is DynamoDB?
* What permissions are required to make a DynamoDB writable?
* What is an ARN?







