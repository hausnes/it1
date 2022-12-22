let totalPris = 0;
let stykkPris = 0;
let utlegg = [];

let antallPersonar = parseInt(prompt("Hvor mange personer?"));

if (antallPersonar < 2) {
    console.log("Du trenger ikke denne tjenesten. :)");
}
else {
    for (let i = 1; i <= antallPersonar; i++) {
        console.log("Person nr. " + i + ":");
        let nyttUtlegg = parseInt(prompt("Person " + i + ": Hvor mye la du ut?"));
        totalPris += nyttUtlegg;
        utlegg.push(nyttUtlegg);
    }
    
    console.table(utlegg);

    stykkPris = totalPris / antallPersonar;

    console.log("Totalpris: " + totalPris);
    console.log("Stykkpris: " + stykkPris);

    for (let i = 1; i <= antallPersonar; i++) {
        if (utlegg[i-1] > stykkPris) {
            console.log("Person " + i + ", du skal få: " + (utlegg[i-1] - stykkPris));    
        }
        else if (utlegg[i-1] < stykkPris) {
            console.log("Person " + i + ", du skuldar: " + (stykkPris - utlegg[i-1]));   
        }
        else {
            console.log("Person " + i + ", du treng ikkje foreta deg noko.");
        }
    }
}