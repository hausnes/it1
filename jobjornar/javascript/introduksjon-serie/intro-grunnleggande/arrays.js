let array = ["Jo Bjørnar","jobis","Joe Bee",1,2,3,["a","b","c"]];

// Skriver ut arrayen (uten å formatere den):
console.log(array);

// Skriver ut arrayen (formatert):
console.table(array);

// Skriver ut lengden på arrayen:
console.log(array.length);

// Skriver ut det første elementet i arrayen:
console.log(array[0]);

// Viser korleis me kan bruke ei for-løkke til å skrive ut alle elementa i arrayen:
for (let i = 0; i < array.length; i++) {
    console.log("Element nr. " + i + ": " + array[i]);
}

// Viser korleis me kan bruke ei for-of-løkke til å skrive ut alle elementa i ein bestemt del av arrayen:
for (bokstav of array[6]) {
    console.log(bokstav);
}

// Sorterer arrayen (kva skjer eigentleg her?):
console.log("\nSortert array: ")
array.sort();
console.table(array);

// Legger til eit element i arrayen:
array.push("Ny verdi");

// Slettar eit element i arrayen:
console.log("Etter at ny verdi er lagt til: ")
array.splice(1,2); // Slettar første elementet i arrayen, og kunne spesifisert både start indeks og antall element me vil sletta
// array.shift(); // Slettar første elementet i arrayen
console.table(array);