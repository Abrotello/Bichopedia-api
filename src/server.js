const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
    res.send("Hola desde Docker")
})


app.listen(3000, () => {
    console.log('Running...')
})