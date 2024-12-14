/** @format */

import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { BaseTable } from 'src/common/entity/base-table.entity';
import { User } from './user.entity';

@Entity('verification_code')
export class VerificationCode extends BaseTable {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	code: number;

	@Column()
	expiresAt: Date;

	@OneToOne(() => User, (user) => user.verificationCode)
	user: User;
}
