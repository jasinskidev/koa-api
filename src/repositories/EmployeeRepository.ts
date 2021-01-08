import { AbstractRepository, EntityRepository } from "typeorm";
import Employee from "../entities/Employee";

@EntityRepository(Employee)
class EmployeeRepository extends AbstractRepository<Employee> {

}

export default EmployeeRepository;