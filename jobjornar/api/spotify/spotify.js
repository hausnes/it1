const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'xxx',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

fetch('https://spotify81.p.rapidapi.com/search?q=FrankOcean&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
	.then(response => response.json())
	.then(response => behandleSvar(response))
	.catch(err => console.error(err));

function behandleSvar(svar){

  console.log(svar);
  console.log("Tester enkeltutskrifter...");
  console.log("Navn: " + svar.artists.items[0].data.profile.name);
  console.log("Bilde: " + svar.artists.items[0].data.visuals.avatarImage.sources[0].url);

  // Artistnavn
  let navn = document.createElement("h1");
  navn.innerText = svar.artists.items[0].data.profile.name; //Endrer innholdet i paragrafen
  document.querySelector("#utskrift").appendChild(navn); // Plasserer paragrafen (navn) i HTML-en

  // Artistbilde
  let bilde = document.createElement("img");
  bilde.src = svar.artists.items[0].data.visuals.avatarImage.sources[0].url;
  document.querySelector("#utskrift").appendChild(bilde);

  // Henter ut alle albumene til artisten
  for (let i = 0; i < svar.albums.items.length; i++) {
     /* - - - - - - - 
       HTML - visning
     - - - - - - - - */
    // Albumnavn
    let navn = document.createElement("h1");
    navn.innerText = svar.albums.items[i].data.name;
    document.querySelector("#utskrift").appendChild(navn);

    // Albumbilde
    let bilde = document.createElement("img");
    bilde.src = svar.albums.items[i].data.coverArt.sources[0].url;
    document.querySelector("#utskrift").appendChild(bilde);
  }
}