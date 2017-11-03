Challenge 02 - AWS CLI, AWS Lambda, AWS S3 Events
==================

Using an image resize lambda (provided below), automatically create new resized images whenever files are uploaded into an S3 source bucket.

### Upload files into S3:
You will need the AWS CLI installed on your machine.  If you do not have the CLI installed, use the AWS Console.

* Using the AWS Console, create a new S3 bucket to store images. eg 2017-pmacpherson-images
* Using the AWS CLI, upload the files from "images" folder to this bucket
* Using the AWS CLI, create a new S3 bucket to store resized files. eg 2017-pmacpherson-imagesresized

* http://docs.aws.amazon.com/cli/latest/reference/
* http://docs.aws.amazon.com/cli/latest/reference/s3/mb.html
* http://docs.aws.amazon.com/cli/latest/reference/s3/cp.html


### Create AWS Lambda function:
Under lambda_source, there is a CreateThumbnail.js file.  Package this file into a Lambda function and upload it to AWS.  Take a look at this file but don't worry if it doesn't make much sense right now.

* http://docs.aws.amazon.com/lambda/latest/dg/get-started-create-function.html
     
#### Create lambda deployment package
You will need node installed on your machine.  If you do not have node installed, you can skip this part and use the zip package in lambda_package

In lambda_source folder:

* Execute npm init.  Create package.json
* Install dependencies using npm install async gm --save
* Confirm dependencies are added to package.json (should see async and gm added to package.json)
* Once complete, you should now have:
	* CreateThumbnail.js
	* /node_modules/*
* Zip the CreateThumbnail.js file and the node_modules folder as CreateThumbnail.zip.  This is your Lambda function deployment package.
* Note: Ensure CreateThumbnail.js is the root level of your zip file and not under a subdirectory.


#### Create lambda function:
* In AWS Console, Create new lambda function from scratch
	* Name: s3-resize-images
	* Role: Create Custom Role
    	* Iam Role: Create new IAM Role
    	* Role Name: lambda_s3_resize_images_execution
    	* Allow
	* Existing Role: lambda_s3_resize_images_execution
	* Create Function

* Upload package created above
  * Code entry type: Upload and choose file
  * Runtime: Node 6.10
  * Handler: CreateThumbnail.handler (note this is the name of the CreateThumbnail.js)
  * Save


#### Test your lambda function.  
* Open the the lambda_source/test.json, and change CHANGE_TO_SOURCE_BUCKETNAME to your bucket name
* In AWS Console, click "Select a test event" > Configure Test Events
	* Create new test event
	* Event Template: Hello World
	* Event Name: TestS3Resize
		* Body: copy the json from lambda_source/test.json into this area
	   * Create
* Now hit "Test"
* Read the Log Output from the test, notice it reads "AccessDenied: Access Denied"

#### Add S3 Permissions to Lambda Role
* In AWS Console, go to IAM > Roles > lambda_s3_resize_images_execution
	* Attach the AmazonS3FullAccess Policy
	* Confirm the role has the policy name added by reviewing role details


#### Retest your lambda function.  
* Rerun test on lambda.  Confirm it runs successfully
* Check your resized s3 bucket and confirm resize-picture.jpg exists



### Enable S3 Event notification:
* Create an Event Notification on your source bucket eg. 2017-pmacpherson-images using:
	* Events: ObjectCreate
	* Suffix: ".jpg"
	* Send To: Lambda
	* Lambda: name of your lambda function
* http://docs.aws.amazon.com/lambda/latest/dg/with-s3-example-configure-event-source.html


### Verify S3 Event Notifcation
* Upload new assets into source bucket
* Verify new assets are copied and resized into resized bucket eg. 2017-pmacpherson-imagesresized
* View the logs under Cloud Watch > Logs > s3-resize-images


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
* What is AWS CLI?
* What are a few commands you can use to copy assets to an S3 bucket?
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




