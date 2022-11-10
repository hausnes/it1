// Litt "leik" med koden for å sjekke korleis "ting" fungerer
console.log(Math.random());

console.log(getRandomIntInclusive(1,20));

let tilfeldigTall = getRandomIntInclusive(1,20);
console.log(tilfeldigTall);

// Kjelde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// Løysing på oppgåva
let arrayTilfeldigeTall = [];

for (let i = 0; i < 100; i++) {
    arrayTilfeldigeTall[i] = getRandomIntInclusive(1,20);
    //arrayTilfeldigeTall.push(getRandomIntInclusive(1,20));
}

console.log(arrayTilfeldigeTall);
console.table(arrayTilfeldigeTall);

let antallTiere = 0;
let antallOverTi = 0;
let sum = 0;

for (let i = 0; i < arrayTilfeldigeTall.length; i++) {
    if (arrayTilfeldigeTall[i] === 10) {
        antallTiere++;
    }

    if (arrayTilfeldigeTall[i] > 10) {
        antallOverTi++;
    }

    sum = sum + arrayTilfeldigeTall[i];
}

let utskrift = document.getElementById("utskrift");
utskrift.innerHTML = "<li>Antall 10-ere: " + antallTiere + "</li>";
utskrift.innerHTML += "<li>Antall OVER 10: " + antallOverTi + "</li>";
utskrift.innerHTML += "<li>Summen: " + sum + "</li>";

let gjennomsnitt = sum / arrayTilfeldigeTall.length;
utskrift.innerHTML += "<li>Gjennomsnittsverdi: " + gjennomsnitt + "</li>";