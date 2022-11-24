const path = require('path');

const fs = require('fs');

//console.log(path.resolve('data/tareas.json'));

const rutaJson = path.resolve(__dirname, 'data/tareas.json');

//console.log(fs.readFileSync(rutaJson, {encoding: 'utf-8'}));

const tareas = fs.readFileSync(rutaJson, {encoding: 'utf-8'});

//console.log(tareas); //json/string
//console.log(JSON.parse(tareas)); //array/objeto

const myJson = JSON.parse(tareas);
myJson.forEach(tareas => {
    
    console.log("Tarea:",tareas.titulo,"Estado:", tareas.estado);
});

