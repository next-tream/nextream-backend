/** @format */

import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MongoDBConfig implements TypeOrmOptionsFactory {
	constructor(private readonly configService: ConfigService) {}

	createTypeOrmOptions(): TypeOrmModuleOptions {
		return {
			type: 'mongodb',
			url: this.configService.get<string>('MONGO_DB_URI'),
			database: this.configService.get<string>('MONGO_DB_DATABASE'),
			autoLoadEntities: true,
			synchronize: true,
			logging: true,
		};
	}
}
