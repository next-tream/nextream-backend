/** @format */

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { UserModule } from 'src/user/user.module';
import { UserRepository } from 'src/user/user.repository';

@Module({
	imports: [TypeOrmModule.forFeature([User], 'postgres'), JwtModule.register({}), UserModule],
	controllers: [AuthController],
	providers: [AuthService, UserRepository],
})
export class AuthModule {}
