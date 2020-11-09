// $.ajax({
//     url: "http://www.omdbapi.com/?t=joker&apikey=trilogy",
//     method: "GET",
// }).then(function (response) {
//     console.log(response);
// })

// console.log("line 8 will console log before line 5");

// $.ajax({
//     url: "http://www.omdbapi.com/?t=titanic&apikey=trilogy",
//     method: "GET",
// }).then(function (response) {
//     console.log(response);

//     $.ajax({
//         url: "http://www.omdbapi.com/?t=the+dark+knight&apikey=trilogy",
//         method: "GET",
//     }).then(function (response) {
//         console.log(response);
    
//         /// get the response.Title and use dom manipulation to display onto the page
//         $("#cityName").text(response.Title);
//     })
// })

// console.log("line 17");

// function to find searched city and current weather
function searchWeather(city) {
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=44558b94b80d15a7785e0eb77b5845ac";
    
    $.ajax({
    url: queryURL,
    method: "GET",
}).then(function (responce) {
    console.log(responce)

//  pulling the weather info then appending it to the HTML   

    var cityName = $("<h2>").text(responce.name);
    // var weatherIcon = $("<img>").attr(responce.weather.icon) not working
    var temp = $("<p>").text("Temperature: " + responce.main.temp +"°F")
    var humid = $("<p>").text("Humidity: " + responce.main.humidity +"%")
    var wind = $("<p>").text("Wind Speed: " + responce.wind.speed +"MPH")

    $("#weather-div").append(cityName, temp, humid, wind)
})
}



$("#search").on("click", function(event) {
    event.preventDefault();
    var inputCity = $("#searchInput").val()
    console.log(inputCity)
    searchWeather(inputCity);
});

