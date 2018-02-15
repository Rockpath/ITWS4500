var object;//initializing variables for future use
var humidity;
var pressure;
var temperature;
var windSpeed;
var summary;
var city;
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];//used to check the day
var day = days[d.getDay()];

window.onload = function() {//creates the variables to store the info
	current_day = document.getElementById("day");
	city = document.getElementById("city");
	summary = document.getElementById("summary");
	temperature = document.getElementById("temperature");
	humidity = document.getElementById("humidity");
    pressure = document.getElementById("pressure");
    precip = document.getElementById("precip_prob");
    windspeed = document.getElementById("wind-speed");
}

var getWeather = function() {//gets latitude and longitude
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        showWeather(latitude, longitude)
      })
    }
    else {
    	window.alert("Could not get location");
    }
}
 
function showWeather(latitude, longitude) {//uses the darksky api to get weather info
  	var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://api.darksky.net/forecast/a812460089d413865f0f09e37e739f1d/${latitude},${longitude}` + `?format=jsonp&callback=displayWeather`;
    document.getElementsByTagName("head")[0].appendChild(script);
    displayWeather(object)   
}

function displayWeather(object) {//inserts info into elements and makes them visible
	current_day.innerHTML = "Day: " + day;
 	city.innerHTML = "Current Location: " + object.timezone;
    summary.innerHTML = "Summary: " + object.currently.summary;
 	temperature.innerHTML = "Temperature: " + Math.round((object.currently.temperature - 32) * 0.5556 ) + " C" + " or " + object.currently.temperature + " F";
    humidity.innerHTML = "Humidity: " + Math.round(object.currently.humidity* 100) + "%";
    pressure.innerHTML = "Pressure: " + object.currently.pressure + " mb";
    precip.innerHTML = "Precipitation Probability: " + Math.round(object.currently.precipProbability*100) + "%";
    windspeed.innerHTML = "Wind Speed: " + Math.round(object.currently.windspeed * 1.852) + " km/h";
    current_day.style.visibility = "visible";
    city.style.visibility = "visible";
    summary.style.visibility = "visible";
    temperature.style.visibility = "visible";
    humidity.style.visibility = "visible";
    pressure.style.visibility = "visible";
    precip.style.visibility = "visible";
    windspeed.style.visibility = "visible";
}