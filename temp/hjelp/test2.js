function fjernFalskeBrukere(brukerliste, nokkelord) {
    let ekte_brukere = [];
    console.log("brukerliste.length = " + brukerliste.length);
    for (let i = 0; i < brukerliste.length; i++) {
        console.log("Sjekkar: " + brukerliste[i]);
        if (brukerliste[i].includes(nokkelord)) {
            // console.log("Fant nøkkelord, legg ikkje til.");
        }
        else {
            console.log("Fant ikkje, legg til i lista.");
            ekte_brukere.push(brukerliste[i]);
        }
    }
    return ekte_brukere;
}

console.log(fjernFalskeBrukere(["thorc", "ravim", "ceiliet", "fredrikg"], "fredrik"));