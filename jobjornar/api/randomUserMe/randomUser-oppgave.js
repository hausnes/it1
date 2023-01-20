let antall = parseInt(prompt("Kor mange?"));
let kjonn = prompt("Gender: (male/female");
let nasjonalitet = prompt("Nasjonalitet (AU, BR, CA, CH, DE, DK, ES, FI, FR, GB, IE, IN, IR, MX, NL, NO, NZ, RS, TR, UA, US):");

// https://randomuser.me/api/?results=5&gender=male&nat=no

fetch('https://randomuser.me/api/?results=' + antall + "&gender=" + kjonn + "&nat=" + nasjonalitet)
	.then(response => response.json())
	// .then(response => console.log(response))
    .then(response => behandleSvar(response))
	.catch(err => console.error(err));

// OPPGAVE: Hent 5 brukere og opprett en div-boks med
// navn som overskrift, bilde og e-post under.
// Utvidelse: Spør brukaren kor mange som skal hentast

function behandleSvar(svar) {
    // Testing
    console.log(svar);
    console.log("Navn: " + svar.results[0].name.first);
    console.log("Epost: " + svar.results[0].email);
    console.log("Bilde: " + svar.results[0].picture.large);

    // HTML-visning
    for(let i = 0; i < svar.results.length; i++) {
        let divBoks = document.createElement("div");
        let navn = document.createElement("h1"); // Opprettar ein paragraf, men den er per no ikkje plassert
        navn.innerText = "Navn: " + svar.results[i].name.first; // Endrar innhaldet i paragrafen
        let epost = document.createElement("p");
        epost.innerText = "Epost: " + svar.results[i].email;
        let bilde = document.createElement("img");
        bilde.src = svar.results[i].picture.large;

        divBoks.appendChild(navn);
        divBoks.appendChild(epost);
        divBoks.appendChild(bilde);
        document.body.appendChild(divBoks);
    }
}