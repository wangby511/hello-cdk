#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { HelloCdkStack } from '../lib/hello-cdk-stack';
import { FargateSQSCdkStack } from '../lib/my_ecs_construct-stack'

const app = new cdk.App();
new HelloCdkStack(app, 'HelloCdkStack');
new FargateSQSCdkStack(app, 'FargateSQSCdkStack');
