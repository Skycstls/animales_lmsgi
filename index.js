const express = require('express');
const app = express();
const { gatos, perros } = require('./scripts/animales.js');
const animales = gatos.concat(perros);

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World');
    });

app.get('/gatos', (req, res) => {
    res.json(gatos);
    });

app.get('/perros', (req, res) => {
    res.json(perros);
    });

app.get('/animales', (req, res) => {
    res.json(animales);
    });

app.get('/animales/:uuid', (req, res) => {
    const uuid = req.params.uuid;
    const animal = animales.find((a) => a.uuid === uuid);
    if(animal){
        res.json(animal);
    } else {
        res.status(404).send('Animal not found');
    }
    });



app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });