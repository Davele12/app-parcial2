const { Router } = require('express');
const router = Router();
const vuelosModel = require('../models/vuelosModel');
router.get('/vuelos', async (req, res) => {
    const id = req.params.id;
    var result;
    result = await vuelosModel.traerVuelos();
    //console.log(result);
    res.json(result);
});

router.get('/vuelos/:id', async (req, res) => {
    const id = req.params.id;
    var result;
    result = await vuelosModel.traerVuelo(id);
    //console.log(result);
    res.json(result[0]);
});

router.post('/vuelos', async (req, res) => {
    const ciudadOrigen = req.body.ciudadOrigen;
    const ciudadDestino = req.body.ciudadDestino;
    const capacidad = req.body.capacidad;
    const costo = req.body.costo;

    var result = await vuelosModel.crearVuelo(ciudadOrigen, ciudadDestino, capacidad, costo); 
    res.send("vuelo creado");
});

module.exports = router;