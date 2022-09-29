// console.log("Me loggar til konsollen!");
// console.warn("OBS! Dette er en advarsel!");
// console.error("Dette er en feilmelding!");
// console.info("Dette er en informasjonsmelding!");

// alert("Dette er en advarsel!");
// let innlest = prompt("Skriv inn noe her:");
// console.log(innlest);

// const innlest1 = prompt("Tall 1: ");
// const innlest2 = prompt("Tall 2: ");
// const sum = Number(innlest1) + Number(innlest2);
// alert("Summen er: " + sum);

const PI = Math.PI;
console.log(PI);

document.querySelector("h1").innerHTML = "PI er: " + (PI*2);
document.getElementById("pi").innerHTML = "PI er: " + PI;

let date = new Date();
console.log(date);

setInterval(visKlokke, 1000);

function visKlokke() {
    let date = new Date();
    document.getElementById("klokke").innerHTML = date.toLocaleTimeString();
}

let sitat = "Dette er et sitat";
console.log(sitat);
console.log(sitat.indexOf("sitat"));
console.log(sitat.indexOf("sitater"));
console.log(sitat.indexOf("Sitat"));

// let setning = "Dette er ein lang setning med ganske mange ulike bokstavar.";
// let leiteEtter = prompt("Kva bokstav skal eg leite etter?");
// if (setning.indexOf(leiteEtter) != -1) {
//     console.log("Fant bokstaven eller ordet!");
// }
// else {
//     console.log("Fant ikkje bokstaven eller ordet!");
// }

console.log("a" === "a");
console.log("a" === "b");
console.log(1 === 1);
let tall = prompt("Skriv inn tallet 7: ");
console.log(tall === 7);
tall = parseInt(tall);
console.log(tall === 7);