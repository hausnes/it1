// Anbefalt løysing:
let prisVare = 299; // Endrar me denne variabelen så blir alle prisar på sida oppdatert ved neste lasting.

let allePrisar = document.querySelectorAll("span"); // henter ut alle span-taggane på nettsida, som inneheld prisen (og berre den)
console.log(allePrisar); // Sjekk/test: "nodelist", alle span sin verdi - som me kan gå/iterere gjennom - fungerer altså som ein array

for (let enkeltPris of allePrisar) { // Løkke som går gjennom alle span-taggane og endrar innhaldet til oppdatert pris. 
    enkeltPris.innerText = prisVare;
}

// Alternativ for-løkke som gjer akkurat det same som den over
// for (let i = 0; i < allePrisar.length; i++) {
//     allePrisar[i].innerText = prisVare;
// }

/*
    ----------------------
    Alternative løysingar:
    ----------------------
*/

// Alternativ 1: Me kunne brukt getElementsByClassName og lagt inn klassar rundt prisane. For-løkke lik som over.

// Alternativ 2: Me kunne lagt inn ID-ar for kvar enkelt element, lagt dei i ein array og så steg-for-steg gått
// gjennom alle desse. Litt meir tungvint, men fortsatt ein OK måte å gjere det på.
// let arrayPrisar = [];
// let pris1 = document.getElementById("pris1"); // NB: Eg har ikkje lagt inn noko med id lik dette per no
// arrayPrisar.push(pris1);
// let pris2 = document.getElementById("pris2");
// arrayPrisar.push(pris2);
// ...
// ..for så å iterere gjennom alle desse og endre dei.
// for (let i = 0; i < arrayPrisar.length; i++) {
//     arrayPrisar[i].innerText = prisVare;
// }

// Alternativ 3: Me kunne gjort som i alternativ 2 utan å bruke array. Tungvint jo fleire element det er snakk om, 
// men det fungerer!