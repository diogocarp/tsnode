import express, { application } from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
import routes from './routes'


class App {

    public express: express.Application
    
    public constructor (){

        this.express = express()

        this.middlewares()
        this.database()
        this.routes()
    
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database ():Promise<mysql.Connection> {

    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection
    const connection = mysql.createConnection("mysql://root:root@localhost:3306/tsnode");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

    private routes (): void {

        this.express.use(routes)

    }
}

export default new App().express