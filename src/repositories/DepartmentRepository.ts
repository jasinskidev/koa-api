import { AbstractRepository, EntityRepository } from "typeorm";
import Department from './../entities/Department';

@EntityRepository(Department)
class DepartmentRepository extends AbstractRepository<Department> {

}

export default DepartmentRepository;