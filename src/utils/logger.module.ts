import { Module } from '@nestjs/common';
import { LoggerMonitors } from './logger.service';

@Module({
  providers: [LoggerMonitors],
  exports: [LoggerMonitors],
})
export class LoggerModule {}
