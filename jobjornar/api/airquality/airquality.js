// https://rapidapi.com/weatherbit/api/air-quality , 25 per dag

let mykey = config.API_KEY;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': mykey, // NB: 25 free calls per day
		'X-RapidAPI-Host': 'air-quality.p.rapidapi.com'
	}
};

fetch('https://air-quality.p.rapidapi.com/current/airquality?lat=60.397076&lon=5.324383', options)
	.then(response => response.json())
	// .then(response => console.log(response))
    .then(response => behandleSvar(response))
	.catch(err => console.error(err));

function behandleSvar(svar) {
    // Testing
    console.log(svar);
    console.log("By: " + svar.city_name);
    console.log("Land: " + svar.country_code);
    console.log("PM 10: " + svar.data[0].pm10);

    // HTML-visning
    let stad = document.createElement("p");
    stad.innerText = "Stad: " + svar.city_name + ", " + svar.country_code;
    let pm10 = document.createElement("h1");
    pm10.innerText = "PM10: " + svar.data[0].pm10;
    document.querySelector("#utskrift").appendChild(stad);
    document.querySelector("#utskrift").appendChild(pm10);

    // CSS-visning (grønt eller raudt basert på PM10-verdi)
    if (svar.data[0].pm10 > 20) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "green";
    }
}