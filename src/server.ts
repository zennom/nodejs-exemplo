import express, {Request, Response} from "express"
import MainRoutes from './routes/index'

const server = express()


server.use(MainRoutes)

server.listen(3000)

server.use((req:Request, res:Response) =>{
    res.status(404).send('Página não encontrada')
})