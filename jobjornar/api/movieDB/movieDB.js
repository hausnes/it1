let mykey = config.API_KEY;

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

let valgteFilmar = []; // Her skal filmane me har valgt ligge.

function vis(filmar) {
    document.querySelector("#filmer").innerHTML = ""; // Fjerner det som ligg der frå før
    console.log("Lengden på filmar: " + filmar.length);
    
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
        
        let pauseElement2 = document.createElement("br");

        let knappLeggTil = document.createElement("button");
        knappLeggTil.innerHTML = "Legg til i watchlist";
        knappLeggTil.id = film.imdbID;
        knappLeggTil.addEventListener("click", leggTilFilm);
        
        // Legg til HTML-en
        filmboks.appendChild(filmtittel);
        filmboks.appendChild(filmYear);
        // filmboks.appendChild(speletid);
        filmboks.appendChild(filmPoster);
        filmboks.appendChild(pauseElement);
        filmboks.appendChild(filmLenke);
        filmboks.appendChild(pauseElement2);
        filmboks.appendChild(knappLeggTil);

        document.querySelector("#filmer").appendChild(filmboks);

        let filmObj = {
            id     : film.imdbID,
            tittel : film.Title,
            år     : film.Year,
            poster : film.Poster 
        };

        valgteFilmar.push(filmObj);
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
    if (sok.length <= 0) {
        alert("Ingen film funnen!");
    } else {
        fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${sok}&r=json&page=1`, options)
        .then(response => response.json())
        .then(response => vis(response.Search))
        .catch(err => console.error(err));
    }
}

function leggTilFilm(e) {
    console.log("Du har valgt " + e.target.id);
    console.log("Dei valgte filmane så langt er: ");
    for (let film of valgteFilmar) {
        console.log(film);
    }
}