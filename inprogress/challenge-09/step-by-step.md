Challenge 09 - AWS SDK and EC2
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
	* http://localhost:3000/whoami - should see your credentials username



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
	* http://localhost:3000/whoami - should see an error

#### Create IAM Role for EC2 Instance

* Create a new IAM *Role* "NodeAppRole"  (see challenge 2-3)
* Ensure role has IAM GetUser permission (see challenge 2-3)
* Locate EC2 Instance in console
	* Righ click instance > Instance Settings > Attach IAM Role > Attach "NodeAppRole"

	
