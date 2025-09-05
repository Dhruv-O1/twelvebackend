const shopController = require('../controllers/shopController');
const routes = require('express').Router();

routes.post('/create', shopController.createShop);
routes.put('/update/:id', shopController.updateShop);
routes.get('/getallwithproduct', shopController.getallShopWithProduct);
routes.get('/getbyid/:shopId', shopController.getShopById);

module.exports = routes;