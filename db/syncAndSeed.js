const { db, models } = require('./models')
const { Category, Product } = models
const faker = require('faker')

Category.hasMany(Product)
Product.belongsTo(Category)

module.exports = () => {
  return db
    .authenticate()
    .then(() => db.sync({ force: true }))
    .then(async () => {
      faker.seed(100)
      const catName = faker.commerce.department
      const prodName = faker.commerce.productName
      const [cat1, cat2, cat3] = await Promise.all([
        Category.create({ name: catName() }),
        Category.create({ name: catName() }),
        Category.create({ name: catName() })
      ])

      await Promise.all([
        Product.create({ name: prodName(), categoryId: cat1.id }),
        Product.create({ name: prodName(), categoryId: cat1.id }),
        Product.create({ name: prodName(), categoryId: cat1.id }),
        Product.create({ name: prodName(), categoryId: cat2.id }),
        Product.create({ name: prodName(), categoryId: cat2.id }),
        Product.create({ name: prodName(), categoryId: cat2.id }),
        Product.create({ name: prodName(), categoryId: cat3.id }),
        Product.create({ name: prodName(), categoryId: cat3.id }),
        Product.create({ name: prodName(), categoryId: cat3.id })
      ])
    })
    .catch(e => console.log(`Failed to sync and seed! Here's why: \n${e}`))
}
