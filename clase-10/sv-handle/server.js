const express = require('express');
const handlebars = require('express-handlebars');   

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

app.get('/productos', (req, res) => {
    res.render('table', {listaProductos: productos});
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor Http escuchando en el puerto  ${PORT}`);
})
server.on("error", error => console.log(`Se detecto un error: ${error}`));

app.set('view engine', 'txt')
app.set('views', './views')
app.engine(
    'txt',
    handlebars({
        extname: '.txt',
        defaultLayout: 'index.txt',
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials/"
    })
);