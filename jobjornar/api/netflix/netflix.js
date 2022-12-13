var mykey = config.API_KEY;

// https://rapidapi.com/unogs/api/unogs/
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': mykey,
		'X-RapidAPI-Host': 'unogs-unogs-v1.p.rapidapi.com'
	}
};

fetch('https://unogs-unogs-v1.p.rapidapi.com/search/titles?type=series&title=Witcher&order_by=date', options)
	.then(response => response.json())
	// .then(response => console.log(response))
    // .then(response => console.log(response.results))
    // .then(response => console.log(response.results[0].title))
    .then(response => vis(response.results))
	.catch(err => console.error(err));

function vis(innhold) {
    let tittel = innhold[0].title;
    console.log("Tittel: " + tittel);
    let plakat = innhold[0].img;
    console.log("Plakat: " + plakat);
    let synops = innhold[0].synopsis;
    console.log("Synopsis: " + synops);
    let elTittel = document.createElement("h1");
    elTittel.innerText = tittel;
    let elPlakat = document.createElement("img");
    elPlakat.src = plakat;
    let elSynops = document.createElement("p");
    elSynops.innerText = synops;
    // Legg til HTML-en
    document.querySelector("div").appendChild(elTittel);
    document.querySelector("div").appendChild(elPlakat);
    document.querySelector("div").appendChild(elSynops);
}