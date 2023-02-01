// Google Translate API, 500 kall i mnd er gratis
let sprakFra = prompt("Kilde-språk: (eks. no, en, es, ...)");
let sprakTil = prompt("Resultat-språk: (eks. no, en, es, ...)");
let setning  = prompt("Skriv inn ord eller setning som skal oversettast.");

let myKey = config.API_KEY;

const encodedParams = new URLSearchParams();
encodedParams.append("source", sprakFra);
encodedParams.append("target", sprakTil);
encodedParams.append("q", setning);

const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': myKey,
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    body: encodedParams
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
    .then(response => response.json())
    .then(response => console.log(response.data.translations[0].translatedText))
    .then(response => document.getElementById("utskrift").innerText = response.data.translations[0].translatedText)
    .catch(err => console.error(err));