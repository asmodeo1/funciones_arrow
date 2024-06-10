const tareas = [];

function anhadirTarea(){
    const nombre = document.getElementById("nombre");
    const prioridad = document.getElementById("prioridad");
    const terminada = document.getElementById("terminada").checked;
    let errores = "";
    if(nombre.checkValidity() == false) {
        errores = "Falta el nombre\n";
    }
    if(prioridad.checkValidity() == false) {
        errores += "Falta la prioridad";
    }
    if(errores != "") {
        window.alert(errores);
        return;
    }
    const ul = document.getElementById("tareas")
    ul.appendChild(crearElementoLista(nombre.value.trim(), prioridad.value, terminada ? "si": "no"));
    tareas.push({nombre: nombre.value.trim(), prioridad: prioridad.value, terminada: terminada ? "si": "no"})
}

function crearElementoLista(nombre, prioridad, terminada) {
    const li = document.createElement("li");
    let span = document.createElement("span");
    span.classList.add("d-inline-block");
    span.textContent = nombre;
    li.appendChild(span);
    li.classList.add("list-group-item", "d-flex", "justify-content-evenly");
    span = document.createElement("span");
    span.classList.add("d-inline-block");
    span.textContent = prioridad;
    li.appendChild(span);
    span = document.createElement("span");
    span.classList.add("d-inline-block");
    span.textContent = terminada;
    li.appendChild(span);
    return li;
}

function ordenarPorPrioridad() {
    tareas.sort((tarea1, tarea2) => tarea1.prioridad - tarea2.prioridad);
    const ul = document.getElementById("tareas");
    ul.textContent = "";

    tareas.forEach( tarea => {
       ul.appendChild(crearElementoLista(tarea.nombre, tarea.prioridad, tarea.terminada));
    });
}
function ordenarPorNombre() {
    tareas.sort((tarea1, tarea2) => tarea1.nombre > tarea2.nombre ? 1: 0);
    const ul = document.getElementById("tareas");
    ul.textContent = "";

    tareas.forEach( tarea => {
       ul.appendChild(crearElementoLista(tarea.nombre, tarea.prioridad, tarea.terminada));
    });
}

function filtrarTerminadas() {
    const ul = document.getElementById("tareas");
    ul.textContent = "";
    tareas.filter(tarea => tarea.terminada == "si").forEach( tarea => {
       ul.appendChild(crearElementoLista(tarea.nombre, tarea.prioridad, tarea.terminada));
    });
}



document.getElementById("anhadir").addEventListener("click", anhadirTarea);
document.getElementById("ordenarPorPrioridad").addEventListener("click", ordenarPorPrioridad);
document.getElementById("ordenarPorNombre").addEventListener("click", ordenarPorNombre);
document.getElementById("filtrarTerminadas").addEventListener("click", filtrarTerminadas);


