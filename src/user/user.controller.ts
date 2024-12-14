/** @format */

import { Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	// @Post('signup')
	// async createUser(@Body() createUserDto: CreateUserDto) {
	// 	return await this.userService.createUser(createUserDto);
	// }
}
