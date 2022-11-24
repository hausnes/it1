let treLike = false;    // settes til true når vi får to like
let antallForsok = 0;  // lar oss telle antall forsøk
const utskrift = document.querySelector("#utskrift");
const resultat = document.querySelector("#resultat");

// // Så lenge vi ikke har fått to like
// while(!treLike) {  
//     // Øker antall forsøk med 1
//     antallForsok++;

//     // triller to terninger
//     let terning1 = terning();
//     let terning2 = terning();
//     let terning3 = terning();

//     console.log("Fikk " + terning1 + ", " + terning2 + ", " + terning3);
//     utskrift.innerHTML += "<li>Fikk " + terning1 + ", " + terning2 + ", " + terning3 + "</li>";

//     // Undersøker om de to terningene er like
//     if (terning1 === terning2 && terning2 === terning3) {
//         treLike = true;
//         console.log("Fikk tre like på " + antallForsok + " forsøk");
//         resultat.innerText = "Fikk tre like på " + antallForsok + " forsøk";
//     }
// }

function terning() {
    return Math.floor(Math.random() * 6) + 1;
}

document.addEventListener("keydown", function(e) {
    let tast = e.key;
    if(tast==="k") {
        kastTerning();
    }
});

function kastTerning() {
    antallForsok++;

    // triller to terninger
    let terning1 = terning();
    let terning2 = terning();
    let terning3 = terning();

    console.log("Fikk " + terning1 + ", " + terning2 + ", " + terning3);
    utskrift.innerHTML += "<li>Fikk " + terning1 + ", " + terning2 + ", " + terning3 + "</li>";

    // Undersøker om de to terningene er like
    if (terning1 === terning2 && terning2 === terning3) {
        console.log("Fikk tre like på " + antallForsok + " forsøk");
        resultat.innerHTML += "<li>Fikk tre like på " + antallForsok + " forsøk</li>";
        resultat.style.color = "red";
        resultat.style.fontSize = "2em";
    }
    else {
        console.log("Ingen like på forsøk nr. " + antallForsok);
        utskrift.innerHTML += "<li>Ingen like på forsøk nr. " + antallForsok + "</li>";
    }
}