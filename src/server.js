const express = require ('express')
const mongoose = require ('mongoose')



class App {

    constructor (){

        this.express = express()
       


        this.database()
        this.middlewares()
        this.routes()
    }

    database (){
        mongoose.connect('mongodb://localhost:27017/opusapi',{useNewUrlParser : true,});

        
    }


    middlewares (){
        this.express.use(express.json())
    }

    routes (){
        this.express.use(require('./routes'))
    }

}

module.exports = new App().express 