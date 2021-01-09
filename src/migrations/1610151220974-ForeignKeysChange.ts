import {MigrationInterface, QueryRunner} from "typeorm";

export class ForeignKeysChange1610151220974 implements MigrationInterface {
    name = 'ForeignKeysChange1610151220974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_6ee983187995c85a0e266a8148a"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_7aae6f4ae2cff134a906baa9867"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "departmentIdId"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "REL_7aae6f4ae2cff134a906baa986"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "computerIdId"`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "departmentId" uuid`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "computerId" uuid`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "UQ_897aba6326f4b1ea4e3f4292e37" UNIQUE ("computerId")`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_4edfe103ebf2fcb98dbb582554b" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_897aba6326f4b1ea4e3f4292e37" FOREIGN KEY ("computerId") REFERENCES "computers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_897aba6326f4b1ea4e3f4292e37"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_4edfe103ebf2fcb98dbb582554b"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "UQ_897aba6326f4b1ea4e3f4292e37"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "computerId"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP COLUMN "departmentId"`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "computerIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "REL_7aae6f4ae2cff134a906baa986" UNIQUE ("computerIdId")`);
        await queryRunner.query(`ALTER TABLE "employees" ADD "departmentIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_7aae6f4ae2cff134a906baa9867" FOREIGN KEY ("computerIdId") REFERENCES "computers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_6ee983187995c85a0e266a8148a" FOREIGN KEY ("departmentIdId") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
