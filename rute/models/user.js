const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    nombres: {
        type:String,
        required: true
    },
    apellidos: {
        type:String,
        required: true
    },
    correo: {
        String,
        required: true
    },

    ciudad:{
        type:String
    },
    pais: {
        type:String
    },
    salario :  {
        type:Number
    },
    empresa_id:{
        type: Number
    }

});

const empresasSchema = mongoose.Schema ({
    id:{
        type: Number,
        required: true
    },
    nombre:{
        type:String,
        required: true
    },
    direccion : {
        type:String
    },
    telefono :{
        type:String
    },
    ciudad: {
        type:String
    },
});

module.exports = {
    UserModel: mongoose.model('user', userSchema),
    EmpresasModel: mongoose.model('empresas', empresasSchema)
};
