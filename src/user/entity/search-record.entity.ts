/** @format */

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './user.entity';

@Entity('search_record')
export class SearchRecord {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	searchKeyword: string;

	@Column()
	searchDate: Date;

	@ManyToOne(() => User, (user) => user.searchRecords)
	user: User;
}
