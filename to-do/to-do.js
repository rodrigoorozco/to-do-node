const fs = require('fs');

let toDoArray = [];



const guardarDB = () => {
    let data = JSON.stringify(toDoArray);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar');
    });
}

const cargarDB = () => {
    try {
        toDoArray = require('../db/data.json');
    } catch (error) {
        toDoArray = [];
    }

}


const crear = (description) => {
    let porHacer = {
        description,
        completado: true
    };

    cargarDB();
    toDoArray.push(porHacer);
    guardarDB();
    return porHacer;
};

const getListado = () => {
    cargarDB();
    return toDoArray;
}

const actualizar = (description, completado = true) => {
    cargarDB();
    let index = toDoArray.findIndex((tarea) => {
        return tarea.description === description;
    });

    if (index >= 0) {
        toDoArray[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descrpcion) => {
    cargarDB();
    let newToDoArray = toDoArray.filter((tarea) => {
        return tarea.description !== descrpcion;
    });

    if (newToDoArray.length !== toDoArray.length) {
        toDoArray = newToDoArray;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}