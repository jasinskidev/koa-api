import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Generated,
  OneToOne,
} from "typeorm";
import { Length, IsInt, Min, Max, IsDate } from "class-validator";
import Employee from './Employee';

@Entity("computers")
class Computer {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  @Generated("uuid")
  serialNumber!: string

  @Column()
  @Length(10, 20)
  cpu!: string

  @Column()
  @Length(10, 20)
  gpu!: string

  @Column()
  @IsInt()
  @Min(1)
  @Max(100)
  ram!: number

  @OneToOne(() => Employee)
  employee!: Employee

  @CreateDateColumn()
  @IsDate()
  createdAt!: Date
}

export default Computer;