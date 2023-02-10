let mykey = config.API_KEY;

const options = {
	method: 'GET',
	headers: {
		'User-Agent': 'RapidAPI Playground',
		'Accept-Encoding': 'identity',
		'X-RapidAPI-Key': 'mykey',
		'X-RapidAPI-Host': 'rocket-league1.p.rapidapi.com'
	}
};

fetch('https://rocket-league1.p.rapidapi.com/ranks/e7d412629ae5464ea5af360faba14792', options)
	.then(response => response.json())
	.then(response => visRank(response))
	.catch(err => console.error(err));

function visRank(data) {
    console.log(data);
}