var json = {
coord: {
lon: 145.77,
lat: -16.92
},
weather: [
{
id: 802,
main: "Clouds",
description: "scattered clouds",
icon: "03n"
},
{
id: 803,
main: "Rainy",
description: "scattered rains",
icon: "02n"
}
],
base: "stations",
main: {
temp: 300.15,
pressure: 1007,
humidity: 74,
temp_min: 300.15,
temp_max: 300.15
},
visibility: 10000,
wind: {
speed: 3.6,
deg: 160
},
clouds: {
all: 40
},
dt: 1485790200,
sys: {
type: 1,
id: 8166,
message: 0.2064,
country: "AU",
sunrise: 1485720272,
sunset: 1485766550
},
id: 2172797,
name: "Cairns",
cod: 200
}

// weather: [
// {
// id: 802,
// main: "Clouds",
// description: "scattered clouds",
// icon: "03n"
// },
// {
// id: 803,
// main: "Rainy",
// description: "scattered rains",
// icon: "02n"
// }
// ],

// console.log(json.weather[0].main)

// console.log(json.main.temp)

var weather1 = json.weather
// var weather2 = json.weather[]
var weather3 = json.weather[0]

// console.log("weather1: ")
// console.log(weather1);
// console.log("\nweather3: ")
// console.log(weather3);

for (var i = 0; i < weather1.length; i++) {
    console.log(weather1[i].main);
}