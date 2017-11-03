Challenge 01 - AWS S3
==================

Create a static website hosted within AWS S3 with access logs and version control enabled.


### Upload files to S3
* Using AWS Console, create a new S3 bucket to store public files. eg 2017-pmacpherson-public
* Upload the files from "site" folder
* Open index.html in your browser from the S3 bucket
* Play with permissions to make this file public and private.


### Enable Access Logs on S3
* Create a new S3 bucket to host access logs.  eg 2017-pmacpherson-logs
* Modify the public S3 bucket by enabling Server access logging using your log bucket.  
https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerLogs.html
* Note: Logs are not real-time, so it may take some time before they arive
* Sample Logging content:
3f9d4b274c80cb78abd52c27b5d2d836b20156fdd752880e6d3fc8d5183ca854 tricia-test [27/Oct/2017:02:22:59 +0000] 135.23.65.186 arn:aws:iam::199462013949:user/pmacpherson 9AD486EE58277690 REST.GET.LOGGING_STATUS - "GET /tricia-test?logging= HTTP/1.1" 200 - 241 - 50 - "-" "S3Console/0.4, aws-internal/3" -


### Create a static website in S3
* Enable static website hosting on the public S3 bucket
* Access static website via website address.


### Enable Versions on S3
* Enable Versioning on the public S3 bucket.
* Replace site/picture.jpg with site2/picture.jpg
* Find and list all versions in S3
* Delete the latest version of picture.jpg and revert back to the original.



### Teardown
* Delete S3 buckets


### Challenge Difficulty 
Skill | Use
---:|:---
Beginner | Use AWS Console website
Intermediate | Use AWS CLI
Advanced | Use AWS Cloudformation


### Questions:

* What is AWS S3 ?
* How is data organized in S3?
* What can we use S3 for?
* What is a bucket?  What is the scope of bucket names?
* What is an object?
* What is a key?
* What permissions are needed to make an object publicly accessible?
* When will access logs be added to the logging bucket?
* What is the benefit of enabling static website hosting?
* What are the three different urls we can use to access an object?
* How many versions of picture.jpg do we have?  What are the version id's for each object?



