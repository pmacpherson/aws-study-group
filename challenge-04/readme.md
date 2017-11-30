Challenge 04 - Resizing images with S3 Events
==================

Using a lambda (provided below), automatically create resized images whenever files are uploaded into an S3 source bucket.

### Upload files into S3:
Using the AWS CLI:

* Create a new S3 bucket to store images. eg 2017-pmacpherson-images
* Upload the files from "images" folder to this bucket
* Create a new S3 bucket to store resized files. eg 2017-pmacpherson-imagesresized
* http://docs.aws.amazon.com/cli/latest/reference/


### Create AWS Lambda function:

Under lambda_source, there is a CreateThumbnail.js file.  Package this file into a Lambda function and upload it to AWS.  

See if you can understand the code.  Don't be discouraged if you can't.  It's a bit complicated!

#### Create lambda deployment package

You will need node installed on your machine.  If you do not have node installed, you can skip this part and use the zip package in lambda_package

To build, run:
```
npm init  (Leave all defaults and Create package.json)
npm install async gm --save
```


#### Create lambda function:
In AWS Console or CLI:

* Create new lambda function:
	* named: s3-resize-images 
	* new execution role: lambda_s3_resize_images_execution
* Upload package with 
	* Handler: CreateThumbnail.handler (note this is the name of the CreateThumbnail.js)


#### Test your lambda function.  
The lambda_source/test.json is a sample data set you can use for testing the lambda function.  You will need to modify the file and replace all CHANGE_TO_SOURCE_BUCKETNAME to your bucket name (2 occurrences)

After running the test, make sure you read the log output.  It most likely did _not_ succeed.  Why?

#### Add S3 Permissions to Lambda Role
Modify lambda_s3_resize_images_execution role to have full S3 access to the resized bucket.

#### Retest your lambda function.  
Rerun test and confirm it runs successfully by checking your resized s3 bucket



### Enable S3 Event notification:
On the S3 source bucket, add an S3 Event notification (Properties > Events > Add Notification).  Set up an event that on ObjectCreate for all .jpg files, it will execute our new lambda function.

If you only see Add Lambda ARN, and not a drop down of lambda function names, ensure your S3 bucket and Lambda function are in the same region

* http://docs.aws.amazon.com/lambda/latest/dg/with-s3-example-configure-event-source.html

#### Verify S3 Event Notifcation
Test it out.  Upload assets to the source and see if they generate resized images in the resize bucket.

### Experimentation
What other interesting lambda's can you create using S3 Event notifications?
- Write to DynamoDB for each uploaded object
- Elastic Transcoding for videos

### Troubleshooting and Logs
View the logs for your lambda under Cloud Watch > Logs > s3-resize-images



### Teardown
* Delete S3 buckets
* Delete Lambda
* Delete Cloudwatch Logs
* Delete Role

# Additional Resources
* https://www.slideshare.net/ErikPaulsson/aws-iam-and-security
* http://docs.aws.amazon.com/lambda/latest/dg/with-s3-example-upload-deployment-pkg.html
* http://docs.aws.amazon.com/cli/latest/reference/lambda/


### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation

### Questions:

* What permissions does the IAM Role require in order to create new files in S3?
* What type of events can S3 monitor?
* What AWS Services can S3 events be sent to?
* What is the payload format for the S3 event to lambda?
* Besides resizing images, what are some other ideas for S3 Events?
* What type of events can trigger Lambda?



