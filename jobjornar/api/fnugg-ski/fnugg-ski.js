let omraade = prompt("Kvar vil du reise?");

let sokString = 'https://api.fnugg.no/search?q="' + omraade + '"'; 

fetch(sokString)
    .then(response => response.json())
    // .then(response => console.log(response.hits.hits[0]._source))
    .then(response => visSkistad(response))
    .catch(error => console.log(error));

// Henter den første frå svaret: data.hits.hits[0]._source.XXX

function visSkistad(data) {
    // Testing i console
    for(let stad of data.hits.hits) {
        console.log(stad);
    }

    console.log(data.hits.hits.length);

    if (data.hits.hits.length === 0) {
        alert("Ingen treff");
        return;
    }
    else {
        for (let i = 0; i < data.hits.hits.length; i++) {

            // Utskrift til HTML
            let div = document.createElement("div");
            
            let overskrift = document.createElement("h1");
            overskrift.innerHTML = data.hits.hits[i]._source.name;
            div.appendChild(overskrift);

            let beskrivelse = document.createElement("p");
            beskrivelse.innerHTML = data.hits.hits[i]._source.description;
            div.appendChild(beskrivelse);

            let bilde = document.createElement("img");
            bilde.src = data.hits.hits[i]._source.images.image_16_9_s;
            div.appendChild(bilde);

            let pause = document.createElement("br");
            div.appendChild(pause);

            let kart = document.createElement("img");
            kart.src = data.hits.hits[i]._source.slope_map.image_1_1_s;
            div.appendChild(kart);

            document.body.appendChild(div);
        }
    }
}