const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  productDescription: { type: String, default: '' }
});

module.exports = mongoose.model('ProductSchema', ProductSchema);
