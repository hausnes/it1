// localStorage.antallBesok = 1;
// localStorage.paalegg = "Nugatti";
// localStorage.paalegg = "Sjokade";

console.log(localStorage.antallBesok); // Undefined som utskrift første gang

// Undersøker om localStorage-variabelen er satt
if (localStorage.antallBesok) {
    // Alt lagres som tekst i localStorage, så vi må gjøre om til tall
    localStorage.antallBesok = Number(localStorage.antallBesok) + 1;
} else {
    localStorage.antallBesok = 1;
}

console.log("Dette er ditt " + localStorage.antallBesok + ". besøk på denne nettsiden.");

localStorage.highscore = 0;

// Spillet går...
let kimHighscore = 33;

// Slik kan vi lagre ulike verdier i localstorage, som separate verdier
localStorage.highscore = kimHighscore;
localStorage.highscoreInnehaver = "Kim";

// Alternativt kan vi lagre det i et objekt
let score = [
    { navn: "Jo Bjørnar", highscore: 33},
    { navn: "Kim", highscore: 14}
];

localStorage.resultat = score;

// localstorage klarer ikke lagre dette på riktig måte
// for( let s of localStorage.resultat) {
//     console.log(s);
// }

// Kilde til de neste linjene: https://www.w3schools.com/js/js_json_stringify.asp (eller boka)
// Gjør array med objekt om til string slik at det kan lagres i localStorage
localStorage.resultatString = JSON.stringify(score);
console.table(localStorage.resultatString);

// Gjør string i localstorage om til array med objekt igjen
console.table(JSON.parse(localStorage.resultatString));

// Vi kan slette all informasjonen i localstorage
// localStorage.clear();

//console.log(localStorage.resultatString);