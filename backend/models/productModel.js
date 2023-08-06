const Product = require( './productClass' );
const productList = [];

function addProduct(data){
    const id = productList.length++;
    const newProduct = new Product(id, ...data);

    productList.push(newProduct);

    return newProduct;
}

function getProducts(){
    return productList;
}

module.exports = {
    addProduct,
    getProducts
}