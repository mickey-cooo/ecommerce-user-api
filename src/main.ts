import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import { LoggerMonitors } from './utils/logger.service';

async function bootstrap() {
  const logger = new LoggerMonitors();
  const app = await NestFactory.create(AppModule, {
    logger: logger,
  });

  const config = new DocumentBuilder()
    .setTitle('Api Documentation')
    .setDescription('This is Api Documentation')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory());

  app.use(helmet());
  const port = process.env.PORT || 8080;
  await app.listen(port);
  logger.log(`Server is running on port ${port}`, 'Bootstrap');
}
bootstrap();
