/** @format */

import { DonationController } from './donation.controller';
import { DonationService } from './donation.service';
import { Module } from '@nestjs/common';

@Module({
	controllers: [DonationController],
	providers: [DonationService],
})
export class DonationModule {}
