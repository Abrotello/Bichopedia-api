import express from 'express'
import cors from 'cors'

import { ArachnidaRouter } from './routes/arachnidaRoutes'
import { InsectaRouter } from './routes/insectaRoutes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/arachnida/', ArachnidaRouter)
app.use('/insecta/', InsectaRouter)

app.get('/', (req,res) => {
    res.send("Hola desde Docker")
})


app.listen(3000, () => {
    console.log('Running...')
})