let router = require('express').Router()
let articulo = require('./articulo')

router.use('/articulo', articulo)


module.exports = router;
