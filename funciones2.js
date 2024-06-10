let notas = [1, 5, 3, 7, 8, 10, 4];

function obtenerAprobados(notas) {
    let aprobados = [];
    for (const nota of notas) {
        if(nota >=5) {
            aprobados.push(nota);
        }
    }
    return aprobados;
}

function obtenerSuspensos(notas) {
    let suspensos = [];
    for (const nota of notas) {
        if(nota < 5) {
            suspensos.push(nota);
        }
    }
    return suspensos;
}

/**
 * Devuelve un nuevo array con lso datos filtrados
 * @param {[number]} notas - array de valores a filtrar
 * @param {function(number): boolean} funcionFiltro - función que filtra los datos, devolviendo true si los queremos y false si no
 * @returns 
 */
function filtrar(numeros, funcionFiltro) {
    let resultado = [];
    for (const numero of numeros) {
        if(funcionFiltro(numero) == true) {
            resultado.push(numero);
        }
    }
    return resultado;
}

function filtrarAprobados(numero) {
    return numero >= 5;
}

function filtrarSuspensos(numero) {
    return numero < 5;
}

function filtrarPares(numero) {
    return numero % 2 == 0;
}

function filtrarImpares(numero) {
    return numero % 2 == 1;
}


console.log(obtenerAprobados(notas));
console.log(obtenerSuspensos(notas));
console.log("----------");
console.log(filtrar(notas, filtrarAprobados));
console.log(filtrar(notas, filtrarSuspensos));
console.log(filtrar(notas, filtrarPares));
console.log(filtrar(notas, filtrarImpares));
console.log("----------Funciones anónimas-----");
console.log(filtrar(notas, function(numero){ 
    return numero >= 5; }
));
console.log(filtrar(notas, function(numero){ return numero < 5; }));
console.log(filtrar(notas, function(numero){ return numero % 2 ==  0; }));
notas.sort(function(n1, n2) { return n1 - n2;});
console.log(notas);
window.addEventListener("load", function () { console.log("cargado");});
window.addEventListener("click", function () { document.body.style.backgroundColor = 'red';});

console.log("----------Funciones arrow-----");
console.log(filtrar(notas, (numero) => { return numero >= 5;} ));
// Si solo tiene return se puede omitir el return
console.log(filtrar(notas, (numero) => { numero >= 5; } ));
// Si solo tiene un parámetro se peude omitir los paréntesis
console.log(filtrar(notas, numero => { numero >= 5; } ));
console.log(filtrar(notas, numero => { numero < 5; }));
console.log(filtrar(notas, numero => { return numero % 2 ==  0; }));
notas.sort((n1, n2) => { return n1 - n2;});
console.log(notas);
window.addEventListener("load", () => { console.log("cargado");});
window.addEventListener("click", () => { document.body.style.backgroundColor = 'red';});

console.log("----------Funciones filter, map, reduce,-----");
console.log(notas.filter(nota => nota >= 5));
console.log(notas.filter(nota => nota < 5));
console.log(notas.filter(nota => nota % 2 == 0));

let personas = [
    {nombre: "pedro", edad: 21},
    {nombre: "eva", edad: 18},
    {nombre: "luis", edad: 43},
    {nombre: "sandra", edad: 12},
    {nombre: "sergio", edad: 56},
 ]

 console.log(personas.filter(function(p) { return p.edad >= 18}));
 console.log(personas.filter(p => p.edad >= 18));
 console.log(personas.filter(p => p.nombre.startsWith("s")));
 // Muestra las personas de 18 o más años y que su nombre comiencen por s
 console.log(personas.filter(p => p.edad >= 18).filter(p => p.nombre.startsWith("s")));
 // Con un solo filtro
 console.log(personas.filter(p => p.edad >= 18 && p.nombre.startsWith("s")));

 // Obtener un array con los nombres
 let nombres = [];
 for (const p of personas) {
    nombres.push(p.nombre);
 }
 console.log(nombres);
// De modo más corto
// map procesa cada elemento de la colección y devuelve un nuevo array con los valores indicados
console.log(personas.map(p => p.nombre));
console.log(personas.map(p => { return {nombre: p.nombre, mayor: p.edad >= 18}}));
let valores = ["20", "30", "15", "8"];
console.log(valores.map( numero => parseInt(numero)));
// Devolvemos los nombres de las personas de 18 o más años
console.log(personas.filter(p => p.edad >= 18).map(p => p.nombre))
/* Devuelve la suma de todas las notas.
Primero llama a la función pasando 0 como anterior y como actual el valor del primer elemento del array
Luego llama a la función pasando como anterio la suma de anterior + actual y como actual el valor del segundo elemento del array
....*/
notas = [1, 5, 3, 7, 8, 10, 4];
console.log(notas.reduce((anterior, actual) => anterior + actual));
// Devuelve la nota mayor
console.log(notas.reduce((anterior, actual) => anterior > actual ? anterior: actual));
// Devuelve la persona con el nombre mayor alfabéticamante
console.log(personas.reduce((anterior, actual) => anterior.nombre > actual.nombre ? anterior: actual));
console.log(personas.reduce((anterior, actual) => anterior.nombre > actual.nombre ? anterior: actual).nombre);
console.log("-------");
// Devuelve true si todas las notas están aprobadas
console.log(notas.every(nota => nota >= 5));
// Devuelve true si al menos una de las notas están aprobadas
console.log(notas.some(nota => nota >= 5));

// Es otra manera de hacer un for of
notas.forEach(nota => console.log(nota));




















