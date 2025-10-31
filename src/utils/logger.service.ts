import { Injectable, LoggerService } from '@nestjs/common';
import chalk from 'chalk';

@Injectable()
export class LoggerMonitors implements LoggerService {
  private pid = process.pid;

  log(message: string, context: string = 'APP') {
    console.log(
      chalk.green('[Nest]') +
        ' ' +
        chalk.green(this.pid) +
        ' - ' +
        chalk.white(this.getTimestamp()) +
        ' ' +
        chalk.green('LOG') +
        ' ' +
        chalk.bgBlack.yellow.underline(`[${context}]`) +
        ' ' +
        chalk.greenBright(message),
    );
  }

  debug(message: string, context: string = 'APP') {
    console.debug(
      chalk.hex('#e07bff')('[Nest]') +
        ' ' +
        chalk.hex('#e07bff')(this.pid) +
        ' - ' +
        chalk.white(this.getTimestamp()) +
        ' ' +
        chalk.hex('#e07bff')('DEBUG') +
        ' ' +
        chalk.bgBlack.yellow.underline(`[${context}]`) +
        ' ' +
        chalk.hex('#e07bff')(message),
    );
  }

  warn(message: string, context: string = 'APP') {
    console.warn(
      chalk.green('[Nest]') +
        ' ' +
        chalk.yellow(this.pid) +
        ' - ' +
        chalk.white(this.getTimestamp()) +
        ' ' +
        chalk.yellow('WARN') +
        ' ' +
        chalk.bgBlack.yellow.underline(`[${context}]`) +
        ' ' +
        chalk.yellow(message),
    );
  }

  error(message: string, trace?: string, context: string = 'APP') {
    console.error(
      chalk.red('[Nest]') +
        ' ' +
        chalk.red(this.pid) +
        ' - ' +
        chalk.white(this.getTimestamp()) +
        ' ' +
        chalk.red('ERROR') +
        ' ' +
        chalk.bgBlack.yellow.underline(`[${context}]`) +
        ' ' +
        chalk.red(message),
    );
    if (trace) {
      console.error(chalk.red(trace));
    }
  }

  private getTimestamp(): string {
    // Format: MM/DD/YYYY, hh:mm:ss A
    const now = new Date();
    const date = now.toLocaleDateString('en-US');
    const time = now.toLocaleTimeString('en-US', { hour12: true });
    return `${date}, ${time}`;
  }
}
