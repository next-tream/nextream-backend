/** @format */

import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne } from 'typeorm';

import { BaseUser } from 'src/common/entity/base-user.entity';
import { Donation } from 'src/donation/entity/donation.entity';
import { EUser } from 'src/common/enums/user.enum';
import { EUserColor } from 'src/common/enums/user-color.enum';
import { Payment } from 'src/payment/entity/payment.entity';
import { SearchRecord } from './search-record.entity';
import { Streamer } from 'src/streamer/entity/streamer.entity';
import { Tag } from 'src/common/entity/tag.entity';
import { VerificationCode } from './verification-code.entity';

@Entity()
export class User extends BaseUser {
	@Column({
		type: 'enum',
		enum: EUser,
		default: EUser.Local,
	})
	accountType: EUser;

	@Column({ unique: true })
	phoneNumber: string;

	@Column({
		type: 'enum',
		enum: EUserColor,
	})
	color: EUserColor;

	@ManyToMany(() => Streamer, (streamer) => streamer.followers)
	@JoinTable()
	following: Streamer[];

	@Column({ default: false })
	isVerified: boolean;

	@OneToOne(() => VerificationCode, (verificationCode) => verificationCode.user)
	@JoinColumn()
	verificationCode: VerificationCode;

	@OneToMany(() => Tag, (tag) => tag.user)
	tags: Tag[];

	@OneToMany(() => Payment, (payment) => payment.user)
	payments: Payment[];

	@OneToMany(() => Donation, (donation) => donation.user)
	donations: Donation[];

	@OneToMany(() => SearchRecord, (searchRecord) => searchRecord.user)
	searchRecords: SearchRecord[];
}
