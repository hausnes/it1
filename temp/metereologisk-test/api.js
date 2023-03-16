fetch('https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=60.397076&lon=5.324383')
    .then(response => response.json())
    // .then(response => console.log(response))
    .then(response => behandleSvar(response))
    .catch(err => console.error(err));

    function behandleSvar(svar) {
        // Testing
        console.log(svar);
        console.log("Tidspunkt: " + svar.properties.timeseries[0].time);
        console.log("Vind: " + svar.properties.timeseries[0].data.instant.details.wind_speed);
        console.log("Temperatur: " + svar.properties.timeseries[0].data.instant.details.air_temperature);

        // Henter ut for alle tidspunkta den perioden blei returnert i JSON-fila
        for (let i = 0; i < svar.properties.timeseries.length; i++) {
            const element = svar.properties.timeseries[i];
            console.log("Tidspunkt: " + element.time);
            console.log("Vind: " + element.data.instant.details.wind_speed);
            console.log("Temperatur: " + element.data.instant.details.air_temperature);
        }
}