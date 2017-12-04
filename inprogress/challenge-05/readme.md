Challenge 05 - An Introduction to Amazon DynamoDB and CloudWatch Events
==================

Create a lambda function that is executed every minute and writes an entry to a dynamodb table.

Create another lambda function that will receive data from a dynamodb in bulk and execute upon it

Warning: Once you've, finished this challenge, please make sure you tear down everything.  Otherwise, you will incur expenses!


### Create AWS Lambda function:
Create new lambda function that spits out "Hello DynamoDB" to console:

	* named: hello-dynamodb 
	* new execution role: lambda_hello_dynamodb_execution

### Schedule Lambda Execution:
Add a new "CloudWatch Events" trigger on the lambda that will execute every minute rate(1 minute).

Confirm the trigger is executing in the logs under CloudWatch > Logs > hello-dynamodb


### Create DynamoDB Table
Create a DynamoDB table:
	* named "helloDynamo" 
	* primary key named "date" of type "number"

"Date" will be the primary key for the table.  "Date" as a primary key is not ideal for production environments, but is adequate for this challenge

It may take a few moments before the table is fully created.


### Download Lambda Function:
Export the lambda function using Actions > Export Function.  Choose deployment package.

Note, this is a zip file.  If the file is missing the .zip extension, simply add it and extract the files.


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
* AWS SDK DynamoDB: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html

### Update Lambda
Create new deployment package and replace Lambda function using console or CLI.

If you try testing the lambda function, you will receive an error.  What is the error?

### Grant DynamoDB Access
Update the lambda role to have access to Amazon DynamoDB table.


### Modify Lambda function
Change:
```
		TableName: 'helloDynamo'
```
to:
```
		TableName: process.env.DYANOMDB_TABLE
```

### Add Environment Variables to Lambda
Add an Environment variable:
	* DYANOMDB_TABLE = helloDynamo



### Create AWS Lambda function:
Create new lambda function that spits out event variable to console:

	* named: goodbye-dynamodb 
	* new execution role: lambda_hello_dynamodb_execution
	* console.log("event:%j", event)

### Add DynamoDB Trigger to Lambda function:
Add a DynamoDB Trigger:

	* DynamoDB Table: helloDynamo
	* Batch Size: 4
	* Starting Position: Trim Horizon


### Verify in CloudWatch Logs

Using both the hello-Dynamo and the goodbye-dynamo log files, confirm execution is correct.



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
* http://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html
* http://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html
* http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/dynamodb-example-table-read-write.html
* https://www.youtube.com/watch?v=G_-aEXmluq8
* http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Streams.html
* http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html

### Questions:

* What are a few ways a lambda function can be triggered?
* What is CloudWatch Event?
* What schedule syntax does CloudWatch Events use?
* What is AWS DynamoDB?
* What type of database is DynamoDB?
* What permissions are required to make a DynamoDB writable?
* What is an ARN?
* What is a DynamoDB Stream?
* What is the retention period for data stored in a stream?



