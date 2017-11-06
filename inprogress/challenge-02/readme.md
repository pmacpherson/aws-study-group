Challenge 02 - Intro to AWS CLI
==================

Configure AWS CLI with multiple profiles.
Programmatically create/delete S3 buckets from command line.


### Confirm Root Account is Secure
Your root account is the most important account and must be protected at all costs.

Confirm there are no access keys under Security credentials for your root user.  If there are, consider removing the access keys.  

Confirm CLI is not using your root account.

Read best practice on root accounts: http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html


### Create New User
Using AWS Console, create a new IAM User named "AWSStudyGroupUser" with only "Programmatic Access".  During the process, download both the Access Key and the Secret Access Key. If you do not save these keys, you will not be able to retrieve them later.
* http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console

### Configure AWS Profiles
If you've used CLI in the past, you can choose to skip this part (or backup your ~/.aws folder) as the following will delete your default profile

Using AWS CLI, Create default profile

* run: aws configure using "us-east-1" for region and "json" for output
* Open 2 files in text editor on your local machine under:
	* OSX: ~/.aws or 
	* Windows: C:\User\username\\.aws
* Run: aws iam get-user
	* Should receive access denied
* https://www.cloudassessments.com/blog/configuring-the-aws-command-line-interface/
* http://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html


### Configure Permissions for IAM User
Add an "inline policy" to the new user and use the Policy Generator, using the "AWS Identity And Access Management" service and allow GetUser permission

* Review new policy json added to AWSStudyGroupUser user
* Run: aws iam get-user
	* Should receive success, although it might take a minute or two before it's updated.


### Create multiple AWS Profiles
Create another account AWSStudyGroupUser2, however, use "aws configure --profile profile2"
* Run: aws configure --profile profile2
* Review ~/.aws/ files

### AWS CLI Options
* --profile [name] - switch allows you to run any cli command with different profiles
* --output text/json/table - switch allows you to control the output format


### Grant S3 access to AWSStudyGroupUser user
Add a permission using the managed policy "AmazonS3FullAccess" to the users

### Create S3 Bucket and transfer files
Using the AWS CLI:

* create a new S3 bucket to store files.
* upload a single file files/file1.txt to this bucket
* list files in s3 bucket
* upload the files folder with a single command recursively
* download files to new local folder
* delete bucket 

* http://docs.aws.amazon.com/cli/latest/reference/s3/index.html

### Programmatically setup and teardown buckets
Programmatically setup S3 buckets by creating bash or powershell scripts.
* setup.sh
	* creates bucket
	* upload files folder
* teardown.sh
	* deletes bucket

Try running setup or teardown twice in a row.  What happens?

Note, after deleting an S3 bucket, the bucket name is not immediately available for reuse.

### Teardown
* Delete S3 buckets
* Delete AWSStudyGroupUser2

### Homework
* Watch IAM Best Practices: https://youtu.be/_wiGpBQGCjU

# Additional Resources
* http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
* http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html
* http://docs.aws.amazon.com/cli/latest/reference/
* https://www.slideshare.net/ErikPaulsson/aws-iam-and-security


### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation

### Questions:

* What is IAM? Users? Roles? Policies?
* What is the difference between Existing Policies and Inline Policies?
* What is an ARN?
* Why is root account so important?
* What are some ways to keep root account secure?
* What is AWS Console?
* What is AWS CLI?
* What are AWS Profiles?  Why do you use them?
* What are some benefits of using CLI?
* What are some pitfalls of using CLI?
* What are a few commands you can use to copy assets to an S3 bucket?
* What are the various output formats a command can have?



