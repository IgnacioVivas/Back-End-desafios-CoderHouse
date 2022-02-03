const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const productos = [
    {
        title: "Calculadora",
        price: 129.45,
        thumbnail: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
        id: 1
    },
    {
        title: "Lapiz",
        price: 4.56,
        thumbnail: "https://image.freepik.com/vector-gratis/diseno-lapiz-escribiendo_1095-187.jpg?w=740",
        id: 2
    },
    {
        title: "Goma",
        price: 3.67,
        thumbnail: "https://www3.gobiernodecanarias.org/medusa/mediateca/ecoescuela/wp-content/uploads/sites/2/2013/11/09-Goma.png",
        id: 3
    }
]

app.set('views', path.join('views'));
app.set('view engine', '');

app.get('/productos', (req, res) => {
    res.render('anexo.pug', {listaProductos: productos})
})
app.post('/productos', (req, res) => {
    const productoNuevo = {
        id: productos.length + 1,
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail
    }
    productos.push(productoNuevo);
    res.render('anexo.pug', {listaProductos: productos})
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto  ${PORT}`);
})
server.on("error", error => console.log(`Se detecto un error: ${error}`));