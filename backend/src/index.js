const express =  require('express');
const cors =  require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/*
Rota / Recurso

//====================================
++ Metodos HTTP:
+ GET : Buscar uma informação do back-end
+ POST : Criar uma informação no back-end
+ PUT: Alterar uma inforção no back-end 
+ DELETE: Deletar uma informação no back-end

//====================================
++ Tipos de parametros:
+Query Params: Parametros nomeados enviados na rota apos "?" (Filtros, paginação)
+Route Params: Parametros utilizados para identificar recursos
+Request Body: Corpos da requisição, utilizado para criar ou alterar recursos

//====================================
++ Banco de dados
+ SQL: mySQL ,SQLite


-> Dados inseridos para o banco de dados:

Entidades :
- ONG
- Caso(incident)

Funcionalidades :
- Login Ong
- Logout de Ong
- Cadastro de ONG
- Cadastrar novos casos
- Deletar casos
- Listas casos especificos de um ONG
- Listar todos os casos 
- Entrar em contato com uma ONG

//====================================

*/

app.listen(3333);
