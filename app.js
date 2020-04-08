const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./to-do/to-do');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        for (let tarea of toDo.getListado()) {
            console.log('================'.green);
            console.log(tarea.description);
            console.log('Estado', tarea.completado);
            console.log('================'.green);
        }
        break;

    case 'actualizar':
        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        toDo.borrar(argv.descripcion);
        break;

    default:
        console.log('Comando no reconocido');
        break;


}