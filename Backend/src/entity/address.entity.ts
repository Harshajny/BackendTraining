import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import AbstractEntity from "./abstract.entity";
import Employee from "./Employee.entity";
@Entity()
class Address extends AbstractEntity {
  @Column()
  line1: string;

  @Column()
  pincode: string;

  @OneToOne(() => Employee, (employee) => employee.address)
  @JoinColumn()
  employee: Employee;
}

export default Address;
