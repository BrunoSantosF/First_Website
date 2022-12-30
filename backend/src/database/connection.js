const knex =  require('knex'); //puxando a biblioteca do banco de dados
const configure =  require('../../knexfile'); //buscando o local onde está as configurações do banco de dados

const connection = knex(configure.development); //obtendo a configuração de development

module.exports =  connection; //exportando a variavel de conexão