const Articulo = require('../models/Articulo')

const controller = {

    read: async(req,res)=>{

        try{
            let todos = await Articulo.find()
            res.status(200).json({
                Response: todos,
                success: true,
                message: 'se encontraron articulos'
            })
        }catch(error){
            res.status(400).json({
                success: false,
                message: error.message
            })
        }
    }
}

module.exports = controller