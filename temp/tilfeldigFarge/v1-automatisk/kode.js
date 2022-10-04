/*
    ---------------------------------------------------
    Endrar bakgrunnsfarge vha. RGB (t.d. rgb(0,244,124)
    ---------------------------------------------------
*/

function endreBakgrunnsfargeRGB() {
    let fargeRGB = tilfeldigFargeRGB();
    document.body.style.backgroundColor = fargeRGB;
}

function tilfeldigFargeRGB() {
    var R = getRandomIntInclusive(0,255);
    var G = getRandomIntInclusive(0,255);
    var B = getRandomIntInclusive(0,255);
    var rgbString = "rgb(" + R + ", " + G + ", " + B + ")";
    return rgbString;
}

/*
    --------------------------------------------------------------------------------------
    Funksjon som returnerer tilfeldige tal mellom low (lågaste tal) og high (høgaste tal).
    --------------------------------------------------------------------------------------
*/

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

/*
    ----------------------------------------------------------------------
    Delen av koden som får fargeendringane til å skje ved faste intervall.
    ----------------------------------------------------------------------
*/
let tidsintervall = 1000;

let fargeEndring = setInterval(function() {
    endreBakgrunnsfargeRGB();
}, tidsintervall);

/*
    -----
    Modal
    -----
*/
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
const innstillingar = document.getElementById("innstillingar");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
innstillingar.addEventListener("click", function() {
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

/*
    --------

    --------
*/
// const inpEndringIntervall = document.getElementById("inpEndringIntervall");
// inpEndringIntervall.addEventListener("change", function() {
//     tidsintervall = parseInt(inpEndringIntervall.value);
//     clearInterval(fargeEndring);
//     window.fargeEndring = setInterval(function() {

//     }, tidsintervall);
//     console.log("Endrar tidsintervall til: " + tidsintervall)
// });