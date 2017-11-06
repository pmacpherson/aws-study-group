Challenge 03 - An Introduction to AWS Lambda
==================

Create hello world lamdba function with numerous versions and a "prod" alias.

### Create AWS Lambda function:
Create new lambda function from scratch called "hello-world" using a custom role "lambda_basic_execution"

Modify inline content to spit out console.log("Hello world")

#### Test your lambda function.  
Configure a test event to trigger the lambda.

* Read the Log Output from the test to confirm console output.
* Look at logs under cloudwatch "Click here" link will take you there.  

#### Publish version of Lambda
Create a new version of the lambda: Actions > Publish new Version

#### Download Lambda function
Download and open the lambda function locally.  

Actions > Export Function > Download Deployment Package
* This is a zip file.  If your operating system does not recognize the file, simply add a .zip extension to the filename 
* http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html


#### Modify Lambda
Assuming the event object will now recieve the following object:
```
{
    "name":"Patricia", 
    "email":"pmacpherson@klick.com"
}
```
Modify the index.js file to output name and email

#### Package and Upload Lambda function
Archive files back into a new zip file. Ensure index.js is the root level of your zip file and not under a subdirectory.  Replace existing lambda by uploading new package from zip.

#### Test your lambda function.  
Modify test event with new sample data

#### Add error handling
Add error handling to verify name and email exists.  Return errors if they do not.  Test various cases and see if lambda execution handles them properly

#### Publish new version of Lambda
After each change, publish a new lambda version.  Learn how to toggle and test between newer and older versions.  Create an alias and point it various versions
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



