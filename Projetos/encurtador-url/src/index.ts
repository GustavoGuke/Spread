<<<<<<< HEAD
import { URLController } from 'controller/url.controller'
import express, { Request, Response, urlencoded } from 'express'


const api = express()
const urlController = new URLController

api.use("/test", (req:Request, res:Response) =>{
    res.send(true)
})

api.listen('5000', () => {
    console.log("SERVER ok")
})
=======
import express from 'express'
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5000, () => console.log('Express listening'))
>>>>>>> 66be6655b3ba6a3867e1ed8f83ac564343cda022
