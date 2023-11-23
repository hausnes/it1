let diverse = [1,2,3,4,5,6,"a","B","c","hei!"]; // ,["en","to","tre"]
console.log(diverse);
console.table(diverse);

for (let verdi of diverse) {
    console.log(verdi);
}

console.log("Lengden til arrayen er: " + diverse.length);

for (let i = 0; i < diverse.length; i++) {
    console.log(i);
}

// Endre innholdet til den første verdien
diverse[1] = 10;

// Slett det første elementet i arrayen og skriv ut resultatet
diverse.shift();
console.log("Etter at jeg slettet det FØRSTE elementet:");
console.table(diverse);

// Slett det siste elementet i arrayen ..
diverse.pop();
console.log("Etter at jeg slettet det siste elementet:");
console.table(diverse);

// Slett et element på en gitt plass
diverse.splice(0,1);
console.log("Etter at jeg slettet vha splice:");
console.table(diverse);

// Sorterer arrayen
diverse.sort();
console.log("Etter at jeg har sortert arrayen:");
console.table(diverse);