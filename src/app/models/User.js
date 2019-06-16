const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    cid : {
        type : Number,
        required : false
    },
    
    cpf : {
        type : Number,
        required : true
    },

    interesse :{
        type : String,
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
        type : String,
        required : false 
    }, 

    escolaridade : {
        type : String,
        required : true
    },

        foto_user : {
            type : String,
            required: false
        },

        createdAt: {
            type : Date,
            default: Date.now
        } 

    

})

module.exports = mongoose.model('User', UserSchema)