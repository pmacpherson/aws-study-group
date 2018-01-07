Challenge 08 - Billing Alarms and EC2
==================

Create a Billing Alarm to monitor your monthly expenses so there are no unexpected charges.

Start an EC2 instance and install a node application

Please see step by step for more instructions.


### Explore Billing Dashboard

Explore the Billing Dashboard 

* https://console.aws.amazon.com/billing/home#/

#### Billing Alarm

Create a new alarm under Cloudwatch > Billing setting a threshold to $10 on a monthly basis.


### Launch an EC2 Instance

Launch a new ec2 instance and log onto the instance using a new key.  Make sure to create and save a key pair in order to log onto the instance.

Pay attention to:
* Instance Type - (use free tier) different ones have different purposes
* Storage - (use general purpose)
* Security Groups - whitelist your ip address instead of the world
* Key Pair - don't lose this key!  You wont have access to the box if you lose it.


#### Install node web application onto the new EC2 instance
Checkout the aws study group onto the instance.

Configure node or run the node-app/install-node.sh

Run the node application web.js (note this is configured for port 3000, so you'll need to update the security group with this port)



### Teardown
* Delete EC2 Instance
* Delete Security Group


### Resources
* https://hackernoon.com/tutorial-creating-and-managing-a-node-js-server-on-aws-part-1-d67367ac5171




### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation





