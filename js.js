const array1 = ["Matematikk", "Engelsk", "Naturfag"];
const array2 = [": 5 timer", ": 3 timer", ": 4 timer"];

array1.forEach((element) => console.log(element));

console.log(" ");

array1.push("Produksjon og historiefortelling")

array1.forEach((element) => console.log(element));

console.log(" ");

array1.pop()

array1.forEach((element) => console.log(element));

console.log(" ");

console.log(array1.includes("Matematikk", 0));

console.log(" ");

let i = 0;

while (i < array1.length ) {
    console.log(array1[i] + array2[i]);
    i++;
}

console.log(" ");

array1.push("Kroppsøving")
array2.push(": 2 timer")

i = 0;

while (i < array1.length ) {
    console.log(array1[i] + array2[i]);
    i++;
}

console.log(" ");

function Timer(fagnavn) {
    let plass = array1.indexOf(fagnavn)
    console.log(fagnavn)
 
    let testFag = array2[plass] //Tar timer fra timerArray, og finner plassen som er fra plass
    console.log(testFag)
 
}
 
Timer("Matematikk") //Kjører funksjonen

console.log(" ");

function Fjern(position, item, additem, addtimer) {
    array1.splice(position, item, additem);
    array2.splice(position, item, addtimer);
}

Fjern(2, 1, "KRLE", ": 4 timer") 

i = 0;

while (i < array1.length ) {
    console.log(array1[i] + array2[i]);
    i++;
}