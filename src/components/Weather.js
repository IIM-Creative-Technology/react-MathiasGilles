import React,{useState} from 'react';

function Weather() {
    const apiKey = "409e51d415bef120cb8e8b274626fa26";
    const [weather, setWeather] = useState(0)
    const ApiCall = fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=' + apiKey)
        .then(resp => {
            return resp.json()
        })
        .then(function (data) {
            let route = "http://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
            setWeather({
                name:data.name,
                description : data.weather[0].description,
                temp : Math.ceil(data.main.temp),
                route : route
            })
        })

    return (
        <div className="weather-contaienr">
            <img src={weather.route} alt=""/>
            <p>{weather.name} - {weather.temp}C</p>
            <p>{weather.description}</p>
        </div>
    )

}

export default Weather