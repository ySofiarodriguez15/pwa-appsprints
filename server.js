const express = require('express');
const cors = require('cors');
const compression = require('compression');
//rutas

const subscribeRouter = require('./routes/subscribeRouter');
//const routerProductos = require('./routes/productos');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

app.use('/subscribe', subscribeRouter);
//app.use('/productos', require('./routes/productos'));

app.get('/', (req, res) => {
    res.send(`<h1>Bienvenido! estamos conectados con Mongo</h1>`)
});


module.exports = app;



