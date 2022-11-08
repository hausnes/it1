console.log("While-løkka:");

let teller = 10;
while (teller > 0) {
    console.log(teller);
    teller = teller - 1;
}

console.log("For-løkka:");
//   start      slutt   hopp
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let arrayNavn = ["Jo Bjørnar","Jo Bjarne","Jobis"];
console.log("Lengden på arrayen: " + arrayNavn.length);
console.log(arrayNavn);
console.table(arrayNavn);
console.log(arrayNavn[1]);
arrayNavn[1] = "Jobijobijobi";
console.table(arrayNavn);

for (let i = 0; i < arrayNavn.length; i++) {
    console.log("Element nr. " + i + " er: " + arrayNavn[i]);
}

for (let navn of arrayNavn) {
    console.log(navn);
}

let navn = "Jo Bjørnar Hausnes";
for (let bokstav of navn) {
    console.log(bokstav);
}