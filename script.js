
// Run a function when button is clicked  
var buttonEl = $("#submit");
var textEl = $("#text");
var cityEl = $("#cities-view");
var cityLst = $("#cities-list");
var cityForecast = $("forecast-box")
// console.log("test2");


function displayWeatherInfo() {
    var city = textEl.val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=49de22b69ee850d8d96a55d8b04fabe9";
    console.log("test");

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        // $("#submit").empty();
        // // Loops through the array of movies
        // for (var i = 0; i < cities.length; i++) {

        // Storing the temperature data
        var cityN = response.name;

        // Creating an element to have the temperature displayed
        var pOne = $("<p>").text(cityN);
        var pOneA = $("<p>").text(cityN);

        // Storing the temperature data
        var temperature = response.main.temp;

        // Creating an element to have the temperature displayed
        var pTwo = $("<p>").text("Temperature: " + temperature + " °F");

        //Storing the humidity data 
        var humidity = response.main.humidity;

        // Creating an element to have the humidity displayed
        var pThree = $("<p>").text("Humidity: " + humidity + "%");

        //Storing the wind speed data 
        var windSpeed = response.wind.speed;

        // Creating an element to have the wind speed displayed
        var pFour = $("<p>").text("Wind Speed:" + windSpeed + " MPH");

        // //Storing the uv index latitude
        var lat = response.coord.lat;

        // //Storing the uv index longitude
        var lon = response.coord.lon;

        //Get UV Index 
        getUV(lat, lon);

        //Get Forecast 
        getForecast(cityN);

        $("#cities-view").empty();

        // Displaying the city name
        cityEl.append(pOne);

        // Displaying the temperature
        cityEl.append(pTwo);

        // Displaying the humidity
        cityEl.append(pThree);

        // Displaying the wind speed
        cityEl.append(pFour);

        // Displaying the city list on left hand side 
        cityLst.append(pOneA);

        //   // Displaying the uvIndex
        //  textEl.append(pFour);

        // Putting the entire city above the previous cities
        $("<div class='city'>").prepend(city);

    })
}

buttonEl.click(function (event) {
    event.preventDefault();

    displayWeatherInfo();
})


function getUV(lat, lon) {
    var queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=49de22b69ee850d8d96a55d8b04fabe9&lat=" + lat + "&lon=" + lon;
    console.log(lat, lon);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var cityUV = response.value;
        var pFive = $("<p>").text("UVIndex " + cityUV);
        cityEl.append(pFive);
    })
}

function getForecast(city) {
    console.log(city);
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=49de22b69ee850d8d96a55d8b04fabe9";
    // var fiveForecast = forecast.textData ["1", "2", "3", "4", "5"];


    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {
        console.log(response);

        $(".forecast-box").empty();
        for (var i = 0; i < 5; i++) {
            // console.log(response.list[i].dt_txt)
            // console.log(response.list[i].main.temp)
            // console.log(response.list[i].main.humidity)

            $("<td>", {
                html: "<h6>" + response.list[i].dt_txt + "</h6>"  + "<br>" +
                    "Temp: " + response.list[i].main.temp + "°F" + "<br>" +
                    " Humidity: " + response.list[i].main.humidity + " %",
                // id: "forecast-boxCss",
                appendTo: ".forecast-box"
            })
        }
    })
}

function saveHistory(city) { 
    
    if (localStorage.getItem("searchHistory")) {
        
        var history = JSON.parse(localStorage.getItem("searchHistory")); 
      
        history.push(city);
       
        localStorage.setItem("searchHistory", JSON.stringify(history));
    } else {
        
        localStorage.setItem("searchHistory", JSON.stringify([city]));
    }   
    makeButtons();     
};