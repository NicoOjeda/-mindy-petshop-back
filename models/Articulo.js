const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    nombre: {type: String, require: true},
    imagen: {type: String, require: true},
    tipo: {type: String, require: true},
    precio: {type: Number, require: true},
    descripcion: {type: String, require: true},
    stock: {type: Number, require: true}
})

const Articulo = mongoose.model('articulos', schema)

module.exports = Articulo