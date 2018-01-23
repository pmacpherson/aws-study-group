# Challenge 11 - Serverless Framework

Create a 100% servereless solution for a website that can handle secure form submissions and that get stored in a DB.

### Resources

* [Serverless Framework Docs][link-sls-docs]

functions:

resources:

publish:

### Questions

* What if I want to prevent direct access to all S3 assets / bucket?
* What if I want to only allow access to the site from within Klick?
* What if I want to add my build step to `sls deploy`
* What if I want to transcode the function JS?
* What are SLS plugins?

### Teardown

`sls remove`

[link-sls]: http://www.serverless.com/
[link-sls-docs]: https://serverless.com/framework/docs/providers/aws/guide/intro/
[link-sls-resources]: https://serverless.com/framework/docs/providers/aws/guide/resources/
[link-sls-variables]: https://serverless.com/framework/docs/providers/aws/guide/variables/
[link-sls-logs]: https://serverless.com/framework/docs/providers/aws/cli-reference/logs/
[link-cfn-ddb]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html
[link-cfn-s3]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html
