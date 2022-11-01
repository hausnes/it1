let alder = prompt("Hvor gammel er du?");
console.log(typeof alder);
alder = Number(alder);
console.log(typeof alder);

if (alder >= 18) {
    console.log("Du er gammel nok.")
} else {
    console.log("Ha deg vekk.");
}

