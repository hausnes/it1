setInterval(tikk, 1000);

let antallSekunder = prompt("Hvor mange sekunder?");

function tikk() {
    antallSekunder = antallSekunder - 1; // Trekk fra en på antall sekunder
    console.log(antallSekunder); // Skriv ut antall gjenværende sekund
    document.getElementById("utskrift").innerText = antallSekunder;

    if (antallSekunder <= 0) {
        document.getElementById("utskrift").innerText = "Gratulerer!";
    }
} 