const express = require('express');
const router = express.Router();
const axios = require('axios');
const planesModel = require('../models/planesModel');  

//TRAER PLANES CON ID
router.get('/planes/:id', async (req, res) => {
    const id = req.params.id;
    var result;
    result = await planesModel.traerPlan(id);
    res.json(result[0]);
});

//CREAR PLAN
router.post('/planes', async (req, res) => {
    const usuario = req.body.usuario;
    const ciudad = req.body.ciudad;
    const vuelo = req.body.vuelo;
    const hotel = req.body.hotel;
    const costo = req.body.costo;

    return res.send("Plan de viaje creado");

    await actualizarPlan(items); //Editar
});


// Función para disminuir la cantidad de capacidad en hoteles y vuelos //editar
async function actualizarInventario(items) {
    for (const hotel of items) {
        const response = await
            axios.get(`http://localhost:3002/hoteles/${hotel.id}`);
        const inventarioActual = response.data.inventario;
        const inv = inventarioActual - hotel.cantidad;
        await axios.put(`http://localhost:3002/hoteles/${hotel.id}`, {
            inventario: inv
        });
    }
}

module.exports = router;



