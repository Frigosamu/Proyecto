const autores = []; // Array temporal, cargar desde autores.json
function crearAutor(autor) {
    autores.push(autor);
    console.log("Autor creado:", autor);
}
function listarAutores() {
    return autores;
}
function eliminarAutor(id) {
    // Implementar lógica para validar dependencias
}
module.exports = { crearAutor, listarAutores, eliminarAutor };
