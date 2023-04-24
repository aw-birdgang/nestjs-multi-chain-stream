import * as dotenv from 'dotenv';
import * as fs from 'fs';
// import AWS from 'aws-sdk';
const AWS = require("aws-sdk");
import { Logger } from '@nestjs/common';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  private readonly logger = new Logger(ConfigService.name);

  constructor() {
    const envFile =
      process.env.NODE_ENV === 'production'
        ? '.env.prod'
        : process.env.NODE_ENV === 'development'
        ? '.env.dev'
        : '.env';

    this.logger.log("envFile > process.env.NODE_ENV :: " + process.env.NODE_ENV);

    this.envConfig = dotenv.parse(fs.readFileSync(envFile));

    const awsAccessKeyId = this.get('AWS_ACCESS_KEY_ID');
    const awsSecretAccessKeyId = this.get('AWS_SECRET_ACCESS_KEY');
    const awsOrigin = this.get('ORIGIN');

    const config = new AWS.Config();
    config.update({
      accessKeyId: awsAccessKeyId,
      secretAccessKey: awsSecretAccessKeyId,
      region: awsOrigin,
    });
  }

  get(key: string): string {
    return this.envConfig[key];
  }

  isEnv(env: string): boolean {
    return this.nodeEnv === env;
  }

  get nodeEnv(): string {
    return process.env.NODE_ENV || 'development';
  }
}
