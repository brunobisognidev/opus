const mongoose = require ('mongoose')

const VagaSchema = new mongoose.Schema({

        
    titulo_vaga : {
        type : String,
        required : true
    },

    descricao_vaga : {
        type : text,
        required : true
    },

    localizacao_vaga : {
            type :  String ,
            required :  true
    },

    atendeA :{ 
        type : String, 
        required :true

    },

    

    postedAt: {
        type : Date,
        default: Date.now
    }, 

    finaliza_em:{
        type : Date,
        default: Date.now
    } 


})