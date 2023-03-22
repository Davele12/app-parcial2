const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Planviajes'
});

async function traerVuelos() {
    const result = await connection.query('SELECT * FROM vuelos');
    return result[0];
}

async function traerVuelo(id) {
    const result = await connection.query('SELECT * FROM vuelos WHERE id = ? ', id);
return result[0];
}

async function crearVuelo(ciudadOrigen, ciudadDestino, capacidad, costo) {
    const result = await connection.query('INSERT INTO vuelos VALUES(null,?,?,?,?)', [ciudadOrigen, ciudadDestino, capacidad, costo]);
return result;
}

module.exports = {
    traerVuelos, traerVuelo, crearVuelo
};

