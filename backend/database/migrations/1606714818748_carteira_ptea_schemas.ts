import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CarteiraPteaSchemas extends BaseSchema {
  protected tableName = 'carteira_ptea_schemas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('usuarioRecepcionista_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('NO ACTION')
      .onDelete('NO ACTION')
      table.string('nomeResponsavel', 80).notNullable()
      table.string('cpfResponsavel', 14).notNullable().unique()
      table.string('rgResponsavel', 20).notNullable()
      table.string('nomeTitular', 80).notNullable()
      table.string('cpfTitular', 14).notNullable().unique()
      table.string('rgTitular', 20).notNullable()
      table.string('dataNascimento', 10).notNullable()
      table.string('fotoRostoPath', 254)
      table.string('laudoMedicoPath', 254)
      table.string('exameSanguineoPath', 254)
      table.string('docAutistaAssinaturaPath', 254)
      table.string('emailContato', 254)
      table.string('numeroContato', 20)
      table.string('cep', 25)
      table.string('logradouro', 254)
      table.string('numeroResidencia', 254)
      table.string('bairro', 254)
      table.string('cidade', 254)
      table.string('complemento', 254)
      table.string('uf', 2)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
