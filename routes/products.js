var express = require('express');
var router = express.Router();

const ProductController = require('../controllers/ProductController');

/* GET users listing. */
// @route   GET /products/
// @desc    Tests that our router is working
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// @route   GET /products/addProduct
// @desc    Renders the addProduct form
router.get('/addProduct', function(req, res, next) {
  res.render('index', { title: 'Add a product' });
});

// @route   POST /products/addProduct
// @desc    Add a product to the database, and render a response.
router.post('/addProduct', function(req, res, next) {
  ProductController.createProduct(req.body, function(err, user) {
    if (err) {
      res.render('result', {
        message: 'Failure to create new product, try again'
      });
      return;
    }

    res.render('result', {
      message: 'Successfully added product.'
    });
    return;
  });
});

// @route   GET /products/viewProducts
// @desc    Display all products in the database.
router.get('/viewProducts', function(req, res, next) {
  ProductController.findAllProducts({}, function(err, products) {
    if (err) {
      res.json({
        message: 'failed to retrieve any products',
        error: err
      });
      return;
    }
    res.render('viewProducts', {
      products: products
    });
    return;
  });
});
module.exports = router;
