import {Router, Request, Response, RequestHandler} from 'express'

const router = Router()

router.get('/',(req:Request, res:Response) =>{
    res.send('Olá Mundo!')
})

const interferir:RequestHandler = (req,res,next) =>{
    //se logged for falso, não acessa
    let logged = false
    if(logged){
        next()
    }else{
        //usando status 403
        res.status(403).send("Loggin não permitido")
    }
}
router.get('/contato',interferir,(req:Request, res:Response) =>{
    res.send('Formulário de contato')
})

router.get('/sobre',(req:Request, res:Response) =>{
    res.send('sobre nós')
})

export default router