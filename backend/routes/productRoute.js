const express = require( 'express' );
const router = express.Router();
const { addProduct, getProducts } = require( '../controllers/productController' );

router.route('/').get( getProducts ).post( addProduct );

module.exports = router;