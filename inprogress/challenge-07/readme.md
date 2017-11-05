Challenge 06 - AWS S3, AWS Lambda, Amazon DynamoDB, API Gateway
==================

Create a guestbook application hosted on S3, using Lambda, DynamoDB and API Gateway.
* https://obviate.io/2015/08/05/tutorial-aws-api-gateway-to-lambda-to-dynamodb/

### Create DynamoDB table
* Create a dynamoDB table named "guestbook" with the fields:
   * Name
   * Email
   * Message
   * Date

### Create AWS Lambda
* Create an node lambda file 
	* post.js - retrieve guestbook data from event and save to db
	* get.js - retrieve's all guestbook entries from dynamodb and return response

### Configure API Gateway to call Lambda
* create api gateway to post guestbook entry to lambda
* create api gateway to list guestbook entries from lambda
* http://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-lambda.html

### Create AWS S3 static website
* Create an s3 static website that has:
	* html page to post a form to api gateway
	* html page that retrieves guestbook entries from apigateway


### Teardown
* Delete Lambdas
* Delete DynamoDB
* Delete API Gateway
* Delete S3


### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation

### Questions:

* What is AWS Lambda?
* What are a few ways a lambda function can be triggered?
* What schedule syntax does CloudWatch Events use?
* What is AWS DynamoDB?
* What type of database is DynamoDB?
* What permissions are required to make a DynamoDB writable?
* What is an ARN?






