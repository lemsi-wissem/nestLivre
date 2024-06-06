import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Livre')
    .setDescription('CRUD for Livre entity')
    .setVersion('1.0')
    .addServer('http://localhost:3000/', 'Local environment')
    .addTag('Livre')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('apis', app, document);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
