const db = require('./db')
const Product = require('./Product')
const Category = require('./Category')

module.exports = {
  db,
  models: {
    Product,
    Category
  }
}
