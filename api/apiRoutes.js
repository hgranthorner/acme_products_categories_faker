const router = require('express').Router()
const { models } = require('../db')
const { Category, Product } = models

router.get('/', (req, res, next) => {
    Category.findAll({ include: [ Product ] })
    .then(data => res.send(data))
    .catch(next)
    })

module.exports = router
