/** @format */

import { Entity, ManyToMany, OneToMany } from 'typeorm';

import { BaseUser } from 'src/common/entity/base-user.entity';
import { Donation } from 'src/donation/entity/donation.entity';
import { Tag } from 'src/common/entity/tag.entity';
import { User } from 'src/user/entity/user.entity';

@Entity()
export class Streamer extends BaseUser {
	@ManyToMany(() => User, (user) => user.following)
	followers: User[];

	@OneToMany(() => Tag, (tag) => tag.streamer)
	tags: Tag[];

	@OneToMany(() => Donation, (donation) => donation.streamer)
	donations: Donation[];
}
