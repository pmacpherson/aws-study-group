Challenge 05 - An Introduction to Amazon DynamoDB and CloudWatch Events
==================

### Grant DynamoDB Access
* Locate lambda role created above in IAM > Roles
* Ensure the role has managed policies:
	* AmazonDynamoDBFullAccess
	* AWSLambdaBasicExecutionRole
