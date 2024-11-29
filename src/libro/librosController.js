document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector("tbody");

    function eliminarFila(e) {
        if (e.target.classList.contains('btn-danger')) {
            const fila = e.target.closest('tr');
            fila.remove();
        }
    }

    almacenLibros.forEach(libro => {
        const fila = document.createElement("tr");

        const celdaId = document.createElement("td");
        celdaId.textContent = libro.id;

        const celdaNombre = document.createElement("td");
        celdaNombre.textContent = libro.nombre;

        const celdaAnoPublicacion = document.createElement("td");
        celdaAnoPublicacion.textContent = libro.añoPublicacion;

        const celdaAutor = document.createElement("td");
        celdaAutor.textContent = libro.autor;

        const celdaAcciones = document.createElement("td");
        celdaAcciones.innerHTML = `<button class="btn btn-success">Editar</button> 
                                   <button class="btn btn-danger">Eliminar</button>`;

        fila.appendChild(celdaId);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaAnoPublicacion);
        fila.appendChild(celdaAutor);
        fila.appendChild(celdaAcciones);

        tbody.appendChild(fila);
    });

    tbody.addEventListener('click', eliminarFila);
});
