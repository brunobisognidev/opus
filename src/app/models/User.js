const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    cid : {
        type : number,
        required : false
    },
    
    cpf : {
        type : number,
        required : true
    },

    interesse :{
        type : string,
        require : true
    },

    nascimento : {
            type : Date,
            required : true
    },

    email : {
        type : String,
        required : true,
        unique: true,
        lowercase : true
    },

    password :{
        type : String,
        required : true
    },

    sexo :{
        type : String,
        required : true
    },

    localização : {
        type : string,
        required : false 
    }, 

    escolaridade : {
        type : String,
        required : true
    },

        foto_user : {
            type : Image,
            required: false
        },

        createdAt: {
            type : Date,
            default: Date.now
        } 

    

})

module.exports = mongoose.model('User', UserSchema)