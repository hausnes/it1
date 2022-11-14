// Funksjon utan parameter
function siHei() {
  console.log("Hei!");
}

siHei(); // Kallar på funksjonen

// Funksjon med parameter
function siHeiTil(namn) {
  console.log("Hei, " + namn + "!");
}

// Kallar på funksjonen, og "legg ved" parameter
siHeiTil("Kari");

function returnerTilfeldigTall() {
    let tall = Math.random();
    return tall;
    console.log("Denne linja køyrer ikkje!");
}

console.log(returnerTilfeldigTall());

addEventListener("keydown", function(event) { // Anonym funksjon
    let tast = event.key;
    console.log("Datatype: " + typeof tast);
    console.log(tast);
    document.querySelector("#utskrift").innerHTML = tast;
});

// Arrow-funksjon: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
hello = () => {
    return "Hello World!";
}

console.log(hello());

// addEventListener("keyup", (evt) => {
//     let tastOpp = evt.key;
//     document.querySelector("#utskrift").innerHTML = tastOpp;
// });