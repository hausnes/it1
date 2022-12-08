let verstasjonSolheimsviken = []; // Eigne arrayar for kvar verstasjon
let verstasjonDanmarksplass = [];

/*
    -------------
    Deloppgåve A:
    -------------
*/

let antallMaalingar = 1440; // Slik at me slepp endre dette fleire stader, om naudsynt

for (let i = 0; i < antallMaalingar; i++) {
    verstasjonSolheimsviken[i] = returnerTilfeldigMaaling(3,69); // Andre verdiar for å "leike litt" med data, og sjå om resten av koden fungerer
    verstasjonDanmarksplass[i] = returnerTilfeldigMaaling(10,150);
}

// function returnerTilfeldigMaaling() {
//     return Math.floor(Math.random() * 151);
// }

function returnerTilfeldigMaaling(min, max) { // Kjelde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

console.log(verstasjonDanmarksplass); // Sjekk for å sjå om Danmarksplass har fått verdiar

/*
    ----------------------------
    Deloppgåve B, gjennomsnitt:
    ----------------------------
*/

let sum = 0;
let gjennomsnitt = 0;

function returnerGjennomsnittForArray(arrayInn) {
    sum = 0;
    for(let i = 0; i < arrayInn.length; i++) {
        sum += arrayInn[i];
    }

    //console.log("Summen av alle måledata er: " + sum);

    gjennomsnitt = sum / arrayInn.length;

    return gjennomsnitt;
}

let gjennomsnittDanmarksplass = returnerGjennomsnittForArray(verstasjonDanmarksplass);
let gjennomsnittSolheimsviken = returnerGjennomsnittForArray(verstasjonSolheimsviken);

console.log("Gjennomsnittsverdien av alle partikkelmålingane frå Solheimsviken er " + gjennomsnittSolheimsviken);
console.log("Gjennomsnittsverdien av alle partikkelmålingane frå Danmarksplass er " + gjennomsnittDanmarksplass);

if (gjennomsnittDanmarksplass > gjennomsnittSolheimsviken) {
    console.log("Gjennomsnittverdiane for Danmarksplass er høgare enn Solheimsviken.");
}
else {
    console.log("Gjennomsnittverdien for Solheimsviken er høgare enn Danmarksplass.");
}

/*
    ----------------------------------------
    Deloppgåve B, høgaste og lågaste verdi:
    ----------------------------------------
*/

function finnHogasteVerdi(arrayInn) {
    let maks = 0;
    for(let i = 0; i < arrayInn.length; i++) {
        if (arrayInn[i] > maks) {
            maks = arrayInn[i];
        }
    }
    //console.log("Høgaste registrerte verdi: " + maks);
    
    return maks;
}

function finnLaagasteVerdi(arrayInn) {
    let min = 150; // I staden for 150, som kan passe her, så burde ein vore meir generell og brukt t.d. "Infinity"
    for(let i = 0; i < arrayInn.length; i++) {
        if (arrayInn[i] < min) {
            min = arrayInn[i];
        }
    }
    // console.log("Lågaste registrerte verdi: " + min);
    
    return min;
}

// Alternativ funksjon for både finn lågaste og høgaste er å først sortere og deretter hente ut det første eller siste elementet.
// Kva tenker du er mest effektivt av desse to alternativa?

let hogasteVerdiDanmarksplass = finnHogasteVerdi(verstasjonDanmarksplass);
let lagasteVerdiDanmarksplass = finnLaagasteVerdi(verstasjonDanmarksplass);

let hogasteVerdiSolheimsviken = finnHogasteVerdi(verstasjonSolheimsviken);
let lagasteVerdiSolheimsviken = finnLaagasteVerdi(verstasjonSolheimsviken);

console.log("Maksverdi for Danmarksplass er " + hogasteVerdiDanmarksplass);
console.log("Minsteverdi for Danmarksplass er " + lagasteVerdiDanmarksplass);
console.log("Maksverdi for Solheimsviken er " + hogasteVerdiSolheimsviken);
console.log("Minsteverdi for Solheimsviken er " + lagasteVerdiSolheimsviken);

// Vurderer maksimumverdiar.
if (hogasteVerdiDanmarksplass > hogasteVerdiSolheimsviken) {
    console.log("Høgaste registrerte verdi funnen på Danmarksplass.");
}
else if (hogasteVerdiDanmarksplass < hogasteVerdiSolheimsviken){
    console.log("Høgaste registrerte verdi funnen i Solheimsviken.");
}
else {
    console.log("Like maksverdiar for begge målestasjonar.");
}

// Vurderer minimumveriar.
if (lagasteVerdiDanmarksplass < lagasteVerdiSolheimsviken) {
    console.log("Lågaste registrerte verdi funnen på Danmarksplass.");
}
else if (lagasteVerdiDanmarksplass > lagasteVerdiSolheimsviken){
    console.log("Lågaste registrerte verdi funnen i Solheimsviken.");
}
else {
    console.log("Like minimumsverdiar for begge målestasjonar.");
}

/*
    -------------
    Deloppgåve C:
    -------------
*/

function renskData(arrayInn, grenseverdi) {
    for (let i = 0; i < arrayInn.length; i++) {
        if (arrayInn[i] > grenseverdi) {
            arrayInn.splice(i,1); // Fjernar elementet som ligg der me fant det.
        }
    }
}

// Testar/brukar funksjonen "renskData"
console.log("Arraylengde før rensking: " + verstasjonDanmarksplass.length);
renskData(verstasjonDanmarksplass, 140);
console.log("Arraylengde etter rensking: " + verstasjonDanmarksplass.length);

console.table(verstasjonDanmarksplass); // For eventuell manuell kontroll til slutt