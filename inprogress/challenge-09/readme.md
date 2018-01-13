Challenge 09 - AWS SDK and EC2
==================

Create a node application that connects to some AWS services.

Run and setup the application to run on your local development machine.
Run and setup the application to run on an EC2 instance.

PreRequiste: Challenge 08 - Launching an EC2 instance.


### Local development setup

Setup the code in node-app/web.js.  

In order to have this run, you will need to modify:
* aws.json - add AWS Access keys
* config.json - set the aws to the path of aws.json


### Launch an EC2 Instance

Launch an ec2 instance as specified in challenge 08


### EC2 Instance setup 

Setup the code in node-app/web.js.  However, this time do NOT use AWS Access Keys.  

Create a new IAM role with appropriate permissions for IAM ListUser, and assign that to the EC2 Instance.


### Teardown
* Delete EC2 Instance
* Delete Security Group


### Resources
* https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html
* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IAM.html#listUsers-property
* https://github.com/aws-samples/aws-nodejs-sample



### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation





