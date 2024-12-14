/** @format */

import { Column, PrimaryGeneratedColumn } from 'typeorm';

import { BaseTable } from 'src/common/entity/base-table.entity';

export class Message extends BaseTable {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	message: string;

	@Column()
	timestamp: Date;
}
