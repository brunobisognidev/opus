const express = require ('express')
const mongoose = require ('mongoose')



class App {

    constructor (){

        this.express = this.express()
        this.inDev = process.env.NODE_ENV  = 'production'


        this.database()
        this.middlewares()
        this.routes()
    }

    database (){
        mongoose.connect('mongodb+srv://bruno:Amor131313@cluster0-l3vqt.mongodb.net/test?retryWrites=true&w=majority', {
                useNewUrlParser : true,
        });

        
    }


    middlewares (){
        this.express.use(express.json())
    }

    routes (){
        this.express.use(require('./routes'))
    }

}

module.exports = new App().express 