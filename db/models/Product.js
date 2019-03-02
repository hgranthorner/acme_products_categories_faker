const db = require('./db')
const faker = require('faker')

faker.seed(100)

const Product = db.define('product', {
  name: db.Sequelize.TEXT
})

Product.add = categoryId => {
  return Product.create({ name: faker.commerce.productName(), categoryId })
}

module.exports = Product
