class Product {
    constructor(id, name, descr, price){
        if(!id) throw new Error('Product should have an id');
        if(!name) throw new Error('Product should have a name');
        if(!price || isNaN(price) ) throw new Error('Invalid product price');

        this.id = id;
        this.name = name;
        this.price = price;

        if(descr) this.descr = descr;
    }
}

module.exports = Product;