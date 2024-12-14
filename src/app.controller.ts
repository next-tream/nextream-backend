/** @format */

import { Controller, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	getTeapot(): void {
		throw new HttpException("I'm a teapot", HttpStatus.I_AM_A_TEAPOT);
	}
}
