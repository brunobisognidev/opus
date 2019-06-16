const mongoose = require ('mongoose')

const EmpresaSchema = new mongoose.Schema({

    nome_empresa : {
        type : String,
        required : true
    },

    cnpj : {
        type : number,
        required : false
    },

    endereco_empresa : {
        type : String,
        required : false
    },

    nome_responsavel_rh : {
        type : String,
        required : true
    },


    email : {
        type : String,
        required : true,
        unique: true,
        lowercase : true
    },




})