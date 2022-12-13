let idtemp = "";

for (let i = 1; i < 3; i++) {
    idtemp = "id" + String(i);
    console.log(idtemp);
    document.getElementById(idtemp).innerText = "Element nr. " + i;
}

