// Lag en array med alle bokstavene i alfabetet
let alfabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y", "z", "æ", "ø", "å"];
let arrObjekt = [];

for (let i = 0; i < alfabet.length; i++) {
    // Små bokstaver
    console.log(alfabet[i] + ": " + alfabet[i].charCodeAt(0).toString(2));
    console.log(alfabet[i] + ": " + alfabet[i].charCodeAt(0));
    // Store bokstaver
    console.log(alfabet[i].toUpperCase() + ": " + alfabet[i].charCodeAt(0).toString(2));
    console.log(alfabet[i].toUpperCase() + ": " + alfabet[i].charCodeAt(0));
}

let setning = "Hvordan ser denne setningen ut i binary?";
let utskrift = "";
console.log("Setningen  '" + setning + "' ser slik ut i binary: ");
for (let bokstav of setning) {
    // console.log(bokstav.charCodeAt(0).toString(2));
    utskrift += bokstav.charCodeAt(0).toString(2) + " ";
}
console.log(utskrift);

// Mer generell funksjon som konverterer fra tekst til binary
function stringToBinary(string) {
    let binary = "";
    string.split("").forEach((char) => {
        let charCode = char.charCodeAt(0);
        binary += charCode.toString(2) + " ";
    });
    return binary;
}

// Funksjon som konverterer fra binary til tekst
function binaryToString(binary) {
    let text = "";
    binary.split(" ").forEach((binaryChar) => {
      let charCode = parseInt(binaryChar, 2);
      text += String.fromCharCode(charCode);
    });
    return text;
}

console.log(binaryToString(utskrift));