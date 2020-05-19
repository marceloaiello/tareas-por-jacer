const fs = require('fs');


let listadoPorHacer = [];

let guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) {
            throw new Error('no se pudo guardar la tarea', err);
        }
        return "Guardado";
    })
}

let cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

let crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB()

    return porHacer;
}



let getListado = () => {
    cargarDB();
    return (listadoPorHacer);
}


let actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

let eliminarMio = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

let eliminar = (descripcion) => {
    cargarDB();

    let nuevoListadoPorHacer = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);

    if (nuevoListadoPorHacer.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListadoPorHacer;
        guardarDB();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    eliminar
}