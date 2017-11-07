Challenge 05 - An Introduction to Amazon DynamoDB and CloudWatch Events
==================

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

