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
  var forcastURL =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=44558b94b80d15a7785e0eb77b5845ac";

  $.ajax({
    url: forcastURL,
    method: "GET",
  }).then(function (responce) {
    console.log(responce);
    //  pulling the weather info then appending it to the HTML

    var cityName = $("<h2>").text(responce.name);
    // var weatherIcon = $("<img>").attr(responce.weather.icon) not working
    var temp = $("<p>").text("Temperature: " + responce.main.temp + "°F");
    var humid = $("<p>").text("Humidity: " + responce.main.humidity + "%");
    var wind = $("<p>").text("Wind Speed: " + responce.wind.speed + "MPH");

    $("#weather-div").empty();
    $("#weather-div").append(cityName, temp, humid, wind);

    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&units=imperial&appid=44558b94b80d15a7785e0eb77b5845ac",
      method: "GET",
    }).then(function (responce5) {
      console.log(responce5);

    var temp1 = $("<p>").text("Temp: " + responce5.list[0].main.temp + "°F");
    var humid1 = $("<p>").text("Humidity: " + responce5.list[0].main.humidity + "%");
    var temp2 = $("<p>").text("Temp: " + responce5.list[1].main.temp + "°F");
    var humid2 = $("<p>").text("Humidity: " + responce5.list[1].main.humidity + "%");
    var temp3 = $("<p>").text("Temp: " + responce5.list[2].main.temp + "°F");
    var humid3 = $("<p>").text("Humidity: " + responce5.list[2].main.humidity + "%");
    var temp4 = $("<p>").text("Temp: " + responce5.list[3].main.temp + "°F");
    var humid4 = $("<p>").text("Humidity: " + responce5.list[3].main.humidity + "%");
    var temp5 = $("<p>").text("Temp: " + responce5.list[4].main.temp + "°F");
    var humid5 = $("<p>").text("Humidity: " + responce5.list[4].main.humidity + "%");

    $("#day1").empty();
    $("#day1").append(temp1, humid1);

    $("#day2").empty();
    $("#day2").append(temp2, humid2);

    $("#day3").empty();
    $("#day3").append(temp3, humid3);

    $("#day4").empty();
    $("#day4").append(temp4, humid4);

    $("#day5").empty();
    $("#day5").append(temp5, humid5);

    });
  });
}

//  function uvIndex() { not working
//     var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + lon + "&appid=44558b94b80d15a7785e0eb77b5845ac";

//     let lat = responce.coord.lat
//     let lon = responce.coord.lon

//     $.ajax({
//     url: uvURL,
//     method: "GET",
//     }).then(function (uvresponce) {
//         console.log(uvresponce)

//     })
//  }

$("#search").on("click", function (event) {
  event.preventDefault();
  var inputCity = $("#searchInput").val();
  console.log(inputCity);
  searchWeather(inputCity);
});
