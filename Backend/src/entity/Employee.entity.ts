import { Column, Entity, OneToOne } from "typeorm";
import AbstractEntity from "./abstract.entity";
import Address from "./address.entity";
@Entity()
class Employee extends AbstractEntity {
  @Column()
  name: string;
  @Column()
  email: string;

  @OneToOne(() => Address, (address) => address.employee, {
    cascade: true,
    onDelete: "CASCADE",
  })
  address: Address;
}
export default Employee;
