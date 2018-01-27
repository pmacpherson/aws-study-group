Challenge 10 - EC2 - Guestbook Application
==================

Create a guestbook application.

Reuse your code from challenge 07.  If you have not done challenge 07, you can start from scratch.  There's a skeleton application under node-app.

* Optional - explore the SDK and choose your own application.


### Guestbook Application - Local Environment

Using everything we've learned so far, create a node application that displays a guestbook application.  

This application has two features:

1) A page that display an html form that allows you to enter your name, email, and a message.  Submitting the form will post to the node application and save the guestbook entry inside a dynamodb table.

2) A page that will list all the existing guestbook entries, displaying the name/email/message of previous entries.



### Guestbook Application - EC2 Environment

Deploy your local application onto EC2.  

1) The easiest way is to create your own git repo (don't commit your aws access keys), and check out your application onto the ec2 instance.

2) Zip up your application into an s3 bucket and on the ec2 instance use the CLI to download

3) Manually copy the files using an SCP client


### Optional - Explore Userdata when initialising EC2 instance

When creating an EC2 instance, configure UserData with commands to download/install your application.  Similar to what you manually did in challenge-09


### Resources
* https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/user-data.html
* https://aws.amazon.com/sdk-for-node-js/
* https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-nodejs.html
* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html
* https://medium.com/@suthagar23/getting-started-with-aws-javascript-sdk-a5f722e9539a


### Teardown
* Delete EC2
* Delete DynamoDB


### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation











