/** @format */

import { CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

import { Exclude } from 'class-transformer';

export class BaseTable {
	// serialization -> db에서 client 던질 때 제외시킴
	@CreateDateColumn()
	@Exclude()
	createdAt: Date;

	@UpdateDateColumn()
	@Exclude()
	updatedAt: Date;

	@VersionColumn()
	@Exclude()
	version: number;
}
