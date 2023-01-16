/*
    -------
    Krav 1: Forhåndsregistrere data om deltakarar (slik at me har noko å teste på før alle delar av programmet blir med)
    -------

*/
let deltakarar = [
    {
        navn  : "Jo Bjørnar",
        alder : 40,
        akt1  : 3,
        akt2  : 5,
        akt3  : 2,
        total : 0
    },
    {
        navn  : "BjørneJo",
        alder : 80,
        akt1  : 9,
        akt2  : 5,
        akt3  : 14,
        total : 0
    }
    // {
    //     navn  : "Jo Bjarne",
    //     alder : 4,
    //     akt1  : 0,
    //     akt2  : 4,
    //     akt3  : 0,
    //     total : function() { return this.akt1 + this.akt2 + this.akt3 } // Dette er ein måte som kanskje boka legg opp til at me skal løyse denne?
    // }
];

/*
    -------
    Krav 2: Utskrift
    -------

*/

// Alternativ 1: Skriv ei enkel liste som klar for å fylles ut (typisk innerText eller innerHTML)
const utskrift = document.querySelector("#utskrift");
for (let person of deltakarar) {
    utskrift.innerHTML += "<li>" + person.navn + " (alder: " + person.alder + ")</li>";
}

// Alternativ 2: Opprettar og plasserer element direkte i HTML (createElement og appendChild)
let overskrift = document.createElement("h1");
overskrift.innerText = "Alternativ utskrift av deltakarar";

let nyUnummerertListe = document.createElement("ul");
for (let person of deltakarar) {
    let nyttListeelement = document.createElement("li");
    nyttListeelement.innerHTML = person.navn + " (alder: " + person.alder + ")";
    nyUnummerertListe.appendChild(nyttListeelement);
}

document.body.appendChild(overskrift); // Desse linjene legg faktisk ut innhaldet
document.body.appendChild(nyUnummerertListe);

/*
    -------
    Krav 3:
    -------

*/

// Bruker forms for å registrere brukarar

/*
    -------
    Krav 4: Registrere res. frå konkurransen og oppdatere total poengsum
    -------

*/
const formNyttResultat = document.querySelector("#formNyttResultat");
formNyttResultat.addEventListener("submit", regNyttResultat);

function regNyttResultat(evt) {
    evt.preventDefault();
    let navn = document.getElementById("inpNavn").value;
    for (let person of deltakarar) {
        if(person.navn === navn) {
            person.akt1 = parseInt(document.getElementById("inpAkt1").value);
            person.akt2 = parseInt(document.getElementById("inpAkt2").value);
            person.akt3 = parseInt(document.getElementById("inpAkt3").value);
            person.total = reknUtTotal(person);
        }
    }
    skrivUtListe();
}

function reknUtTotal(person) {
    let aktivitet1 = person.akt1;
    let aktivitet2 = person.akt2;
    let aktivitet3 = person.akt3;
    let totalSum   = aktivitet1 + aktivitet2 + aktivitet3;
    person.total = totalSum; // Oppdaterer poengsummen for brukaren me nettopp ha rekna ut.
    return totalSum;
}

// Test for å sjå om data som er lagt inn fungerer
console.log(deltakarar[0].total); // Test om oppdatering fungerer.

function skrivUtListe() {
    for (let deltaker of deltakarar) {
        console.log(deltaker.navn + " med poengsum " + deltaker.total);
    }
}