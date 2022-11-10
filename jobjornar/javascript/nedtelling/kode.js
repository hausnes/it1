let nedtelling = setInterval(tikk, 1000);

let antallSekunder = prompt("Hvor mange sekunder?"); // Spør brukaren kor mange sekunder og lagrar det i variabelen antallSekunder

let musikkFerdig = new Audio("lyd/happy-day-113985.mp3");
let musikkBakgrunn = new Audio("lyd/just-a-click-away-sci-fi-background-music-109864.mp3");

function tikk() {
    antallSekunder = antallSekunder - 1; // Trekk fra en på antall sekunder
    console.log(antallSekunder); // Skriv ut antall gjenværende sekund
    document.getElementById("utskrift").innerText = antallSekunder;

    if (antallSekunder <= 3) {
        document.getElementById("utskrift").style.color = "red"; // Skriftfarge for h1 til rød
    }

    if (antallSekunder <= 0) {
        document.getElementById("utskrift").innerText = "Gratulerer, du kan gå!";
        document.getElementById("utskrift").style.color = "green"; // Skriftfarge for h1 til grønn
        musikkFerdig.play(); // Startar musikken som speler når ferdig nedtelling
        musikkBakgrunn.pause(); // Stoppar bakgrunnsmusikken
        clearInterval(nedtelling); // Stoppar den automatiske køyringa av "tikk"
    }
}

document.body.addEventListener("click", spillMusikk);

function spillMusikk() {
    musikkBakgrunn.play();
}

// Alternativ løysing til det over
// document.body.addEventListener("click", function() {
//      ...
// });

/*
    To-do:
    x endre stilark etter behov: eks. når 3 sek. igjen, rød skriftfarge,
      når ferdig, grønn skrift.
    x bakgrunnsmusikk (NB: autoavspeling av lyd er fy-fy)
    x musikk når ferdig
*/