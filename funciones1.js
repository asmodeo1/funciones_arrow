let numeros = [1, 5, 8, 4, 3, 6];

function incrementarEn1(numeros){
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = numeros[i] + 1;
        //numeros[i]++;
    }
}

function decrementarEn1(numeros){
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = numeros[i] - 1;
        //numeros[i]++;
    }
}

function multiplicarPor10(numeros){
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = numeros[i] * 10;
        //numeros[i]++;
    }
}

function procesar(numeros, operacion) {
    for (let i = 0; i < numeros.length; i++) {
        if(operacion == 1) {
            numeros[i] = numeros[i] + 1;
        } else if(operacion == 2) {
            numeros[i] = numeros[i] - 1;
        } else if(operacion == 3) {
            numeros[i] = numeros[i] * 10;
        } else if(operacion == 4) {
            numeros[i] = numeros[i] / 10;
        } else if(operacion == 5) {
            numeros[i] = Math.cos(numeros[i]);
        }
    }
}

function sumar1(numero) {
    return numero + 1;
}

function restar1(numero) {
    return numero - 1;
}

function multiplicar10(numero) {
    return numero * 10;
}

function dividir10(numero) {
    return numero / 10;
}

/**
 * Procesa un arra de números realizando una operación en cada uno de ellos
 * @param {[number]} numeros - array con los valores a procesar
 * @param {function(number): number} funcion - funcion que recibe un número y devuele el número modificado
 */
function procesar2(numeros, funcion) {
    for (let i = 0; i < numeros.length; i++) {
        numeros[i] = funcion(numeros[i]);
    }
}

incrementarEn1(numeros);
console.log(numeros);
decrementarEn1(numeros);
console.log(numeros);
multiplicarPor10(numeros);
console.log(numeros);

procesar(numeros, 1);
console.log(numeros);
procesar(numeros, 3);
console.log(numeros);
procesar(numeros, 4);
console.log(numeros);
procesar(numeros, 5);
console.log(numeros);

console.log("------------");
numeros = [1, 5, 8, 4, 3, 6];
procesar2(numeros, sumar1);
console.log(numeros);
procesar2(numeros, restar1);
console.log(numeros);
procesar2(numeros, multiplicar10);
console.log(numeros);
procesar2(numeros, dividir10);
console.log(numeros);
procesar2(numeros, Math.cos);
console.log(numeros);
procesar2(numeros, Math.sin);
console.log(numeros);

function ordenarPorNombre(persona1, persona2) {
    if(persona1.nombre > persona2.nombre) {
        return 1;
    } else if(persona1.nombre == persona2.nombre) {
        return 0;
    } else {
        return -1;
    }
   //return persona1.nombre.localeCompare(persona2.nombre);
}

function ordenarPorEdad(persona1, persona2) {
    if(persona1.edad > persona2.edad) {
        return 1;
    } else if(persona1.edad == persona2.edad) {
        return 0;
    } else {
        return -1;
    }
   //return persona1.edad - persona2.edad;
}

function compararPorEdadDescendente(persona1, persona2) {
    if(persona1.edad > persona2.edad) {
        return -1;
    } else if(persona1.edad == persona2.edad) {
        return 0;
    } else {
        return 1;
    }
   //return persona2.edad - persona1.edad;
}

function ordenarNumeros(valor1, valor2) {
    return parseInt(valor1) - parseInt(valor2);
}

let personas = [
    {nombre: "pedro", edad: 21},
    {nombre: "eva", edad: 18},
    {nombre: "luis", edad: 43},
    {nombre: "sandra", edad: 31},
    {nombre: "sergio", edad: 56},
 ]

 personas.sort();
 console.log(personas);
 personas.sort(ordenarPorNombre);
 console.log(personas);
 personas.sort(ordenarPorEdad);
 console.log(personas);
 personas.sort(compararPorEdadDescendente);
 console.log(personas);

 numeros = [10, 5, 8, 40, 3, 6];
 // Por defecto, sort convierte los números en texto para ordenarlos, con lo que 10 es menor que 3
 numeros.sort();
 console.log(numeros);
 numeros.sort(ordenarNumeros);
 console.log(numeros);







