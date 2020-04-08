const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command(
        'crear',
        'Crea un nuevo elemento por hacer', {
            descripcion
        })
    .command(
        'actualizar',
        'Actualiza el estado completado de una tarea', {
            descripcion,
            completado
        })
    .command(
        'borrar',
        'Borra un registro de la bd', {
            descripcion
        }
    )
    .help()
    .argv;

module.exports = {
    argv
};