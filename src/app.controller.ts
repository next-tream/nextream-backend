/** @format */

import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	// getTeapot(): void {
	// 	throw new HttpException("I'm a teapot", HttpStatus.I_AM_A_TEAPOT);
	// }
	healthCheck(): string {
		return 'OK'; // HTTP 200 반환
	}
}
