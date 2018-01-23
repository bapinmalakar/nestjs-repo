import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { Response } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	await app.listen(3000);
}

bootstrap();
