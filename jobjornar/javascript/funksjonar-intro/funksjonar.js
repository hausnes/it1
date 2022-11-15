const utskrift = document.getElementById("utskrift");
const tastatur = document.getElementById("tastatur");

// Alternativ 1:
function siHei() {
    utskrift.innerText += "Hei!";
    console.log("Hei!");
}

siHei();
siHei();

for (let i = 0; i < 10; i++) {
    siHei();
}

// Alternativ 2:
function siHeiTil(navn) {
    utskrift.innerText += "Hei, " + navn + "!";
}

siHeiTil("Jo Bjørnar");
siHeiTil("Lars");

// Alternativ 3: (bruken av 'return')
function returnerTilfeldigTall() {
    let random = Math.random();
    return random;
    console.log("Denne linja køyrer aldri."); 
}

let tilfeldig = returnerTilfeldigTall();
utskrift.innerText += tilfeldig;

// utskrift.innerText(returnerTilfeldigTall());

// Alternativ 4: (anonyme funksjonar)
document.addEventListener("keydown", function(evt){
    let tast = evt.key;
    tastatur.innerText = tast;
});

// Alternativ 5: (arrow functions)
sayHello = () => {
    utskrift.innerText += "Hello!";
};

sayHello();