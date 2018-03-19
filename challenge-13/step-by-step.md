Challenge 13 - An Introduction to AWS Elastic Beanstalk
==================

Create an Elastic Beanstalk environment and deploy a new version of an application.

### Create a new Elastic Beanstalk environment:

#### Create a new application and environment
Create a new application (i.e. called "aws-study-group-app") and a new web server environment for a NodeJS application (called "aws-study-group-app-env")

1. Go to the Elastic beanstalk Management page:
    Services >> Elastic Beanstalk
2. Click on the "Create New Application" link in the top right corner
3. In the modal, enter a value for Application Name: "aws-study-group-app"
4. Click on the "Create" button
5. On the page that follows, click on the "Create one now" link.
6. In the modal that appears, make sure "Web server environment" option is selected. Click on the "Select" button.
7. On the "Create a new environment" page, verify the prefilled value for Environment name: "aws-study-group-app-env"
8. Under the "Base Configuration" section, select Preconfigured platform for the Platform.
9. Click on the drop down box, "Choose a platform" and select "Node.js"
10. Under Application code, select "Sample application" or "Upload your code" if you would like to upload your own Node application (which should be zipped up into a single file)
11. Click the "Create environment" button at the bottom. You should see a page that displays the logs while your environment is being created. This may take a few minutes to complete.

#### View the environment status
Once the environment creation has completed verify the health of the environment on the dashboard, check the events, download the logs and look for the log for eb-activity.log. Verify that there were no errors.

1. On the environment page, there is a side menu on the left. Click on Dashboard. Verify that there is a green checkmark image and the Health status is "OK"
2. Click on the "Events" menu link. View the events to verify there were no error events.
3. Click on the "Logs" menu link.
4. Click the "Request Button" button on the top right, and select "Last 100 Lines" in the drop down.
5. A row will be added to the grid, with a "Download" link. Click on the link.
6. A new page will open displaying the last 100 lines of several logs. Look for the log title, "/var/log/eb-activity.log". This is where the activity for setting up the environment is logged. Verify that there were no errors.
7. Back on the management console, click on Events in the side menu on the left. This will also display

#### Test your newly created environment
Go to the URL provided to verify that your application is working. If you used the sample application, a sample web page will be displayed.

1. At the top of the page, next to the environment name, "aws-study-group-env", there is a URL link in smaller text. Click on this link to open the home page for your app.
2. Verify that your page is displayed properly. If you selected the sample application, a sample page is displayed.


### Modify and deploy and application

#### Modify your application
If you used the sample application, you can download it here: https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/tutorials.html

Modify the home page. For example, replace the word Congratulations with "Hello World"

#### Redeploy the updated application
Redeploy your changes to the new environment.

1. Zip up your application files with your changes.
2. On the the management console dashboard page for your environment, there is a button, "Upload and Deploy". Click on this button.
3. Click on the "Choose File" button to upload the zip file.
4. Enter a value for the "Version label": "Version 0.1"
5. Click on the Deploy button.

#### Verify the change
Refresh the URL in a browser and verify that the change is displayed.

1. Go back to the URL to display the application home page.
2. Verify that your change is visible.

#### View application versions
View the application versions and verify that the second version you uploaded is there.

1. On the management console page, click on the link at the top for your application name, "aws-study-group-app".
2. The application page will be displayed. On the side menu on the left, click on the "Application versions" link.
3. Verify that the new version you uploaded is listed with the version label you entered, and that is deployed to your environment.
