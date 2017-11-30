Challenge 04 - Resizing images with S3 Events
==================

### Create lambda deployment package
In lambda_source folder:

* Run: npm init  (Leave all defaults and Create package.json)
* Install dependencies, run: npm install async gm --save
* Confirm dependencies are added to package.json (should see async and gm added to package.json)
* Once complete, you should now have:
	* CreateThumbnail.js
	* /node_modules/*
* Zip the CreateThumbnail.js file and the node_modules folder as CreateThumbnail.zip.  This is your Lambda function deployment package.
* Note: Ensure CreateThumbnail.js is the root level of your zip file and not under a subdirectory.


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

