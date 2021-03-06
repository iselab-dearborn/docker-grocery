const express = require('express');
const router = express.Router();

const productController = require("../controllers/product.controller");

router.get('/count', productController.count);
router.get('/', productController.getAll);
router.post('/', productController.create);

module.exports = router;
