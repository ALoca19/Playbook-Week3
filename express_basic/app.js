// usando objeto express
const express = require('express')

//app de express
const app = express()

// puerto en que vamos a ver nuestra app
const port = 3000

//path inicial, respondera al url localhost:3000
app.get('/', (req, res) => {
    res.send("Hello World")
})

// creando una ruta en nuestro server
app.get('/launchx', (req, res) => {
    res.send("Bienvenido a launchx explorer")
})

// creando una nueva ruta donde retorna un objeto
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "Explorer", msg: "Bienvenido a launchx"}
    res.send(explorer)
})

// creando una nueva ruta donde recibira un Query Params
// el query params recibe parametros por la url
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

// con esto inicialiamos la app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})