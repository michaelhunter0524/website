var apiUrl = "https://catfact.ninja/fact"

fetch(apiUrl).then(response => {
	return response.json();
}).then(data => {


	var concat = "Heres your fact: " + data.fact

	document.getElementById('catFact').innerText = concat


}).catch(err => {
});