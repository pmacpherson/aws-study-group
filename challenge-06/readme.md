Challenge 06 - An Introduction to API Gateway
==================

Create an API Gateway that executes a random number generator lambda function and returns a response.



### Create AWS Lambda function:
Create new lambda function:

	* named: random-number 

Create a new role from a template:

	* On the new lambda screen, choose 
		* Role: "Create new role from Template"
		* Name: lambda_random_number_execution
		* Policy Template: Simple Microservice permissions

```
exports.handler = (event, context, callback) => {
    let min = 0;
    let max = 100;
    let rand = Math.floor(Math.random()*max)+min;

    var responseBody = { "number":rand };

    var response = {
        "statusCode": 200,
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
    };
    callback(null, response);
};
```

Each time you run a test, the lamda should return a random number.


### Create Lambda Trigger to API Gateway:
Create new lambda trigger with api gateway:

	* API name: randomNumberMicroservice
	* Deployment Stage: dev
	* Security: Open

Ensure you save the lambda properly


### Review New API Gateway:
Review the newly generated api gateway:

	* API Gateway > APIs > randomNumberMicroservice
		* Resources > /random-number > ANY 
			* The ANY method means we can hit this api via any HTTP Resource, ie GET, POST etc
		* On right side > Client Test 
			* Method: GET
			* Test
		* Stages > dev 
			* Click on the Invoke URL
			* You will receive "Missing Authentication Token" because you are hitting the root of the url
			* append "/random-number", and you will invoke your lambda function


### Deploy New Resource:
Deploy our new resource:

	* Resources > Get > Actions > Deploy API
		* Deployment Stage: New Stage
		* Stage Name: prod
		* Deploy

There are now two stages (dev and prod) with different invoke urls



### Create AWS Lambda function:
Create new lambda function:

	* named: add-number
	* Role: lambda_random_number_execution


```
exports.handler = (event, context, callback) => {
    let x = Number(event.queryStringParameters.x);
    let y = Number(event.queryStringParameters.y);
    let sum = x+y;

    var responseBody = { "number":sum };

    var response = {
        "statusCode": 200,
        "body": JSON.stringify(responseBody),
        "isBase64Encoded": false
    };
    callback(null, response);
};
```

### Create Lambda Trigger to API Gateway:
Create new lambda trigger with api gateway:

	* API name: randomNumberMicroservice
	* Deployment Stage: dev
	* Security: Open

Again, Ensure you save the lambda properly


### Review New API Resource:
Review the newly generated api resource:

	* API Gateway > APIs > randomNumberMicroservice
		* Resources > /add-number > ANY 
			* Method Request: add x and y as required query string parameters
		* On right side > Client Test 
			* Method: GET
			* Set QueryString Parameters: x=1&y=2
			* Test


### Teardown
* Delete Lambdas
* Delete API Gateway
* Delete Cloudwatch Logs
* Delete IAM Roles


# Additional Resources
* https://www.youtube.com/watch?v=8U4RRw3PwGw
* http://docs.aws.amazon.com/apigateway/latest/developerguide/integrating-api-with-aws-services-lambda.html
* http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-create-api-as-simple-proxy-for-lambda.html


### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation

### Questions:

* What is AWS Api Gateway?






