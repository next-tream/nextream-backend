/** @format */

import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

import { ConfigService } from '@nestjs/config';
import { Donation } from 'src/donation/entity/donation.entity';
import { Injectable } from '@nestjs/common';
import { Payment } from 'src/payment/entity/payment.entity';
import { SearchRecord } from 'src/user/entity/search-record.entity';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { Streamer } from 'src/streamer/entity/streamer.entity';
import { Tag } from '../entity/tag.entity';
import { User } from 'src/user/entity/user.entity';
import { VerificationCode } from 'src/user/entity/verification-code.entity';

@Injectable()
export class PostgreSQLConfig implements TypeOrmOptionsFactory {
	constructor(private readonly configService: ConfigService) {}

	createTypeOrmOptions(): TypeOrmModuleOptions {
		const isDev = this.configService.get<string>('ENV') === 'dev';

		return {
			type: 'postgres',
			host: this.configService.get<string>('POSTGRESQL_HOST'),
			port: this.configService.get<number>('POSTGRESQL_PORT'),
			username: this.configService.get<string>('POSTGRESQL_USERNAME'),
			password: this.configService.get<string>('POSTGRESQL_PASSWORD'),
			database: this.configService.get<string>('POSTGRESQL_DATABASE'),
			entities: [User, Streamer, VerificationCode, Tag, Payment, Donation, SearchRecord],
			synchronize: true,
			logging: false,
			namingStrategy: new SnakeNamingStrategy(),
			...(isDev && {
				ssl: {
					rejectUnauthorized: false,
				},
			}),
		};
	}
}
