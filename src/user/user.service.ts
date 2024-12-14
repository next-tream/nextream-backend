/** @format */

// import { CreateUserDto } from './dto/create-user.dto';
import { Injectable, UseGuards } from '@nestjs/common';

import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
	constructor(private readonly userRepository: UserRepository) {}

	async createUser(user: CreateUserDto) {
		await this.userRepository.findEmail(user.email);
	}
}
