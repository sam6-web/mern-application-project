const mongoose = require('mongoose');
const schema = mongoose.Schema;
const productSchema = new schema({
    name: {type: String},    
    image: {type: String},    
    price: {type: Number},
});
const Product = mongoose.model('Product',productSchema);
module.exports = Product;
