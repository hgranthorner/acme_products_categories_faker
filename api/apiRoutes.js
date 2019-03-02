const router = require('express').Router()
const { models } = require('../db')
const { Category, Product } = models

router.get('/', (req, res, next) => {
  Category.findAll({ include: [Product] })
    .then(data => res.send(data))
    .catch(next)
})

router.post('/categories', (req, res, next) => {
  Category.add()
    .then(category => {
      console.log('sent category')
      res.send(category)
    })
    .catch(next)
})

router.post('/categories/:id', (req, res, next) => {
  Product.add(req.params.id)
    .then(product => res.send(product))
    .catch(next)
})

router.delete('/categories/:id', (req, res, next) => {
  Category.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch(next)
})

router.delete('/products/:id', (req, res, next) => {
  Product.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(204))
    .catch(next)
})

module.exports = router
