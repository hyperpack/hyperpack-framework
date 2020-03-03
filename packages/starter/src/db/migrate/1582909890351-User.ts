import { MigrationInterface, QueryRunner } from 'typeorm'

export class User1582909890351 implements MigrationInterface {
  name = 'User1582909890351'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL)`,
      undefined
    )
    await queryRunner.query(
      `CREATE UNIQUE INDEX "user-username-idx" ON "user" ("username") `,
      undefined
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "user-username-idx"`, undefined)
    await queryRunner.query(`DROP TABLE "user"`, undefined)
  }
}
