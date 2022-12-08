const knappReknUt = document.getElementById("knappReknUt"); // Hentar knapp frå HTML
knappReknUt.addEventListener("click", reknUtArealAvTrapes); // Legg til ein lyttefunksjon dersom ein trykker på knappen

let inputA = document.getElementById("inputA"); // Hentar dei tre input-felta
let inputB = document.getElementById("inputB");
let inputH = document.getElementById("inputH");

const resultat = document.getElementById("resultat"); // HTML-elementet me skal skrive resultat til

let a = 0;
let b = 0;
let h = 0;
let arealTrapes = 0;

function reknUtArealAvTrapes() {
    a = parseInt(inputA.value); // Forsøker å hente innhald frå input-felta og konvertere til heiltall
    b = parseInt(inputB.value);
    h = parseInt(inputH.value);

    if (isNaN(a) || isNaN(b) || isNaN(h)) { // Dersom nokon av dei 3 variablane ikkje er eit tal, altså N(ot)aN(umber)
        // alert("Feil i input! Sjå til at alt du har skrive inn er tal.");
        resultat.innerText = "Feil i input! Sjå til at alt du har skrive inn er tal.";
        resultat.style.backgroundColor = "red";
        return; // Stoppar resten av funksjonen frå å køyre, altså køyrer ingenting lenger nede i denne funksjonen
    }

    arealTrapes = ((a+b)*h)/2; // Reknar ut arealet

    resultat.innerText = "Arealet av trapeset er " + arealTrapes + "."; // Skriv ut resultatet
    resultat.style.backgroundColor = "white";
}