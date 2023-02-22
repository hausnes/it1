const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'xxx',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

fetch('https://spotify81.p.rapidapi.com/search?q=Mogwai&type=multi&offset=0&limit=10&numberOfTopResults=5', options)
	.then(response => response.json())
	.then(response => console.log(response.artists.items[0].data.profile.name))
	.catch(err => console.error(err));