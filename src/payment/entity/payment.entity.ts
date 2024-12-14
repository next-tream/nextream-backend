/** @format */

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { BaseTable } from 'src/common/entity/base-table.entity';
import { ChargeStatus } from '../enum/chargeStatus.enum';
import { User } from 'src/user/entity/user.entity';

@Entity()
export class Payment extends BaseTable {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User, (user) => user.payments)
	user: User;

	@Column('decimal', { precision: 10, scale: 2 })
	amount: number;

	@Column()
	paymentMethod: string;

	@Column({ unique: true })
	paymentId: string;

	@Column({
		type: 'enum',
		enum: ChargeStatus,
		default: ChargeStatus.PENDING,
	})
	status: ChargeStatus;
}
