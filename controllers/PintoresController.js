let mongoose = require('mongoose');
// vamos a unirlo al modelo
let Pintores = require('../models/Pintores');
let PintoresControllers = {};
/*listar -> find() */
PintoresControllers.list = (req, res)=>{
    Pintores.find({})
        .limit(20)
        .skip(0)
        .exec((err, pintor)=>{
            if(err){
                console.log('error: ', err)
            }
                res.render('../views/index',options={
                    pintores: pintor,
                    titulo: "listado de pintores",
                    year: new Date().getDate()
                })
        })
};

module.exports = PintoresControllers;
