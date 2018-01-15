Challenge 10 - Cloudformation
==================

An introduction to cloudformation to create and manage aws resources


### Run script1.yaml

* Create a cloudformation stack using script1.yaml.  
* Examine Events and Resources tab
* What is the name of your S3 bucket?  Why is it this name?
* Manually upload some files into the S3 bucket.
* Delete the cloudformation stack.
* What happen?
* Delete the assets in the S3 bucket, then delete the cloudformation stack.
* What happen?


### Run script2.yaml

* Re-Run script1.yaml
* Update the stack using script2.yaml
* Manually upload some files into the S3 bucket.
* Delete the cloudformation stack.
* What happen to the S3 bucket and all your files?
* What is the difference between script1 and script2?
* What does DeletionPolicy do?


### Run script3.yaml

* Re-Run script1.yaml
* Update the stack using script3.yaml
* Examine Events, Resources and Outputs tab
* What does !Ref do?
* What does !GetAtt do?
* What does !Join do?


### Create script4.yaml

Create a new cloudformation script that will prompt the user for a "Bucket Name" and create an S3 bucket with this parameter.

Using script3, add a string parameter and set the bucket name with this parameter.



### Questions:
* What is cloudformation?
* What are the two formats for a cloudformation template?


### Teardown
* Delete Cloudformation Stack
* Ensure all other resources are deleted


### Resources
* https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html



### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation





