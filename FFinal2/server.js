const express = require('express');
const mongoose = require('mongoose'); 
var cors = require('cors');

const routes = require('./server/routes/routes');

// Importamos la configuración
require('./server/config/config');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use('/movies', routes);

app.get('/', (req, res) => {
    res.send('¡Servidor Express funcionando!');
});

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});