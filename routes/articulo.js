let router = require('express').Router()
let {read} = require('../controllers/articulo')

router.get('/', read)


module.exports = router