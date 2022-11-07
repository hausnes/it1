console.log("While-løkke:");
let teller = 10;
while (teller > 0) {
    console.log(teller);
    teller--;
}

console.log("For-løkke:");
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

let arrayTemperaturer = [4,5,3,2,1,3,2,3,4,5,6,7,8,9];

for (let temp of arrayTemperaturer) {
    console.log(temp);
}

for (let i = 0; i < arrayTemperaturer.length; i++) {
    console.log(arrayTemperaturer[i]);
}