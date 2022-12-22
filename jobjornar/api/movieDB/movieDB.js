var mykey = config.API_KEY;

// https://rapidapi.com/rapidapi/api/movie-database-alternative/ - 1000 per dag
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': mykey,
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

// fetch('https://movie-database-alternative.p.rapidapi.com/?s=Smile&r=json&page=1', options)
// 	.then(response => response.json())
// 	//.then(response => console.log(response.Search))
//     .then(response => vis(response.Search))
// 	.catch(err => console.error(err));

function vis(filmar) {
    document.querySelector("#filmer").innerHTML = ""; // Fjerner det som ligg der frå før
    for (let film of filmar) {
        console.log(`"Filmtittel: ${film.Title}
                      Årstall: ${film.Year}
                      Poster: ${film.Poster}`
        );
        let filmboks = document.createElement("div");
        filmboks.classList.add("film");
        let filmtittel = document.createElement("h1");
        filmtittel.innerText = film.Title;
        let filmYear = document.createElement("p");
        filmYear.innerText = film.Year;
        // let speletid = document.createElement("p");
        // speletid.innerText = film.Runtime;
        let filmPoster = document.createElement("img");
        filmPoster.src = film.Poster;
        let pauseElement = document.createElement("br");
        let filmLenke = document.createElement("a");
        filmLenke.href = "https://www.imdb.com/title/" + film.imdbID;
        filmLenke.innerText = `Les om "${film.Title}" hjå IMDB`;
        // Legg til HTML-en
        filmboks.appendChild(filmtittel);
        filmboks.appendChild(filmYear);
        // filmboks.appendChild(speletid);
        filmboks.appendChild(filmPoster);
        filmboks.appendChild(pauseElement);
        filmboks.appendChild(filmLenke);
        document.querySelector("#filmer").appendChild(filmboks);
    }
}

// Skjema for å søke etter film
const skjema = document.querySelector("#sokFilm");
skjema.addEventListener("submit", sokFilm);
skjema.addEventListener("change", sokFilm);

// Funksjonen som søker etter film
function sokFilm(event) {
    event.preventDefault();
    let sok = document.querySelector("#inpFilmsok").value;
    console.log("Du søkte etter: " + sok);
    fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${sok}&r=json&page=1`, options)
        .then(response => response.json())
        .then(response => vis(response.Search))
        .catch(err => console.error(err));
}