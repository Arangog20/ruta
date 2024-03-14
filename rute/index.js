// Importar el módulo express para la creación del servidor web
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();

const usersRoutes = require("./ruta/users.js");

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('holi welcome');
});

// Establecer la conexión a la base de datos MongoDB utilizando la URL de conexión especificada en la variable de entorno MONGODB_URL
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('conectado a mongodb atlas'))
    .catch((error) => console.log(error));

// Montar las rutas de usuario bajo el prefijo /api
app.use('/api', usersRoutes);

// Iniciar el servidor 
app.listen(port, () => {
    console.log('listening on port', port);
});
