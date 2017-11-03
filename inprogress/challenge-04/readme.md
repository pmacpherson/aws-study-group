Challenge 04 - AWS CLI, AWS Lambda, AWS S3 Events
==================

Using an image resize lambda (provided below), automatically create new resized images whenever files are uploaded into an S3 source bucket.

### Upload files into S3:
Using the AWS CLI:

* Create a new S3 bucket to store images. eg 2017-pmacpherson-images
* Upload the files from "images" folder to this bucket
* Create a new S3 bucket to store resized files. eg 2017-pmacpherson-imagesresized
* http://docs.aws.amazon.com/cli/latest/reference/


### Create AWS Lambda function:

* Under lambda_source, there is a CreateThumbnail.js file.  Package this file into a Lambda function and upload it to AWS.  
* Take a look at this file but don't worry if it doesn't make much sense right now.
* http://docs.aws.amazon.com/lambda/latest/dg/get-started-create-function.html
     
#### Create lambda deployment package

* You will need node installed on your machine.  
* If you do not have node installed, you can skip this part and use the zip package in lambda_package

In lambda_source folder:

* Run: npm init  (Leave all defaults and Create package.json)
* Install dependencies, run: npm install async gm --save
* Confirm dependencies are added to package.json (should see async and gm added to package.json)
* Once complete, you should now have:
	* CreateThumbnail.js
	* /node_modules/*
* Zip the CreateThumbnail.js file and the node_modules folder as CreateThumbnail.zip.  This is your Lambda function deployment package.
* Note: Ensure CreateThumbnail.js is the root level of your zip file and not under a subdirectory.


#### Create lambda function:
In AWS Console or CLI:

* Create new lambda function:
	* named: s3-resize-images 
	* new execution role: lambda_s3_resize_images_execution
* Upload package created above with 
	* Handler: CreateThumbnail.handler (note this is the name of the CreateThumbnail.js)


#### Test your lambda function.  
* Open the the lambda_source/test.json, and change all CHANGE_TO_SOURCE_BUCKETNAME to your bucket name (2 occurrences)
* Create new lambda test with contents from test.json
* Run Test
* Although the test was run successfully, Read the Log Output from the test.  Notice it reads "AccessDenied: Access Denied"

#### Add S3 Permissions to Lambda Role
* Modify lambda_s3_resize_images_execution role and add AmazonS3FullAccess policy
* Confirm the role has the policy name added by reviewing role details

#### Retest your lambda function.  
* Rerun test on lambda.  Confirm it runs successfully
* Check your resized s3 bucket and confirm resize-picture.jpg exists



### Enable S3 Event notification:
* In AWS Console, locate source bucket eg. 2017-pmacpherson-images
* Click on bucket's Properties > Events > Add Notification
	* Events: ObjectCreate
	* Suffix: ".jpg" - Don't put "*.jpg"
	* Send To: Lambda
	* Lambda: TestS3Resize 
		* If you only see Add Lambda ARN, and not your newly created lambda function, then ensure your S3 bucket and Lambda function are in the same region
* http://docs.aws.amazon.com/lambda/latest/dg/with-s3-example-configure-event-source.html


### Verify S3 Event Notifcation
* Upload new assets into source bucket
* Verify new assets are copied and resized into resized bucket eg. 2017-pmacpherson-imagesresized

### Troubleshooting and Logs
* View the logs for your lambda under Cloud Watch > Logs > s3-resize-images


### Teardown
* Delete S3 buckets
* Delete Lambda
* Delete Cloudwatch Logs
* Delete Role

# Additional Resources
* https://www.slideshare.net/ErikPaulsson/aws-iam-and-security
* http://docs.aws.amazon.com/lambda/latest/dg/with-s3-example-upload-deployment-pkg.html


### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation

### Questions:

* What is AWS Console?
* What is an IAM Role?  What is it's purpose?
* What permissions does the IAM Role require in order to create new files in S3?
* What is AWS Lambda?
* What languages are supported by AWS Lambda?
* What is the purpose of Handler for your lambda function?
* What is the code structure of a node Lambda function?
* What are the three variables: event, context, and callback used for?
* What type of events can S3 monitor?
* What AWS Services can S3 events be sent to?
* What is the payload format for the S3 event to lambda?




