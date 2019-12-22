import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import * as mongoose from 'mongoose';

async function bootstrap() {
  mongoose.connect('mongodb://localhost/nest-blog-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })

  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('NestJs 博客API111')
    .setDescription('我的第一个NestJs项目')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
