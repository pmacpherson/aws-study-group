Challenge 09 - AWS SDK and Configuration
==================

### Local development setup

* cd node-app/
* update aws.json with AWS access keys (see challenge 02)
* update config.json, set aws to "./aws.json"
* npm install
* node web.js
* check console and see if aws credentials are being loaded
* in your local browser, hit 
	* http://localhost:3000/ - should see hello world
	* http://localhost:3000/users - should see the total number of users

### EC2 setup
PreRequiste: Challenge 08 - Launching an EC2 instance.

* cd node-app/
* delete the file aws.json
* update config.json, set aws to null
* npm install
* node web.js
* check console and see if aws credentials are NOT being loaded
* in your local browser, hit 
	* http://localhost:3000/ - should see hello world
	* http://localhost:3000/users - should see an error, we'll fix this below


#### Create IAM Role

* Create a new IAM *Role* "NodeAppRole"
	* AWS Service > EC2 > EC2 - Allows EC2 instances to call AWS services on your behalf.
	* Don't add any managed policies, just continue and create
* Ensure role has IAM ListUsers permission
	* Edit the role again and attach an inline policy
	* Service: IAM
	* Action: ListUser
	* Resources: All
	* Create
* Review Role - Ensure IAM ListUsers is attached to role


#### Attach IAM Role for EC2 Instance
* Locate EC2 Instance in console
	* Right click instance > Instance Settings > Attach IAM Role > Attach "NodeAppRole"


