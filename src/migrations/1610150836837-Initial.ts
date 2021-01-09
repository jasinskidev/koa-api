import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1610150836837 implements MigrationInterface {
    name = 'Initial1610150836837'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "departments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "floor" integer NOT NULL, "description" character varying NOT NULL, "email" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_839517a681a86bb84cbcc6a1e9d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employees" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "telephone" character varying NOT NULL, "email" character varying NOT NULL, "salary" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "departmentIdId" uuid, "computerIdId" uuid, CONSTRAINT "REL_7aae6f4ae2cff134a906baa986" UNIQUE ("computerIdId"), CONSTRAINT "PK_b9535a98350d5b26e7eb0c26af4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "computers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "serialNumber" uuid NOT NULL DEFAULT uuid_generate_v4(), "cpu" character varying NOT NULL, "gpu" character varying NOT NULL, "ram" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d755c706431be017ddf9fd5025a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_6ee983187995c85a0e266a8148a" FOREIGN KEY ("departmentIdId") REFERENCES "departments"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "employees" ADD CONSTRAINT "FK_7aae6f4ae2cff134a906baa9867" FOREIGN KEY ("computerIdId") REFERENCES "computers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_7aae6f4ae2cff134a906baa9867"`);
        await queryRunner.query(`ALTER TABLE "employees" DROP CONSTRAINT "FK_6ee983187995c85a0e266a8148a"`);
        await queryRunner.query(`DROP TABLE "computers"`);
        await queryRunner.query(`DROP TABLE "employees"`);
        await queryRunner.query(`DROP TABLE "departments"`);
    }

}
