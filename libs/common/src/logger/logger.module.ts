import { Module } from '@nestjs/common';
import { LoggerModule as PinoLoggerMdoule } from 'nestjs-pino';

@Module({
  imports: [
    PinoLoggerMdoule.forRoot({
      pinoHttp: {
        transport: {
          target: "pino-pretty",
          options: {
            singleLine: true,
          },
        },
      },
    }),
  ],
})
export class LoggerModule {}
