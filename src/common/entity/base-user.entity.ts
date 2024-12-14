/** @format */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { BaseTable } from './base-table.entity';

@Entity()
export abstract class BaseUser extends BaseTable {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	email: string;

	@Column({ nullable: true })
	password?: string;

	@Column({ unique: true })
	nickname: string;

	@Column({ nullable: true })
	imageUrl?: string;

	@Column('decimal', { precision: 10, scale: 2, default: 0.0 })
	point: number;

	@Column({ nullable: true })
	introduce?: string;
}
