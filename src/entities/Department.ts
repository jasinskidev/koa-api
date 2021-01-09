import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany
} from "typeorm";
import { IsDate, IsEmail, IsInt, Length, Max, Min } from "class-validator";
import Employee from './Employee';

@Entity("departments")
class Department {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  @Length(10, 20)
  name!: string

  @Column()
  @IsInt()
  @Min(0)
  @Max(15)
  floor!: number

  @Column()
  @Length(5, 50)
  description!: string

  @Column()
  @Length(5, 50)
  @IsEmail()
  email!: string

  @OneToMany(() => Employee, employee => employee.department)
  employees!: Employee[]

  @CreateDateColumn()
  @IsDate()
  createdAt!: Date
}

export default Department;