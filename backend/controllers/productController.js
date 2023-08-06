const Products = require( '../models/productModel' );

function addProduct(req, res){
    if(!req.body.data){
        res.status(400);
        throw new Error('Please send the product data');
    }

    const product = Products.addProduct(req.body.data);

    res.status(200).json(product);
}

function getProducts(req, res){
    const products = Products.getProducts();
    console.log("Controller getting products...", products);
    res.status(200).json(products);
}

module.exports = {
    addProduct,
    getProducts
}