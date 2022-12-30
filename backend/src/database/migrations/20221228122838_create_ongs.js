exports.up = function(knex) {
  return knex.schema.createTable('ongs', (table) => {
        table.string('id').primary(); //identifica exclusivamente cada registro em uma tabela
        table.string('name').notNullable;
        table.string('email').notNullable;
        table.string('whatsapp').notNullable;
        table.string('city').notNullable;
        table.string('state').notNullable;
        table.string('uf',2).notNullable;
        
  });
};

//Caso dei algum erro na tabela temos que retornar um erro, nessa caso apagar os dados
exports.down = function(knex) {
  return knex.schema .dropTable('ongs');
};
