/** @format */

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Streamer } from 'src/streamer/entity/streamer.entity';
import { User } from 'src/user/entity/user.entity';

@Entity()
export class Tag {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	tag: string;

	@ManyToOne(() => User, (user) => user.tags)
	user: User;

	@ManyToOne(() => Streamer, (streamer) => streamer.tags)
	streamer: Streamer;
}
