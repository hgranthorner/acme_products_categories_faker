const db = require('./db')

const Category = db.define('category', {
  name: db.Sequelize.TEXT
})

module.exports = Category
