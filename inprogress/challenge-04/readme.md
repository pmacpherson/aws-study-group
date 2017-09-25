Challenge 04 - AWS S3, AWS Lambda, Amazon DynamoDB, API Gateway
==================

Create a guestbook application hosted on S3, using Lambda, DynamoDB and API Gateway.

### Create DynamoDB table
* Create a dynamoDB table named "guestbook" with the fields:
   * Name
   * Email
   * Message
   * Date

### Create AWS S3 static website
* Create a s3 static website that displays a form with the same fields as the DynamoDB table

### Create AWS Lambda
* Create an node lambda file 

- create api gateway to post form to dynamodb
- create api gateway to list records from dynamodb
- create api gateway to edit record from dynamodb


http://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-lambda.html




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






