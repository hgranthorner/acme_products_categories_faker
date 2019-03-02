const db = require('./db')

const Product = db.define('product', {
  name: db.Sequelize.TEXT
})

module.exports = Product
