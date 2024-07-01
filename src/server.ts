import express,{Request,Response} from 'express'
import {Server} from 'http'

const server = express()

server.get('/',(req,res) => {

    res.send("Hello World!")

})

server.get('/contato',(req:Request, res:Response) =>{

    res.send("Está página é de contato")
})

server.listen(3000)

