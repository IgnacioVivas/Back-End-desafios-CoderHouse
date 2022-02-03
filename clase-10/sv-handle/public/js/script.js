const template = Handlebars.compile('<h1>{{nombre}}</h1>');
let mensaje = 'Este es un mensaje';
const html = template({ nombre: mensaje }); 
document.querySelector('.contenedor').innerHTML = html; 