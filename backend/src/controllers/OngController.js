// Biblioteca para operar as rotas (deixar ela(routes.js) mais limpa)
const crypto =  require('crypto');
const connection = require('../database/connection'); // conectando aos bancos de dados

//vamos exportar as funções especificas para cada objetivo
module.exports = {
    async index (request, response){
        const ongs = await connection('ongs').select('*'); // ira selecionar todas os itens da tabela ongs
        return response.json(ongs);
    },
    
    async create (request,response){
        const { name, email, whatsapp, city, uf } = request.body;
    
        //Com a bibliote crypto conseguimos pegar bytes aleatorios
        //e passando para string e depois HEX
        const id =  crypto.randomBytes(4).toString('HEX'); 
    
        //await = espera promisse até executar a função
        //insert = ira inserir dados especificos na tabela 'ongs' 
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id });
    }

};