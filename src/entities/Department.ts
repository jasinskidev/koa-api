import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany
} from "typeorm";
import { Employee } from './Employee';

@Entity("departments")
export class Department {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column("varchar", { length: 30 })
  name!: string

  @Column()
  floor!: number

  @Column("varchar", { length: 50 })
  description!: string

  @Column("varchar", { length: 30 })
  email!: string

  @OneToMany(() => Employee, employee => employee.departmentId)
  employees!: Employee[]

  @CreateDateColumn()
  createdAt!: Date
}