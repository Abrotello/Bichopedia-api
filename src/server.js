const express = require('express')
const cors = require('cors')

const ArachnidaRouter = require("./routes/arachnida")
const InsectaRouter = require("./routes/insecta")

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