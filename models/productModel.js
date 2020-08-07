const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Product must have a name'],
    unique: true,
  },
  company: {
    type: String,
    required: [true, 'A product must have a company name'],
  },
  abv: {
    type: Number,
    required: [true, 'A Product must have a abv'],
  },
  wort: {
    type: Number,
    required: [true, 'A Product must have a wort'],
  },
  ibu: {
    type: Number,
    required: [true, 'A Product must have a ibu'],
  },
  bottle: {
    type: Number,
    required: [true, 'A Product must have a bottle'],
  },
  price: {
    type: Number,
    required: [true, 'A Product must have a price'],
  },
  description: {
    type: String,
    required: [true, 'A Product must have a description'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
