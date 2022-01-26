
const fs = require('fs');

class Contenedor{

    constructor(url){
        this.url = url;
    }

    getAll() {
        try {
            let contenido = fs.readFileSync(this.url, 'utf-8', (error, resp) => {
                if (error) {
                    console.log(`error ${error}`);
                } else {
                    return JSON.parse(resp);
                }
            })
            return contenido
        } catch (error) {
            throw new Error('error', error);
        }
    }

    getProductRandom() {
        const listaProductos = JSON.parse(this.getAll()); // me da un error cuando le agrego el JSON.parse podria ayudarme a resolverlo, si descomenta las ultimas dos lineas y hace node ./producto.js en la consola puede ver el error. 
        const nroRandom = Math.floor(Math.random()*listaProductos.length);
        return listaProductos[nroRandom];
    }


}

let prueba = new Contenedor("./productos.txt")
prueba.getProductRandom()

module.exports = Contenedor;