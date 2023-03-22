const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Planviajes'
});

async function crearPlan(plan) {
    const ciudad = plan.ciudad;
    const vuelo = plan.vuelo;
    const hotel = plan.hotel;
    const costo = plan.costo;
    const usuario = plan.usuario
    const result = await connection.query('INSERT INTO planes VALUES (null, ?, ?, ?, ?, ?)', [ciudad, vuelo, hotel, costo, usuario]);
    return result;
}

async function disminuirCapacidadHotel(hotel) {
    const result = await connection.query('UPDATE hoteles SET capacidad = capacidad - 1 WHERE id = ?', [hotel]);
    return result;
}

async function disminuirCapacidadVuelo(vuelo) {
    const result = await connection.query('UPDATE vuelos SET capacidad = capacidad - 1 WHERE id = ?', [vuelo]);
    return result;
}

async function calcularCostoVuelo(vuelo) {
    const result = await connection.query('SELECT costo FROM vuelos WHERE id = ?', [vuelo]);
    return result[0].costo;
}

async function calcularCostoHotel(hotel) {
    const result = await connection.query('SELECT costo FROM hoteles WHERE id = ?', [hotel]);
    return result[0].costo;
}

async function traerPlan(id) {
    const result = await connection.query('SELECT * FROM planes WHERE id = ? ', id);
    return result[0];
}

module.exports = {
    crearPlan, disminuirCapacidadHotel, disminuirCapacidadVuelo, calcularCostoVuelo, calcularCostoHotel, traerPlan
};

