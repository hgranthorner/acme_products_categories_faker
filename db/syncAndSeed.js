const { db, models } = require('./models')
const { Category, Product } = models

Category.hasMany(Product)
Product.belongsTo(Category)

module.exports = () => {
  return db.authenticate()  
}
