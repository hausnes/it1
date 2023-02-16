let funksjoner = require("./module.js");

let navnLengde = funksjoner.printTotalLength("Jo", "Bjørnar");
console.log(navnLengde);

let lengde = funksjoner.printTotalLength("bla","klø");
console.log(lengde);

console.log(funksjoner.apiKey);