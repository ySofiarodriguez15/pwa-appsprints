const express = require("express");
const app = express();
const Port = process.env.PORT || 8080;
const hbs = require("hbs");
const path = require("path");
const appServer = require('./server');
const { PORT } = require('./config/mongo');
const { getConnection } = require('./db/conexion');

const homeRouter = require('./routes/homeRouter');
const subscribeRouter = require('./routes/subscribeRouter');


//Middelwares
app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({extended: false}));
//Vista de la Aplicación
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));
//////////////////////////////////////////////////////////////
/*app.get('/', (req, res) => {
    res.send('nos estamos conectando');

    });*/



    
    app.get('/', (req, res) => {
        res.render('index', {titulo:'Bienvenido a nuestra app'});

    });
    
    app.get('/subscribe', (req, res) => {
        res.render('subscribe', {titulo:'Bienvenido a nuestra app'});

    });


    app.use('/homeRouter', homeRouter);
    app.use('/subscribeRouter', subscribeRouter);



    /*
    let query = conexion.query(sql, data, (error, results) => {
    if (error) throw error;
    res.render("Contacto");
    });*/
    getConnection().then((mensaje) =>{
        console.log(mensaje);
    }).catch(console.log); 

appServer.listen(Port, ()=>{
console.log(`Servidor corriendo en el Puerto ${Port}`);
});
appServer.on('error', (error) =>{
console.log(`Tenemos un error ${error}`);
});