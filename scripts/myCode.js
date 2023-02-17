//PROJECT 1


var apiKey = "6c3cda812b6f41c583d232709230902"
var zipCode = "29406"


var apiUrl = 'http://api.weatherapi.com/v1/current.json?key=' + apiKey + '&q=' + zipCode + '&aqi=no';
fetch(apiUrl).then(response => {
	return response.json();
}).then(data => {


	var concat = "Zip Code: " + zipCode + "\n"
	concat = "City: " + data.location.name + "\n"
	concat = concat + "State: " + data.location.region + "\n"
	concat = concat + "Country: " + data.location.country + "\n"
	concat = concat + "Current Temperature: " + data.current.temp_f + "\n"
	concat = concat + "Feels Like Temperature: " + data.current.feelslike_f + "\n"
	concat = concat + "Wind Speed: " + data.current.wind_mph + "\n"

	document.getElementById('weatherInformation').innerText = concat

	var temp = data.current.temp_f

	if (temp > 80) {
		document.body.style.backgroundColor = "#AA0000"
	}
	else if (temp < 60) {
		document.body.style.backgroundColor = "#0000FF"
	}


	document.getElementById('test').innerText = concat
	document.body.style.backgroundColor = "#AA0000";
	console.log(data);
	console.log(data.location.name)
}).catch(err => {
});
