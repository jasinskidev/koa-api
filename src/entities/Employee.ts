import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn
} from "typeorm";
import { IsDate, IsEmail, IsInt, Length } from "class-validator";
import { Computer } from './Computer';
import { Department } from './Department';

@Entity("employees")
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  @Length(10, 30)
  firstName!: string

  @Column()
  @Length(10, 30)
  lastName!: string

  @Column()
  @Length(9, 15)
  telephone!: string

  @Column()
  @Length(5, 50)
  @IsEmail()
  email!: string

  @ManyToOne(() => Department, department => department.employees)
  departmentId!: Department

  @OneToOne(() => Computer)
  @JoinColumn()
  computerId!: Computer

  @Column()
  @IsInt()
  salary!: number

  @CreateDateColumn()
  @IsDate()
  createdAt!: Date
}