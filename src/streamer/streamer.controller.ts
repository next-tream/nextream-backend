/** @format */

import { Controller } from '@nestjs/common';
import { StreamerService } from './streamer.service';

@Controller('streamer')
export class StreamerController {
	constructor(private readonly streamerService: StreamerService) {}
}
