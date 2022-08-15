console.log(`Hei IT1!`);
//let overskrift = document.getElementById("overskrift");
//h1.innerText = "Jobis";

let h1s = document.querySelectorAll("h1");
console.log(h1s);
for (let overskrift of h1s) {
    console.log("Overskrift: " + overskrift.innerHTML);
}