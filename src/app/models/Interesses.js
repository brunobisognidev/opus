const mongoose = require ('mongoose')

const InteresseSchema = new mongoose.Schema({
        
    interesse : {
        type : String,
        required : true
    },
});