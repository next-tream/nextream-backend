/** @format */

import { BaseTable } from 'src/common/entity/base-table.entity';
import { PrimaryGeneratedColumn } from 'typeorm';

export class Room extends BaseTable {
	@PrimaryGeneratedColumn()
	id: number;
}
