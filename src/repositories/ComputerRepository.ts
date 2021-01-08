import { AbstractRepository, EntityRepository } from "typeorm";
import Computer from './../entities/Computer';

@EntityRepository(Computer)
class ComputerRepository extends AbstractRepository<Computer> {

}

export default ComputerRepository;