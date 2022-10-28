const utskrift = document.getElementById("utskrift");
const skjema = document.getElementById("skjemaStadsnavn");
const stad1 = document.getElementById("stad1");
const stad2 = document.getElementById("stad2");

skjema.addEventListener("submit", reknUt);

function reknUt(evt) {
    evt.preventDefault();
    // console.log(stad1.value);
    let stad1lengde = stad1.value.length;
    utskrift.innerText = stad1lengde;
}