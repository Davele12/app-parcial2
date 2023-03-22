const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Planviajes'
});

async function traerHoteles() {
    const result = await connection.query('SELECT * FROM hoteles');
    return result[0];
}
async function traerHotel(id) {
    const result = await connection.query('SELECT * FROM hoteles WHERE nombre = ? ', id); 
return result[0];
}

async function crearHotel(nombre, ciudad, capacidad, costo) {
    const result = await connection.query('INSERT INTO hoteles VALUES(null,?,?,?,?)', [nombre, ciudad, capacidad, costo]);
return result;
}

module.exports = {
    traerHoteles, traerHotel, crearHotel
};