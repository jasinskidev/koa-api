import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn
} from "typeorm";
import { Computer } from './Computer';
import { Department } from './Department';

@Entity("employees")
export class Employee {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar", { length: 50 })
  firstName!: string

  @Column("varchar", { length: 50 })
  lastName!: string

  @Column("varchar", { length: 12 })
  telephone!: string

  @Column("varchar", { length: 30 })
  email!: string

  @ManyToOne(() => Department, department => department.employees)
  departmentId!: Department

  @OneToOne(() => Computer)
  @JoinColumn()
  computerId!: Computer

  @Column()
  salary!: number

  @CreateDateColumn()
  createdAt!: Date
}