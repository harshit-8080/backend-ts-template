import winston from 'winston';
import { CONFIG } from '.';

export const logger = winston.createLogger({
  level: CONFIG.LOG_LEVEL,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json(),
  ),
  defaultMeta: { service: 'auth-service' },
  transports: [
    new winston.transports.File({
      dirname: 'logs',
      filename: 'application.log',
      silent: CONFIG.ENVIROMENT == 'test',
    }),
    new winston.transports.Console({
      silent: CONFIG.ENVIROMENT == 'test' || CONFIG.ENVIROMENT == 'production',
      //   format: winston.format.simple(),
    }),
  ],
});
