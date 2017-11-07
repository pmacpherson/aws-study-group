Challenge 02 - Intro to AWS CLI - Step by Step
==================

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
* http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html#id_users_create_console

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
* https://www.cloudassessments.com/blog/configuring-the-aws-command-line-interface/
* http://docs.aws.amazon.com/cli/latest/userguide/cli-config-files.html


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

### Run multiple AWS Profiles
* Run: aws iam get-user
* Run: aws iam get-user --profile profile2

### Run multiple outputs
* Run: aws iam get-user --output text/json/table


### Grant S3 access to AWSStudyGroupUser user
* IAM > User > AWSStudyGroupUser > Add Permissions
	* Attach Existing Polices directly
	* Search for "AmazonS3"
	* Apply permission "AmazonS3FullAccess"
* Review new policy json added to AWSStudyGroupUser user

