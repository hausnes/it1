// Hente inn modulen express
const express = require("express");

// Starte en express-applikasjon, og lagre den i app
const app = express();
app.use(express.urlencoded({ extended: true })); // For at express skal forstå skjema våre (forms)

// Callback-funksjonar for når nokon opner spesifikke sider
function rootRoute(request, response) { // Når nokon besøker root-mappa på serveren vår
    response.send("Cowabunga, startside!");
}

function aboutRoute(request, response) { // Når nokon besøker localhost:3000/about
    response.send("<h1>Aboutaboutabout!</h1>");
}

// Funksjon (handler) for å handtere eit skjema
function formHandler(request, response) {
    console.log("Innkommende body: " + JSON.stringify(request.body));
    console.log("Input-feltet 'message': " + request.body.message);
    // let overskrift = document.createElement("h1"); 
    // overskrift.innerText = "Oppretta i serverkode.";
    // document.body.appendChild(overskrift);
    // Sender innsenderen videre til topp-domenet vårt
    response.redirect("/");
}

// Sende callback-funksjonen inn i Express, slik at ulike funksjonar blir trigga når nokon skriv inn ulike adresser
app.get("", rootRoute); // Når nokon berre skriv localhost:3000 (eller anna servernavn), utan ei spesifikk side
app.get("/about", aboutRoute); // Når nokon skriv localhost:3000/about
app.post("/sendInn", formHandler);

app.listen(3000, () => {
    console.log("Server is up on port 3000");
});

// For å tillate statiske sider frå public-mappa
const path = require("path");
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(express.static(publicDirectoryPath));