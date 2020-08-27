const productController = require('../controllers/productControllers');
const router = require('express').Router();

router.get('/',productController.getProduct);


module.exports = router;