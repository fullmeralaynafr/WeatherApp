const url = "https://api.openweathermap.org/data/2.5/weather?q=tooele&&units=imperial&appid=07f31bab1e7506b9cd2ab8e8e085de97";

fetch(url)
.then ((response) => response.json())
.then((jsObject) => {
    let weather = jsObject.main;

    for (let i = 0; i < weather.length; i++) {
        console.log(weather[i].);
    }

})