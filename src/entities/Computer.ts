import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Generated,
  OneToOne,
} from "typeorm";
import { Employee } from './Employee';

@Entity("computers")
export class Computer {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  @Generated("uuid")
  serialNumber!: string

  @Column("varchar", { length: 50 })
  cpu!: string

  @Column("varchar", { length: 50 })
  gpu!: string

  @Column()
  ram!: number

  @OneToOne(() => Employee)
  employeeId!: Employee

  @CreateDateColumn()
  createdAt!: Date
}