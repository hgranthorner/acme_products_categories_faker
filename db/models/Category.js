const db = require('./db')
const faker = require('faker')

const Category = db.define('category', {
  name: db.Sequelize.TEXT
})

faker.seed(100)

Category.add = () => {
  return Category.create({ name: faker.commerce.department() })
}

module.exports = Category
