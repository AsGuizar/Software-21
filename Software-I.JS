console.log("Ejercicio 1");

let r=5;
let pi=3.1416;

let resultado= r*r*pi; 
console.log(`Su resultado es ${resultado}, felicidades `);

console.log("Ejercicio 2");
let a= 6;
let b= 8;
let c= 12;

if (a===b && b===c && c===a){
    console.log(`Las variables si se repiten`);
} else {
    console.log(`Las variables no se repiten`);
}

if (a<10){
    console.log(`${a} si es menor que 10` );
} else { 
    console.log(`${a} no es menor que 10`);
}

if (b<10){
    console.log(`${b} si es menor que 10` );
} else { 
    console.log(`${b} no es menor que 10`);
}

if (c<10){
    console.log(`${c} si es menor que 10` );
} else { 
    console.log(`${c} no es menor que 10`);
}

console.log(`Ejercicio 3`);

let primerParcial = 10;
let segundoParcial = 8;
let tercerParcial = 10;

let promedio = (primerParcial + segundoParcial + tercerParcial) / 3;

console.log(`El promedio fue de ${promedio}, felicidades`);