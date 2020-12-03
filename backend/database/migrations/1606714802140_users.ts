import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Users extends BaseSchema {
  protected tableName = 'users';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary();
      table.string('username', 80).notNullable().unique();
      table.string('email', 254).notNullable().unique();
      table.string('password', 60).notNullable();
      table.string('nomeCompleto', 80).notNullable();
      table.string('matricula', 8).notNullable().unique();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
