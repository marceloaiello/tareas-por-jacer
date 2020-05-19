const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = porHacer.crear(argv.descripcion);
        console.log(`Tarea creada`, tarea);
        break;
    case "listar":
        //console.log("listar todas las listar por hacer");
        let Listado = porHacer.getListado();
        for (const tarea of Listado) {
            console.log(colors.green('======== tarea por hacer ======='));
            console.log(` Descripción: ${ tarea.descripcion }`);
            console.log(` Estado: ${ tarea.completado }`);
            console.log(colors.green('================================'));
        }
        break;
    case "actualizar":
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case "eliminar":
        let eliminado = porHacer.eliminar(argv.descripcion);
        console.log(eliminado);
        break;
    default:
        console.log(`comando ${ comando } NO permitido`);
        break;
}