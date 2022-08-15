let arrayBilder = ["calc","backpack","bill","briefcase"]; // NB: Dersom du har bileter med ulike filtypar så må du legge det til her, samt endre linje 23 under.
//console.log(arrayBilder[1]); // Test

// Startar nettsida opp med å vise eit bilete (det første)
//document.getElementById("bildeSomVises").src = "bileter/art.svg"; // Samanlikn med linja to hakk ned. Dei er like, sant?
let aktivtBilde = 0;
document.getElementById("bildeSomVises").src = "bileter/" + arrayBilder[aktivtBilde] + ".svg";

// Registrerer lyttefunksjonar på dei to knappane for å navigere i biletgalleriet
document.getElementById("knappNesteBilde").addEventListener("click", nesteBilde);
document.getElementById("knappForrigeBilde").addEventListener("click", forrigeBilde);

// Funksjon som viser det neste biletet
function nesteBilde() {
    //console.log("Funksjonen køyrer..");
    if (aktivtBilde >= arrayBilder.length - 1) { // Dersom me kjem utanfor arrayen sin lengde
        aktivtBilde = 0;
    } else { // Dersom me er innanfor arrayen sin lengde
        aktivtBilde = aktivtBilde + 1;
        //aktivtBilde += 1;
        //aktivtBilde++;
    }
    //document.getElementById("bildeSomVises").src = "bileter/" + arrayBilder[aktivtBilde] + ".svg";
    settBilde(aktivtBilde);
}

    // Funksjon som viser det forrige biletet
function forrigeBilde() {
    if (aktivtBilde <= 0) { // Dersom me kjem utanfor arrayen sin lengde
        aktivtBilde = arrayBilder.length - 1;
    } else { // Dersom me er innanfor arrayen sin lengde
        aktivtBilde = aktivtBilde - 1;
        //aktivtBilde -= 1;
    }
    //document.getElementById("bildeSomVises").src = "bileter/" + arrayBilder[aktivtBilde] + ".svg";
    settBilde(aktivtBilde);
}

// Eksempel på betre bruk av funksjonar:
function settBilde(bildeInn) {
    document.getElementById("bildeSomVises").src = "bileter/" + arrayBilder[bildeInn] + ".svg";
}