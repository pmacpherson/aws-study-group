Challenge 02 - AWS CLI, AWS Lambda, AWS S3 Events
==================

Create an image resizing lambda function that is triggered when new images are uploaded into an S3 source bucket.


### Upload files into S3:
* Create a new S3 bucket to store images. eg 2017-pmacpherson-images
* Using the AWS CLI, upload the files from "images" folder to this bucket
* Using the AWS CLI, create a new S3 bucket to store resized files. eg 2017-pmacpherson-imagesresized
* http://docs.aws.amazon.com/cli/latest/reference/



### Create AWS Lambda function:
Under lambda_source, there is a CreateThumbnail.js file.  Package this file into a Lambda function and upload it to AWS.  Review this file but don't worry if it doesn't make much sense right now.

     
#### Create lambda deployment package
You will need node installed on your machine.  If you do not have node installed, you can skip this part and use the zip package in lambda_package

In lambda_source folder:
- Execute npm init.  Create package.json
- Install dependencies using npm install async gm --save
- Confirm dependencies are added to package.json (should see async and gm added to package.json)
- Once complete, you should now have:
   - CreateThumbnail.js
   - /node_modules/*
- Zip the CreateThumbnail.js file and the node_modules folder as CreateThumbnail.zip.  This is your Lambda function deployment package.


#### Create lambda Role:
* Under IAM > Role > Create Role, create a role that will be executed by lambda with full read/write access to S3
* http://docs.aws.amazon.com/lambda/latest/dg/with-s3-example-create-iam-role.html


#### Create lambda function:
* Create new lambda using the role we created above
* Modify the content of the lambda function by using the upload zip file feature and upload your lamda zip package created above.


#### Test your lambda function.  
* Open the the lambda_source/test.json, and change CHANGE_TO_SOURCE_BUCKETNAME to your bucket name
* Use this test.json file and test your lambda function.
* Read the output from the test and confirm the console output says success.
* Check and see if the images have been created in your resized bucket
* http://docs.aws.amazon.com/lambda/latest/dg/with-s3-example-upload-deployment-pkg.html



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


### Teardown
* Delete S3 buckets
* Delete Role
* Delete lambda


### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation

### Questions:

* What is AWS CLI?
* What are a few commands you can use to copy assets to an S3 bucket?
* What is the difference between aws s3 and aws s3api?
* What is AWS Lambda?
* What languages are supported by AWS Lambda?
* What is the Handler for your function?
* What type of events can S3 monitor?
* What AWS Services can S3 events be sent to?




