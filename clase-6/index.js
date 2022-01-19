
const express = require ('express');
const app = express();

const Contenedor = require('./producto');
const objContenedor = new Contenedor('./productos.txt')

app.get('/productos', async (req, res) => {
    let listaProductos = objContenedor.getAll();
    res.send(await listaProductos);
})

app.get('/productoRandom', async (req, res) => {
    let productoRandom = objContenedor.getProductRandom();
    res.send(await productoRandom);
})

const conectedServer = app.listen(8080, () => {
    console.log('Servidor escuchando en el puerto 8080');
})

conectedServer.on('error', error => {console.log('hubo un error')});