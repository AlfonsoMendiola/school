const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const db = require('../database/config')

class Server{
    constructor(){
        this.app = express()
        this.port = 3000

        //usar la db
        this.dbConnection()

        //usar los middlewares
        this.middlewares()

        //usar los endpoints
        this.routes()
    }

    async dbConnection(){
        try {
            await db.authenticate();
            console.log('Conectado a la bd correctamente');
        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares(){
        //cors
        this.app.use( cors() )

        //lectura del body
        this.app.use( express.json() )
        this.app.use( express.urlencoded({extended: true}) )

        //public
        this.app.use( express.static('public') )

        //carga de archivos
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tmp/',
            createParentPath: true
        }))
    }

    routes(){
        this.app.use('/api/usuarios', require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Corriendo en el puerto: ${this.port}`);
        })
    }
}

module.exports = Server