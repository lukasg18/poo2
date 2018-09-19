import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Rotas do projeto')
    .setDescription('todas as rotas referentes ao trabalho')
    .setVersion('1.0')
    .addTag('poo')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('', app, document);


  await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
