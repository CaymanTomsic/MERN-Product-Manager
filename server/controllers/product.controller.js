const Product = require('../models/product.model');

module.exports.productTest = (req, res) => {
    res.json({
        message: "Everything running correctly"
    });
};

module.exports.getAllProducts = (req, res) => {
    Product.find()
    .then(allProducts => res.json({ products: allProducts }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
    .then(product => res.json({ product: product }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(newlyCreatedProduct => res.json({ product: newlyCreatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateProduct = (req, res) =>{
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedProduct => res.json({ updatedProduct: updatedProduct }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.destroyProduct = (req, res) =>{
    Product.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json({ deleteConfirmation: deleteConfirmation }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
