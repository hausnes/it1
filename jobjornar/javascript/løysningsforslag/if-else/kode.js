// Eksempel 1
// let innlestTall = prompt("Skriv inn et tall.");
// console.log(typeof innlestTall);

// innlestTall = parseInt(innlestTall); // Eller: .. Number(innlestTall)
// console.log(typeof innlestTall);

// Eksempel 2
let interesse = "jeg liker å stå på tELEmarkski!";
if (interesse === "Telemark" || interesse === "TELEMARK" && interesse === "tElEmArK") {
    console.log("Me har samme interesse.");
}

//console.log(interesse.toLowerCase());

if (interesse.toLowerCase() === "telemark") {
    console.log("Jepp, me har samme interesse.");
}

if (interesse.toLowerCase().includes("telemark")) {
    console.log("Jadda!");
}