const express = require('express');
const router = express.Router();


const product_controller = require('../controllers/product.controller');


router.get('/test', product_controller.test);
router.get('/allproducts', product_controller.getProducts);
router.post('/create', product_controller.product_create);
router.put('/update/:id', product_controller.product_update);
router.delete('/delete/:id', product_controller.product_delete);
router.get('/details/:id', product_controller.product_details);
router.get('*', product_controller.product_showError);

module.exports = router;