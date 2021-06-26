//pedir al usuario numeros
const numberOne = prompt("Ingrese un número")
const numberTwo = prompt("Ingrese un segundo número")
const numberThree = prompt("Ingrese un tercer número")
const numberFour = prompt("Ingrese un cuarto número")
const numberFive = prompt("Ingrese quinto número")

let sumNumbers = Number.parseInt(numberOne) + Number.parseInt(numberTwo) + Number.parseInt(numberThree) + Number.parseInt(numberFour) + Number.parseInt(numberFive);
let promNumbers = sumNumbers / 5;

console.log(numberOne, numberTwo, numberThree, numberFour, numberFive)

alert(`la suma de los números es ${sumNumbers} y su promedio es ${promNumbers}`)

console.log(sumNumbers,promNumbers)
