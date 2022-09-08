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

/*
    To-do:
    - endre stilark etter behov: eks. når 3 sek. igjen, rød skriftfarge,
      når ferdig, grønn skrift.
    - bakgrunnsmusikk (NB: autoavspeling av lyd er fy-fy)
    - musikk når ferdig
*/