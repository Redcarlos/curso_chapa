const myMultiplication = (param1, param2) => {
    let dato = param1 * param2;
    return dato;
}
const param1 = 20;
const param2 = 20;
let dato = myMultiplication(param1,param2);
//dato = dato + 20;
//console.log(`La multiplicacion de: ${param1} * ${param2} = ${dato}`);
//__________________________________________________________
// array 
let frutas = ["Manzana", "Banana","Naranja"];

let primero = frutas[0];

let ultimo = frutas[frutas.length - 1];
//console.log(ultimo);

frutas.forEach(function(elemento, indice, array){
//    console.log(elemento, indice);
})
//__________________________________________________________
// objeto
const pet = {
    name:'pelusa',
    type: 'perro',
    age: 5
}

pet.name='luna'; //para modificar valor de un objeto
pet.age='8';

const {name, type, age} = pet;  //Destructuring 

console.log(name, type, age);