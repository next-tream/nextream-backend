/** @format */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
	imports: [TypeOrmModule.forFeature([User], 'postgres')],
	controllers: [UserController],
	providers: [UserService, UserRepository],
	exports: [UserRepository],
})
export class UserModule {}
