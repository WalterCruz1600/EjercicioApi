// Importamos Express
const express = require('express');

// Creamos una aplicación de Express
const app = express();

// Definimos un puerto en el que correrá el servidor
const PORT = 3000;

// Creamos una ruta GET que devuelve "Hola Mundo"
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

// Ruta POST que recibe datos y responde con un mensaje
app.post('/mensaje', (req, res) => {
    const { nombre, mensaje } = req.body; // Extrae los datos del cuerpo de la petición
    if (!nombre || !mensaje) {
        return res.status(400).json({ error: "Faltan datos en la solicitud" });
    }
    res.json({ respuesta: `Hola ${nombre}, recibimos tu mensaje: "${mensaje}"` });
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
