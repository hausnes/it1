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
const fargeEndring = setInterval(function() {
    endreBakgrunnsfargeRGB();
}, 500);