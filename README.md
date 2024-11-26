# Proyecto Autor-Libros
Este proyecto gestiona autores y libros con una relación 1:N.
## Estructura del Proyecto
- `src/autor`: Código relacionado con autores.
- `src/libro`: Código relacionado con libros.
- `assets`: Datos iniciales en formato JSON.
- `css`: Estilos globales y específicos.
## Cómo Usar
1. Abra `index.html` en un navegador.
2. Use los formularios para agregar o listar datos.

## Estructura:
proyecto-autor-libros/
├── src/
│   ├── autor/
│   │   ├── Autor.js
│   │   ├── autorController.js
│   │   ├── listaAutores.html
│   │   ├── crearAutor.html
│   │   ├── editarAutor.html
│   │   └── autor.css
│   ├── libro/
│   │   ├── Libro.js
│   │   ├── libroController.js
│   │   ├── listaLibros.html
│   │   ├── crearLibro.html
│   │   ├── editarLibro.html
│   │   └── libro.css
├── assets/
│   ├── autores.json
│   ├── libros.json
├── index.html
├── main.js
├── css/
│   └── main.css
├── package.json
└── README.md
