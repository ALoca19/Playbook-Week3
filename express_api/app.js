// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// HTTP METHODS
app.get('/explorers', (req, res) => {
    console.log(`Api Explorers GET ALL requests ${new Date()}`)
    // creamos nuestros objetos
    const explorer1 = { id: 1, name: "Valente" }
    const explorer2 = { id: 2, name: "Miguel" }
    const explorer3 = { id: 3, name: "Victor" }

    // asignamos nuestros objetos a una lista de objeto
    const explorers = [explorer1, explorer2, explorer3]
    res.status(200).json(explorers)
})


// creando un endpoint con GET
app.get('/explorers/:id', (req,res) => {
    console.log(`Api Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)

    const explorer = {id: 1, name: "Miguel Rojas"}
    res.status(200).json(explorer)
})


// creando un endpoint que se encargue de crear un explorer con POST
app.post('/explorers', (req,res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body // son los parametros para un cliente
    res.status(201).json({message: "Your explorer is created"})
})


// creando un endpoint que se encargara de actualizar un explorer con PUT
app.put('/explorers/:id', (req,res) => {
    console.log(`Api Explorers PUT request ${new Date()}`)
    console.log(`Update explorer with id -> ${req.params.id}`)
    const requestBody = req.body // son los parametros para un cliente
    res.status(200).json({message: "Your explorer is updated"})
})

// creando un endpoint que se encargara de eliminar un explorer con DELETE
app.delete('/explorers/:id', (req,res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`)
    console.log(`Delete explorer with id -> ${req.params.id}`)
    const requestBody = req.body // son los parametros para un cliente
    res.status(200).json({message: "Your explorer is deleted"})
})