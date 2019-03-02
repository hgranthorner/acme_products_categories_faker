const express = require('express')
const { db, models } = require('./db')
const { Product, Category } = models
const { apiRoutes } = require('./api')

const app = express()

app.use(express.static('dist'))

app.use('/api', apiRoutes)

app.get('/', (req, res, next) => {
  Category.findAll({ include: [Product] }) 
    .then(data => res.send(data))
})

module.exports = app
