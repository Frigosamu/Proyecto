document.addEventListener("DOMContentLoaded", function() {
    const tbody = document.querySelector("tbody");

    function eliminarFila(e) {
        if (e.target.classList.contains('btn-danger')) {
            const fila = e.target.closest('tr');
            fila.remove();
        }
    }

    almacenAutores.forEach(autor => {
        const fila = document.createElement("tr");

        const celdaId = document.createElement("td");
        celdaId.textContent = autor.id;

        const celdaAutor = document.createElement("td");
        celdaAutor.textContent = autor.autor;

        const celdaAnoNacimiento = document.createElement("td");
        celdaAnoNacimiento.textContent = autor.añoNacimiento;

        const celdaLugarNacimiento = document.createElement("td");
        celdaLugarNacimiento.textContent = `Lat: ${autor.lugarNacimiento.latitud}, Lon: ${autor.lugarNacimiento.longitud}`;

        const celdaAcciones = document.createElement("td");
        celdaAcciones.innerHTML = `<button class="btn btn-success">Editar</button> 
                                   <button class="btn btn-danger">Eliminar</button>`;

        fila.appendChild(celdaId);
        fila.appendChild(celdaAutor);
        fila.appendChild(celdaAnoNacimiento);
        fila.appendChild(celdaLugarNacimiento);
        fila.appendChild(celdaAcciones);

        tbody.appendChild(fila);
    });


    tbody.addEventListener('click', eliminarFila);
});
