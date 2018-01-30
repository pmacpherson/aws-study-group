# Challenge 11 - Serverless Framework

![Serverless Framework](https://camo.githubusercontent.com/b52d19ed03e87e155987ef9136997a08d5d8e95a/68747470733a2f2f7261776769742e636f6d2f6a7573747365727665726c6573732f617765736f6d652d7365727665726c6573732f6d61737465722f6c6f676f2d7365727665726c6573732e6a7067)

Create a 100% servereless solution for a static website that can handle secure form submissions that get stored in a DynamoDB.
* 1x Page App
  - Hosted on S3 `Static Website Hosting`
* 1x Lambda Form Handler
* 1x DynamoDB Table (UsersTBL)

### Prerequisites 
* AWS CLI `~1.11.x` (with creds setup in env or .config)
* Node/NPM `~6.11.x`
* Serverless Framework `>=1.9.0 <2.0.0`

### Challenge Setup
0. [Watch this short video][video-sls-explained] on the Serverless Framework

1. Install the Severless Framework
    * `npm install -g serverless`

2. Test the short form of serverless framework cli
    * `sls --version`

3. Implement the [functions][link-sls-functions] section of the `./serverless.yml` to setup `./functions/formHandler/handler.js` to be the formHandler for the `./index.html` form.
    * The function should be triggered by the `http` event.
    * To test the function, use [sls logging][link-sls-logs] to tail the CloudWatch logs directly to your cli.

4. Using [CloudFormation yml][link-cfn-s3], build a single S3 bucket in the `Resources` section, using a dynamic bucket name.

5. Implement the DynamoDB Table by linking to the `./resources/database/user-tbl.yml` file in the Resources section using yml [external configuration file][link-sls-extfile].

6. Use the [CloudFormation Output][link-cfn-outputs] section to create two stack outputs, `WebSiteUrl` and `WebSiteBucket`. The values should be the S3 website endpoint and the S3 bucket name respectively.

7. Use SLS to deploy your stack
    * `sls deploy --stage dev`

### For Extra Marks
* (1 Point) Watch [this Serverless Framework video][video-sls-talk] all the way thru `1:02:20`
* (1 Point) Setup the permissions so that specifically *only* this one function can call the lambda
* (2 Points) Implement the [serverless-scriptable-plugin][link-plugin-scriptable] and the `./scripts/deploy_static_files.sh` to automate uploading assets to S3 during `sls deploy`
* (3 Points) Implement a CloudFront Distro with HTTP->HTTPS redirects, that is the only thing allowed to access the S3 bucket.
* (5 Points) Break your Frontend, and API resources into 2x stacks, where the Frontend stack references the API stack via [SLS CFN Outputs][link-sls-cfn]
* (10 Points) Implement a Lambda@Edge that can rewrite the incoming CF requests for all site routes to the S3 `index.html`, but excluding assets.
* (20 Points) Implement a WAF to whitelist the Distro public access to KlickNet (`38.99.136.178/32`) only.

### Teardown

1. Use the AWS console to emtpy your website bucket. 

2. `sls remove`

### Questions

* Q: What if I want to prevent direct access to all S3 assets / bucket?
    * A: [Origin Access Identity][link-cfn-oai] applied to the CF Distro works great for this.
* Q: What if I want to only allow access to the site from within Klick? 
    * A: AWS [Web Application Firewall][link-cfn-waf] (WAF) is great for this.
* Q: What if I want to add my build step to `sls deploy`
    * A: [serverless-scriptable-plugin][link-plugin-scriptable] works great for this, and for triggering those build assets to upload to S3.
* Q: What if I want to transcode the function JS?
    * A: [serverless-webpack][link-plugin-webpack] is a great SLS plugin for this.

[link-sls]: http://www.serverless.com/
[link-sls-docs]: https://serverless.com/framework/docs/providers/aws/guide/intro/
[link-sls-functions]: https://serverless.com/framework/docs/providers/aws/guide/functions/
[link-sls-resources]: https://serverless.com/framework/docs/providers/aws/guide/resources/
[link-sls-variables]: https://serverless.com/framework/docs/providers/aws/guide/variables/
[link-sls-extfile]: https://serverless.com/framework/docs/providers/aws/guide/variables#multiple-configuration-files
[link-sls-logs]: https://serverless.com/framework/docs/providers/aws/cli-reference/logs/
[link-cfn-ddb]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html
[link-cfn-s3]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket.html
[link-cfn-outputs]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html
[link-sls-cfn]: https://serverless.com/framework/docs/providers/aws/guide/variables#reference-cloudformation-outputs

[link-cfn-oai]: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html
[link-cfn-waf]: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-waf-webacl.html
[link-plugin-scriptable]: https://github.com/weixu365/serverless-scriptable-plugin
[link-plugin-webpack]: https://github.com/serverless-heaven/serverless-webpack

[video-sls-talk]: https://www.youtube.com/watch?v=QsKvoluwqJw
[video-sls-explained]: https://www.youtube.com/watch?v=wP7a9IosX3g
