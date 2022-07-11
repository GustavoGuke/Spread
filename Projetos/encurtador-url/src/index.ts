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