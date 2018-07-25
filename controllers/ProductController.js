const Product = require('../models/product');

module.exports = {
  createProduct: function(params, callback) {
    // Create a more appropriate object to be used in the model, because our inputs are improperly named
    const product = {
      productName: params.name,
      quantity: params.quantity,
      productDescription: params.description
    };

    Product.create(product, function(err, product) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, product);
    });
  },

  findAllProducts: function(params, callback) {
    Product.find({}, function(err, products) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, products);
      return;
    });
  }
};
