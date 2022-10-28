const utskrift = document.getElementById("utskrift");
// utskrift.innerText = "test";
// console.log(utskrift);

const språk = navigator.language;
console.log("Nettleser: " + språk);
if (språk === "nb-NO" || språk == "nb") {
    console.log("Du har norsk språk i nettleseren.");
} else if(språk === "us") {
    console.log("Amerikansk.");
}
else {
    console.log("Du har et annet språk..");
}

const plattform = navigator.platform;
console.log("Plattform: " + plattform);

const nettleser = navigator.userAgent;
console.log("Nettleser: " + nettleser);
if (nettleser.includes("x64")) {
    console.log("Du sitter på et 64-bits operativsystem.");
} else {
    console.log("Du har 32-bit");
}

// Hent ut størrelsen på body/skjerm (screen, window)
let hoyde = window.innerHeight;
console.log("Høgde: " + hoyde);
let hoydeScreen = screen.height;
console.log("Høgde (screen): " + hoydeScreen);
let bredde = window.innerWidth
// Hent ut geolokasjon, sjå gjerne W3Schools...
// ...