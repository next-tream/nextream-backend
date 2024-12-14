/** @format */

import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserRepository {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	private async checkDuplicate(field: keyof User, value: string): Promise<void> {
		const user = await this.userRepository.findOne({
			where: { [field]: value },
		});

		if (user) {
			throw new ConflictException(`${field} "${value}"는 이미 사용 중입니다.`);
		}
	}
}
