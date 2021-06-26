//pregunta cantidad de días
let userDays = prompt("Ingresa una cantidad de días");
//convertir strings a numero
let userDaysQty = Number.parseInt(userDays);
console.log(userDaysQty);
//convertir dias a años y redondear
let year = Math.floor(userDaysQty / 365);
//calcular modulo de los años para poder calcular las semnas
let yearModule = userDaysQty % 365;

console.log(year)
// este if se acciona si el modulo del año permite tener semanas al ser igual o mayor a 7
if(yearModule >= 7) {

let week = Math.floor(yearModule / 7);
let weekModule = yearModule % 7 ;

let day = weekModule;

alert(`${userDays} días es igual a ${year} años, ${week} semanas y ${day} días.`)
console.log(week, day)
}
 //si no tiene semnas se calcula solo los días
else {
    let week = 0;
    let day = yearModule;

    alert(`${userDays} días es igual a ${year} años, ${week} semanas y ${day} días.`)

    console.log(week, day)
}











