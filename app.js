const express = require('express')
const { db, models } = require('./db')
const { Product, Category } = models

const app = express()

app.get('/', (req, res, next) => {
  Category.findAll({ include: [Product] }) 
    .then(data => res.send(data))
})
module.exports = app
