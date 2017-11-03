Challenge 02 - AWS IAM, CLI, S3
==================

Configure AWS CLI using multiple profiles.
Using aws cli, programmatically create/delete S3 buckets


### Confirm Root Account is Secure
Your root account is the most important account and must be protected at all costs.

* Go into AWS Console, and search for your root user under IAM.  
* If you only have one user under IAM, that's probably your root account.
* Confirm there are no access keys under Security credentials for user
* If there are, consider removing the access keys.  
* Read best practice on root accounts 
* http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
* Using AWS CLI run: aws iam get-user
* Confirm it either cannot locate credentials, or the user returned is NOT root.


### Create New User
* Using AWS Console, Create new IAM User
	* Name: AWSStudyGroupUser
	* Access Type: Programmatic Access
	* Next
	* Ignore permissions for now, Click Next
	* Create User
	* Copy both the Access Key and the Secret Access Key.
	* If you do not copy these keys now, you will not be able to retrive them later.

### Configure AWS Profiles
* If you've used CLI in the past, you can choose to skip this part (or backup your ~/.aws folder) as the following will delete your default profile
* Using AWS CLI, Create default profile
	* run: aws configure
		* Access Key: copied from step above
		* Secret Access Key: copied from step above
		* Default Region: us-east-1
		* Default output: json
	* Open 2 files in text editor on your local machine under:
		* OSX: ~/.aws or 
		* Windows: C:\User\username\\.aws
* Run: aws iam get-user
	* Should receive access denied

### Configure Permissions for IAM User
* Using AWS Console, apply Get-User permissions
	* IAM > User > AWSStudyGroupUser > Click on "Add inline policy"
	* Use Policy Generator:
		* Effect: Allow
		* AWS Service: AWS Identity And Access Management
		* Actions: GetUser
		* ARN: *
		* Add Statement
		* Next
		* Validate Policy
		* Apply Policy
* Review new policy json added to AWSStudyGroupUser user
* Run: aws iam get-user
	* Should receive success, although it might take a minute or two before it's updated.


### Create multiple AWS Profiles
* Repeat the steps from "Create New User" downwards, however, use "aws configure --profile profile2"
	* Create IAM User: AWSStudyGroupUser2
	* Save Access and Secret Access Keys
	* Grant IAM::GetUser permission
	* Run: aws configure --profile profile2
	* Review ~/.aws/ files
	* Run: aws iam get-user
	* Run: aws iam get-user --profile profile2


### Grant S3 access to AWSStudyGroupUser user
* IAM > User > AWSStudyGroupUser > Add Permissions
	* Attach Existing Polices directly
	* Search for "AmazonS3"
	* Apply permission "AmazonS3FullAccess"
* Review new policy json added to AWSStudyGroupUser user

### Create S3 Bucket and transfer files
Using the AWS CLI:

* create a new S3 bucket to store files.
* upload a single file files/file1.txt to this bucket
* list files in s3 bucket
* upload the files folder with a single command recursively
* download files to new local folder
* delete bucket 

* http://docs.aws.amazon.com/cli/latest/reference/s3/index.html
* http://docs.aws.amazon.com/cli/latest/reference/s3/mb.html
* http://docs.aws.amazon.com/cli/latest/reference/s3/cp.html
* http://docs.aws.amazon.com/cli/latest/reference/s3/sync.html

### Programmatically setup and teardown buckets
* Create bash or powershell scripts using commands above:
	* setup.sh
		* creates bucket
		* upload files folder
	* teardown.sh
		* deletes bucket
* Try running setup or teardown twice in a row.  What happens?

### Teardown
* Delete S3 buckets
* Delete AWSStudyGroupUser2

### Homework
* Watch IAM Best Practices: https://youtu.be/_wiGpBQGCjU

# Additional Resources
* https://www.slideshare.net/ErikPaulsson/aws-iam-and-security
* http://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
* http://docs.aws.amazon.com/cli/latest/reference/


### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation

### Questions:

* What is IAM? Users? Roles? Policies?
* What is the difference between Existing Policies and Inline Policies?
* Why is root account so important?
* What are some ways to keep root account secure?
* What is AWS Console?
* What is AWS CLI?
* What are AWS Profiles?  Why do you use them?
* What are some benefits of using CLI?
* What are some pitfalls of using CLI?
* What are a few commands you can use to copy assets to an S3 bucket?



