// Henter bildeelementene
let dorbilderEl = document.querySelectorAll("img");

// Går gjennom alle bildene og legger på samme lytter på hver av dem
for (let i = 0; i < dorbilderEl.length; i++) {
    dorbilderEl[i].addEventListener("click", sjekkDor);
}

// Funksjon som sjekker hvilken dør som ble trykket
function sjekkDor(e) {
    let trykketDor = e.target;
    console.log(trykketDor.id);

    // Bytter ut bilde av valgt dør med geit eller bil
    if (trykketDor.id === "dor1") {
        e.target.src = "https://assets.codepen.io/5037447/geit.png";
    } else if (trykketDor.id === "dor2") {
        e.target.src = "https://assets.codepen.io/5037447/bil.png";
    } else {
        e.target.src = "https://assets.codepen.io/5037447/geit.png";
    }
}