const express = require('express');
const Ongcontroller =  require('./controllers/OngController');
const IncidentController =  require('./controllers/IncidentController');
const ProfileController =  require('./controllers/ProfileController');
const SessionController =  require('./controllers/SessionController');


//ira pegar as rotas que são necessarias para o site
const routes = express.Router();

routes.get('/ongs',Ongcontroller.index );
routes.post('/ongs',Ongcontroller.create );

routes.post('/sessions',SessionController.create);

routes.get('/profile',ProfileController.index);

routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);

module.exports = routes;