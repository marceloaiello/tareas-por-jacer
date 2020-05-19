const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea por hacer"
}

const completado = {
    default: true,
    alias: 'c',
    desc: "Marca la tarea por hacer como terminada o pendiente"
}


const argv = require('yargs')
    .command('crear', 'crea una tarea por hacer', { descripcion })
    .command('actualizar', 'actualiza una tarea por hacer ', { descripcion, completado })
    .command('eliminar', 'elimina una tarea por hacer ', { descripcion })
    .command('listar', 'lista todas las tareas por hacer ')
    .help()
    .argv;


module.exports = {
    argv
}