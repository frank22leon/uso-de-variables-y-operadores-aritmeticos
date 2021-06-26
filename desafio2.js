
//solicitar al usuario un numero distinto de 0
const numberOne = prompt("Ingresa un número distinto mayor a 0");

//solicitar al usuario un numero distinto al anterior
const numberTwo = prompt("Ingresa un número distinto al anterior y mayor a 0");

//convertir strings en numeros 
const numberOneQty = Number.parseInt(numberOne);
const numberTwoQty = Number.parseInt(numberTwo);

console.log(numberOneQty, numberTwoQty)

//if para comprobar que los numeros ingresados son mayores de 0 y no son iguales
if (numberOneQty > 0 && numberTwoQty > 0 && numberTwoQty !== numberOneQty) {

//operaciones con los dos numeros solicitados// SUMA, RESTA, MULTIPLICACION, DIVISION, MODULO
let resultSum = (numberOneQty + numberTwoQty);
let resultSubstraction = (numberOneQty - numberTwoQty);
let resultDivision = (numberOneQty * numberTwoQty);3
let resultMultiplication = (numberOneQty / numberTwoQty);100
let resultModule = (numberOneQty % numberTwoQty);


console.log(resultSum, resultSubstraction, resultDivision, resultMultiplication, resultModule)
}   else    {
    //mensaje de error al usuarios
    alert("error al ingresar numeros")
}


