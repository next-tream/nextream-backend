/** @format */

import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { ConfigModule } from '@nestjs/config';
import { DonationModule } from './donation/donation.module';
import { Module } from '@nestjs/common';
import { PaymentModule } from './payment/payment.module';
import { StreamerModule } from './streamer/streamer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { postgreSQLConfig } from './common/configs/postgreSQLConfig';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validationSchema: Joi.object({
				ENV: Joi.string().valid('test', 'dev', 'prod').required(),
				DB_TYPE: Joi.string().valid('postgres').required(),
				DB_HOST: Joi.string().required(),
				DB_PORT: Joi.number().required(),
				DB_USERNAME: Joi.string().required(),
				DB_PASSWORD: Joi.string().required(),
				DB_DATABASE: Joi.string().required(),
				HASH_ROUND: Joi.number().required(),
				ACCESS_TOKEN_SECRET: Joi.string().required(),
				REFRESH_TOKEN_SECRET: Joi.string().required(),
			}),
		}),

		// MongooseModule.forRoot(
		// 	'mongodb+srv://jiseung:jiseung@nextreammongo.cyxpq.mongodb.net/?retryWrites=true&w=majority&appName=NextreamMongo',
		// ),

		TypeOrmModule.forRootAsync({
			useClass: postgreSQLConfig,
		}),

		ChatModule,

		UserModule,

		StreamerModule,

		PaymentModule,

		DonationModule,

		AuthModule,
	],
	controllers: [AppController],
})
export class AppModule {}
