/** @format */

import * as ffmpeg from '@ffmpeg-installer/ffmpeg';
import * as ffmpegFluent from 'fluent-ffmpeg';
import * as ffprobe from 'ffprobe-static';

import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

// ffmpeg 사용법
ffmpegFluent.setFfmpegPath(ffmpeg.path);
ffmpegFluent.setFfprobePath(ffprobe.path);

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			transform: true,
		}),
	);
	await app.listen(process.env.PORT || 8080);
}
bootstrap();
