
//pedir al usario temperatura en Celsius
const celsius = prompt("Ingresa temperatura en grados Celsius");
const celsiusQty = Number.parseInt(celsius)

console.log(celsiusQty)

//conversion celsius a kelvin
const transformKelvin =  celsiusQty + 273.15;
//conversion celsius a Fahrenheit
const transformFahrenheit = (celsiusQty * 9/5) + 32;

console.log(transformKelvin, transformFahrenheit)

alert(`${celsiusQty}°C es igual a ${transformKelvin} grados kelvin y ${transformFahrenheit} grados Fahrenheit`)

