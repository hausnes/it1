// Koden frå oppgåveteksten ber om eit tilfeldig tal mellom 1 og 6 heilt 
// fram til dette blir 6, då avsluttar while-løkka.

// Vidare så legg me no til ein tellar (antallKast) som oppdaterast for kvar
// gong me kastar, som me til slutt sjekkar verdien av før me konkluderer.

const utskrift = document.getElementById("utskrift"); // Den unummererte lista me bruker for å skrive ut fortløpande
const resultat = document.getElementById("resultat"); // SLutt-resultatet, basert på kva som skjer i valgsetningane

let terningVerdi = 0;
let antallKast = 0;

function returnerTerningverdi() {
    return Math.floor(Math.random() * 6) + 1;
}

while (terningVerdi != 6) {
    antallKast++;
    terningVerdi = returnerTerningverdi();
    console.log("På kast nr. " + antallKast + " fekk du: " + terningVerdi);
    utskrift.innerHTML += "<li>På kast nr. " + antallKast + " fekk du: " + terningVerdi + "</li>";
}

console.log("Du brukte totalt " + antallKast + " antall kast.");
utskrift.innerHTML += "<li>Du brukte totalt " + antallKast + " antall kast.";

// Oppsummerer resultatet.
if (antallKast > 4) { // Alle verdiar over 4
    console.log("Uflaks!");
    resultat.innerText = "Uflaks!";
}
else if (antallKast > 2) { // Altså, 3 eller 4, sidan forrige if "tek" alt som er over 4
    console.log("Tja, som forventet..");
    resultat.innerText = "Tja, som forventet..";
}
else { 
    console.log("Flaks, Lotto neste!");
    resultat.innerText = "Flaks, Lotto neste!";
}