let verstasjonSolheimsviken = [];
let verstasjonDanmarksplass = [];

let antallMaalingar = 1440;

// Deloppgåve A:
for (let i = 0; i < antallMaalingar; i++) {
    verstasjonSolheimsviken[i] = returnerTilfeldigMaaling(3,69);
    verstasjonDanmarksplass[i] = returnerTilfeldigMaaling(10,150);
}

// function returnerTilfeldigMaaling() {
//     return Math.floor(Math.random() * 151);
// }

function returnerTilfeldigMaaling(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
  

console.log(verstasjonDanmarksplass); // Sjekk for å sjå om Danmarksplass har fått verdiar

// Deloppgåve B:
let sum = 0;
let gjennomsnitt = 0;

function returnerGjennomsnittArray(arrayInn) {
    sum = 0;
    for(let i = 0; i < arrayInn.length; i++) {
        sum += arrayInn[i];
    }

    //console.log("Summen av alle måledata er: " + sum);

    gjennomsnitt = sum / arrayInn.length;

    return gjennomsnitt;
}

let gjennomsnittDanmarksplass = returnerGjennomsnittArray(verstasjonDanmarksplass);
let gjennomsnittSolheimsviken = returnerGjennomsnittArray(verstasjonSolheimsviken);

console.log("Gjennomsnittsverdien av alle partikkelmålingane frå Solheimsviken er " + gjennomsnittSolheimsviken);
console.log("Gjennomsnittsverdien av alle partikkelmålingane frå Danmarksplass er " + gjennomsnittDanmarksplass);

if (gjennomsnittDanmarksplass > gjennomsnittSolheimsviken) {
    console.log("Gjennomsnittverdiane for Danmarksplass er høgare enn Solheimsviken.");
}
else {
    console.log("Gjennomsnittverdien for Solheimsviken er høgare enn Danmarksplass.");
}

function finnHogasteVerdi(arrayInn) {
    let max = 0;
    for(let i = 0; i < arrayInn.length; i++) {
        if (arrayInn[i] > max) {
            max = arrayInn[i];
        }
    }
    //console.log("Høgaste registrerte verdi: " + max);
    
    return max;
}

function finnLaagasteVerdi(arrayInn) {
    let min = 150;
    for(let i = 0; i < arrayInn.length; i++) {
        if (arrayInn[i] < min) {
            min = arrayInn[i];
        }
    }
    // console.log("Lågaste registrerte verdi: " + min);
    
    return min;
}

let hogasteVerdiDanmarksplass = finnHogasteVerdi(verstasjonDanmarksplass);
let lagasteVerdiDanmarksplass = finnLaagasteVerdi(verstasjonDanmarksplass);
let hogasteVerdiSolheimsviken = finnHogasteVerdi(verstasjonSolheimsviken);
let lagasteVerdiSolheimsviken = finnLaagasteVerdi(verstasjonSolheimsviken);

console.log("Maksverdi for Danmarksplass er " + hogasteVerdiDanmarksplass);
console.log("Minsteverdi for Danmarksplass er " + lagasteVerdiDanmarksplass);
console.log("Maksverdi for Solheimsviken er " + hogasteVerdiSolheimsviken);
console.log("Minsteverdi for Solheimsviken er " + lagasteVerdiSolheimsviken);

if (hogasteVerdiDanmarksplass > hogasteVerdiSolheimsviken) {
    console.log("Høgaste registrerte verdi funnen på Danmarksplass.");
}
else if (hogasteVerdiDanmarksplass < hogasteVerdiSolheimsviken){
    console.log("Høgaste registrerte verdi funnen i Solheimsviken.");
}
else {
    console.log("Like maksverdiar for begge målestasjonar.");
}

if (lagasteVerdiDanmarksplass < lagasteVerdiSolheimsviken) {
    console.log("Lågaste registrerte verdi funnen på Danmarksplass.");
}
else if (lagasteVerdiDanmarksplass > lagasteVerdiSolheimsviken){
    console.log("Lågaste registrerte verdi funnen i Solheimsviken.");
}
else {
    console.log("Like minimumsverdiar for begge målestasjonar.");
}

// Deloppgåve C:
function renskData(arrayInn, grenseverdi) {
    for (let i = 0; i < arrayInn.length; i++) {
        if (arrayInn[i] > grenseverdi) {
            arrayInn.splice(i,1);
        }
    }
}

console.log("Arraylengde før rensking: " + verstasjonDanmarksplass.length);
renskData(verstasjonDanmarksplass, 140);
console.log("Arraylengde etter rensking: " + verstasjonDanmarksplass.length);

console.table(verstasjonDanmarksplass); // For eventuell manuell kontroll