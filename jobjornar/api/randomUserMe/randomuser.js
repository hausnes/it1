fetch('https://randomuser.me/api/?results=1')
	.then(response => response.json())
	// .then(response => console.log(response))
    .then(response => behandleSvar(response))
	.catch(err => console.error(err));

function behandleSvar(svar) {
    // Testing
    console.log(svar);
    console.log("Navn: " + svar.results[0].name.first);
    console.log("Epost: " + svar.results[0].email);
    console.log("Bilde: " + svar.results[0].picture.large);

    // HTML-visning
    let navn = document.createElement("p"); // Opprettar ein paragraf, men den er per no ikkje plassert
    navn.innerText = "Navn: " + svar.results[0].name.first; // Endrar innhaldet i paragrafen
    let epost = document.createElement("p");
    epost.innerText = "Epost: " + svar.results[0].email;
    let bilde = document.createElement("img");
    bilde.src = svar.results[0].picture.large;
    document.querySelector("#utskrift").appendChild(navn); // Plasserer paragrafen (navn) i HTML-en (DOM)
    document.querySelector("#utskrift").appendChild(epost);
    document.querySelector("#utskrift").appendChild(bilde);
}