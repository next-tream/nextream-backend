/** @format */

import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Streamer } from 'src/streamer/entity/streamer.entity';
import { User } from 'src/user/entity/user.entity';

@Entity()
export class Donation {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User, (user) => user.donations)
	user: User;

	@ManyToOne(() => Streamer, (streamer) => streamer.donations)
	streamer: Streamer;

	@Column('decimal', { precision: 10, scale: 2 })
	amount: number;

	@CreateDateColumn()
	createdAt: Date;
}
