/** @format */

import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { ConfigModule } from '@nestjs/config';
import { DonationModule } from './donation/donation.module';
import { Module } from '@nestjs/common';
import { MongoDBConfig } from './common/configs/mongoDB.config';
import { PaymentModule } from './payment/payment.module';
import { PostgreSQLConfig } from './common/configs/postgreSQL.config';
import { StreamerModule } from './streamer/streamer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { validationSchema } from './common/configs/validation.schema';

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			validationSchema,
		}),

		TypeOrmModule.forRootAsync({
			name: 'mongo',
			useClass: MongoDBConfig,
		}),

		TypeOrmModule.forRootAsync({
			name: 'postgres',
			useClass: PostgreSQLConfig,
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
