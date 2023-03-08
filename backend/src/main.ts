import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = await app.get(ConfigService)
	// const PORT = Number(config.get<number>('BACKEND_PORT')) || 3000
	const PORT = 3000
  
  await app.listen(PORT, () => {
    console.log(`The server started on port ${PORT}`)
  });
}
bootstrap();
