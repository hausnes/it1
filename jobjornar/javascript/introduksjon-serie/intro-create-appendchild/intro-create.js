let overskrift = document.createElement("h1");
overskrift.innerText = "Dette er ei overskrift.";
//overskrift.classList.add("bakgrunn");
overskrift.setAttribute("class","bakgrunn");
document.body.appendChild(overskrift);

let bilde = document.createElement("img");
//bilde.src = "https://gfx.nrk.no/rshmb2iyvjJoyKGpMuKrcggsnQhL_tnDNiqUhHXXkOkA";
bilde.setAttribute("src", "https://gfx.nrk.no/rshmb2iyvjJoyKGpMuKrcggsnQhL_tnDNiqUhHXXkOkA");
document.body.appendChild(bilde);

document.addEventListener("keydown", function(evt) {
    let tast = evt.key;
    console.log(tast);
    if(tast === "c") {
        let overskrift = document.createElement("h1");
        overskrift.innerText = "Dette er ei overskrift.";
        //overskrift.classList.add("bakgrunn");
        overskrift.setAttribute("class","bakgrunn");
        document.body.appendChild(overskrift);
    }
    if(tast === "r") {
        document.body.removeChild(overskrift);
    }
});

document.addEventListener("keyup", tastaturOpp);

function tastaturOpp(evt) {
    let tast = evt.key;
    console.log("Tast opp: " + tast);
}