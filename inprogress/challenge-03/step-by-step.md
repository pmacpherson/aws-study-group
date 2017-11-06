Challenge 03 - An Introduction to AWS Lambda
==================

Create hello world lamdba function with numerous versions and a "prod" alias.

### Create AWS Lambda function:
* In AWS Console, Create new lambda function from scratch
	* Name: hello-world
	* Role: Create Custom Role
    	* Iam Role: Create new IAM Role
    	* Role Name: lambda_basic_execution
    	* Allow
	* Existing Role: lambda_basic_execution
	* Create Function
* Modify inline content to spit out console.log("Hello world")
* Save

#### Test your lambda function.  
* Click "Select a test event" > Configure Test Events
	* Create new test event
	* Event Template: Hello World
	* Event Name: test1
	* Body: Leave defaults
	* Create
* Now hit "Test"
* Read the Log Output from the test.  Should see "Hello World"
* Look at logs under cloudwatch "Click here" link will take you there.  
* Multiple browser tabs/windows will be helpful here as we flip flop.
* Run test a few more times, confirm cloudwatch logs get updated. (Almost real time delivery)
* Note, cloudwatch logs will also create new log files periodically under the log group

#### Publish version of Lambda
* Actions > Publish new Version
	* Version description: v1


#### Download Lambda function
* Actions > Export Function > Download Deployment Package
	* This is a zip file.  If your operating system does not recognize the file, simply add a .zip extension to the filename 
	* Extract the file
* Read the index.js file
* Understand the handler definition: event, context and callback
	* http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html


#### Modify And Package Lambda function
* Modify the index.js file to contain the following lines:
```
   console.log("name = " + event.name);
   console.log("email = " + event.email); 
   console.log("Hello " + event.name);
```
* Archive index.js back into a new zip file.
* Note: Ensure index.js is the root level of your zip file and not under a subdirectory.

#### Upload package
In AWS Console:

* Upload package to the "hello-world" lambda 
	* Code entry type: Upload and choose file
	* Runtime: Node 6.10
	* Handler: index.handler (note this is the name of the index.js)
	* Save

#### Test your lambda function.  
* Edit the "test1" event changing the body to the following:
```
{
    "name":"Patricia", 
    "email":"pmacpherson@klick.com"
}
```
* Save and test
* Read the Log Output from the test

#### Add error handling
* Add error handling to verify name and email exists
* Return errors if they do not.
* Test various cases and see if lambda execution handles them properly

#### Publish new version of Lambda
* Publish a new lambda version: v2

#### View and test previous versions
* Toggle the Versions: $Latest between V1, V2 and $Latest.
* Run test on all of them

#### Create Alias
* Actions > Create Alias
	* Name: prod
	* Description: production tag
	* Version: v1
* Update Alias to $Latest
* http://docs.aws.amazon.com/lambda/latest/dg/versioning-aliases.html

### Teardown
* Delete Lambda
* Delete Cloudwatch Logs
* Delete Role

### Homework
* Perform all the above with the CLI
* http://docs.aws.amazon.com/cli/latest/reference/lambda/

# Additional Resources
* http://docs.aws.amazon.com/lambda/latest/dg/with-s3-example-upload-deployment-pkg.html


### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation

### Questions:

* What is AWS Lambda?
* What languages are supported by AWS Lambda?
* What is the purpose of Handler for your lambda function?
* What is the code structure of a node Lambda function?
* What are the three variables: event, context, and callback used for?
* What is a Version?  What is it's purpose?
* What is an Alias?  What is it's purpose?



