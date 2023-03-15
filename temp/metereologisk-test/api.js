fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.397076&lon=5.324383')
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => behandleSvar(response))
    .catch(err => console.error(err));

    function behandleSvar(svar) {
        // Testings
        console.log(svar);
        console.log("vind" + svar.properties);
        console.log("vind" + svar.properties.timeseries[0].data.instant.details.wind_speed);
}
