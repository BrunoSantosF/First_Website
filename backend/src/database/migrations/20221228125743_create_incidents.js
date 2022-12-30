
exports.up = function(knex) {
     return knex.schema.createTable('incidents', (table) => {
        table.increments(); //ira incrementar toda vez que for acessado 
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();
        table.string('ong_id').notNullable();

        //foreign : estabelece o relacionamento entre duas tabelas
        //nesse caso o "ong_id" esta relacionado com o "id" da tabela de "ongs"
        table.foreign('ong_id').references('id').inTable('ongs');

     });
};


exports.down = function(knex) {
   return knex.schema.dropTable('incidents'); // descartar uma tabela existente em um banco de dados.
};
