const libros = []; // Array temporal, cargar desde libros.json
function crearLibro(libro) {
    libros.push(libro);
    console.log("Libro creado:", libro);
}
function listarLibros() {
    return libros;
}
function eliminarLibro(id) {
    // Implementar lógica para eliminar libros
}
module.exports = { crearLibro, listarLibros, eliminarLibro };
