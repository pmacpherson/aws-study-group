Challenge 08 - Billing Alarms and EC2
==================

Create a Billing Alarm to monitor your monthly expenses so there are no unexpected charges.

Start an EC2 instance and install a node application


### Explore Billing Dashboard

Found under top right menu under your username.

#### Billing Alarm

* Create a new alarm under Cloudwatch > Billing.  
* Notice at the top of this modal, you are automatically on the second step of:
	* 1. Select Metric - Defaults to 6 hours (Change this to hourly/daily/monthly threshold)
	* 2. Define Alarm
* Setup a notification with a dollar amount and with your email as the recipient.
* Note at the bottom of the modal there are additional views, a simple and an advanced view.  You can setup more advanced notifications on the advanced view.



#### Launch an EC2 Instance
We'll be launching an ec2 instance associated with the free tier.  Amazon provides an eligible ec2 instance for free ONLY the first year, after that you will be charged.

* EC2 > Launch Instance
	* Explore various Amazon Machine Images (AMI)
		* Choose "Ubuntu Server" (free tier eligible)
	* Explore various Instance Types
		* Choose General Purpose t2.micro (free tier eligible)
	* Configure Instance Details
		* Leave as is.
	* Add Storage
		* Leave as is.  Note, the storage assigned by default is associated with the ec2 instance.  When you tear down the ec2 instance, you will delete the default storage.  If you want to persist storage across ec2 instances, read more on the various storage types.
	* Add Tags
		* Leave as is.  This is useful for categorizing your aws entities for billing and identification purposes.
	* Configure Security Group
		* Assign a Security Group: Create
		* Security Group Name: "awsstudygroup-nodeapp"
		* The first line contains an SSH rule.  Change the Source to "My IP".  This will populate your current ip address into the field beside.  This useful for whitelisting who can SSH onto the box.  For now, we'll restrict access to only the office ip address.  If you are doing this from home, you can add your home ip address.
		* Add a new rule.  Allow HTTP port 80 from My IP.
	* Review Instance
		* Review
		* Click Launch
	* Associate a "Key Pair" so you can log onto the box
		* Create a new key pair
		* Give it the name awsstudygroup-nodeapp
		* Download the pem file and store this in a safe location.  If you lose this file, you will not be able to log onto the box.


#### View EC2 Instances

* Locate ec2 instance under EC2 > Instances
* Click on the ec2 instance and the bottom pane will show you more details.
	* Security Groups - this is the group we created during the launch.  If you want to add more rules, click on the group and modify the rules
	* Key Pair Name - this is the pem file we downloaded during the launch.  This helps identify what pem file is required to log onto the instance
	* IPv4 Public IP - the public ip address we'll use to connect to the box
* Right click on the ec2 instance and a right menu will pop up.
	* Instance State allows you to start,stop or delete instances
	* Connect - Gives you instructions on how to connect to the ec2 instance

#### Connect to EC2 Instance on MacOSX
* Open Terminal
* cd to the location of where you stored your pem file
* Ensure your pem file has proper permissions: chmod 400 awsstudygroup-nodeapp.pem
* ssh -i "awsstudygroup-nodeapp.pem" ubuntu@ipaddress
* You are now logged onto the ec2 instance via ssh.  To disconnect, run "exit"



#### Install Node on EC2 Instance
* Checkout the git repo: git clone https://github.com/KlickInc/aws-study-group.git
* cd ./aws-study-group/challenge-08/node-app
* ./install-node.sh
* npm -v (Confirm NPM is installed at version 3+)
* npm init (leave all the prompts as, and like the lambda challenges, a package.json file should be created)
* npm install express --save
* node web.js

#### Configure Port 3000
* If you read web.js, you'll see we're using port 3000.  In order to see this in your browser, you'll need to grant access to port 3000 for your ip address
* Back in AWS Console, navigate to the security group for the ec2 instance and add the rule:
	* Custom TCP Port - 3000 - My Ip
* In your local browser, http://[IPv4 Public IP of ec2 instance]:3000/




