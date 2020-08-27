const Product = require('../models/productsModel');
module.exports = {
    getProduct : (req,res)=>{
            Product.find()
                .then(product=>res.json(product))
                .catch(err=>res.status(400).json(err))
    }    
};
