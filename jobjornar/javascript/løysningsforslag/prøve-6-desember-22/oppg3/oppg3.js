const knappReknUt = document.getElementById("knappReknUt");
let inputA = document.getElementById("inputA");
let inputB = document.getElementById("inputB");
let inputH = document.getElementById("inputH");

const resultat = document.getElementById("resultat");

knappReknUt.addEventListener("click", reknUtArealAvTrapes);

let a = 0;
let b = 0;
let h = 0;
let arealTrapes = 0;

function reknUtArealAvTrapes() {
    a = parseInt(inputA.value);
    b = parseInt(inputB.value);
    h = parseInt(inputH.value);

    if (isNaN(a) || isNaN(b) || isNaN(h)) {
        alert("Feil i input! Sjå til at alt du har skrive inn er tal.");
        resultat.innerText = "Feil i input! Sjå til at alt du har skrive inn er tal.";
        return; // Stoppar resten av funksjonen frå å køyre.
    }

    arealTrapes = ((a+b)*h/2);

    resultat.innerText = "Arealet av trapeset er " + arealTrapes + ".";
}