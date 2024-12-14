/** @format */

import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';

import { Transform } from 'class-transformer';

export class CreateUserDto {
	@IsNotEmpty()
	@IsString()
	nickname: string;

	@IsNotEmpty()
	@IsEmail()
	email: string;

	@IsNotEmpty()
	@IsString()
	password: string;

	@IsNotEmpty()
	@Transform(({ value }) => {
		return `+82${value.slice(1)}`;
	})
	@IsPhoneNumber('KR')
	phoneNumber: string;
}
