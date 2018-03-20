Challenge 13 - An Introduction to AWS Elastic Beanstalk
==================

Create an Elastic Beanstalk environment and deploy a new version of an application.

### Create a new Elastic Beanstalk environment:

#### Create a new application and environment
Create a new application (i.e. called "aws-study-group-app") and a new web server environment for a NodeJS application (called "aws-study-group-env")

Upload an existing Node application or select the opton to the sample application.

#### View the environment status
Once the environment creation has completed verify the health of the environment on the dashboard, check the events, download the logs and look for the log for eb-activity.log. Verify that there were no errors.


#### Test your newly created environment
Go to the URL provided to verify that your application is working. If you used the sample application, a sample web page will be displayed.


### Modify and deploy and application

#### Modify your application
If you used the sample application, you can download it here: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/tutorials.html

Modify the home page. For example, replace the word Congratulations with "Hello World"

#### Redeploy the updated application
Redeploy your changes to the new environment.

#### Verify the change
Refresh the URL in a browser and verify that the change is displayed.

#### View application versions
View the application versions and verify that the second version you uploaded is there.


### Teardown
* Terminate the environment
* Delete the application

### Homework
* Download and install the AWS EB CLI
* Perform all the above with the EB CLI
* https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/eb3-cmd-commands.html

# Additional Resources
https://docs.aws.amazon.com/quickstarts/latest/webapp/welcome.html?icmpid=docs_eb_console_new


### Challenge Difficulty
Skill | Use
---:|:---
Beginner | Use AWS Console
Intermediate | Use AWS CLI
Advanced |

### Questions:

* What is AWS Elastic Beanstalk?
* What tech stacks are supported by AWS Elastic Beanstalk?
* How do you view logs?
* Where are different application versions stored?

