Challenge 07 - Guestbook Application
==================

Create a guestbook application hosted on S3, using Lambda, DynamoDB and API Gateway.
* https://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-lambda.html

Using everything we've learned so far, create a static html-javascript website hosted in S3 that displays a guestbook application.  This application will contain two components or pages

1) A page that display an html form that allows you to enter your name, email, and a message.  Submitting the form will call an api gateway which will execute a lambda and save the guestbook entry inside a dynamodb table.  

2) A page that will list all the existing guestbook entries, displaying the name/email/message of previous entries.

If you are struggling with the javascript for the site, leave it for the end.  


### What you'll need

#### DynamoDB table
Create a dynamoDB table named "guestbook" with the fields:
   * Name
   * Email
   * Message
   * Date (identifier key)

#### AWS Lambda
Create lambda functions that will save results to and retrieve results from the dynamodb table

#### Configure API Gateway to call Lambda
Create a /POST and a /GET for your guestbook application

#### S3
Create an S3 bucket to host your static html files.  You will need to know some client side programming using javascript.  There are various libraries to choose from: reactjs, jquery, ajax.  If you have questions, speak up, there are plenty of people who can help.

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





