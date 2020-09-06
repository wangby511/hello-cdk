# Welcome to your CDK TypeScript project!

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`HelloCdkStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Trouble shooting
### Compile error: Argument of type 'this' is not assignable to parameter of type 'Construct'

Fix: 
Try to upgrade everything to latest version. https://github.com/aws/aws-cdk/issues/542
Upgrade all the dependencies to @1.61.1 Ex: npm i @aws-cdk/aws-sqs@1.61.1

 ## Reference
 [1] https://docs.aws.amazon.com/cdk/latest/guide/hello_world.html
 [2] https://docs.aws.amazon.com/cdk/latest/guide/ecs_example.html

