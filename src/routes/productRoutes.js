const productController = require('../controllers/productController');
const { route } = require('./userRoutes');
const routes = require('express').Router();

routes.post('/create', productController.createProduct);
routes.put('/update/:id', productController.updateProduct);

module.exports = routes;