const express = require('express');
const ControllerRaiz = require('./controller/controllerRaiz'); 
const ControllerProds = require('./controller/controllerProd'); 
const ControllerClient = require('./controller/controllerCli'); 
const ControllerVend = require('./controller/controllerVend'); 

const routes = express.Router();

routes.get('/', ControllerRaiz.raiz);


routes.get('/produtos', ControllerProds.produtos);
routes.post('/produtos', ControllerProds.createPro);
routes.put('/produtos/:pro_cod', ControllerProds.updateProd);
routes.delete('/produtos/:pro_cod', ControllerProds.deleteProd);

routes.get('/cliente', ControllerClient.clientes);
routes.post('/cliente', ControllerClient.createCli);
routes.put('/cliente/:cli_cod', ControllerClient.updateCli);
routes.delete('/cliente/:cli_cod', ControllerClient.deleteCli);

routes.get('/vendas', ControllerVend.vendas);
routes.post('/vendas', ControllerVend.createVen);
routes.put('/vendas/:ven_cod', ControllerVend.updateVend);
routes.delete('/vendas/:ven_cod', ControllerVend.deleteVend);

module.exports = routes;
  