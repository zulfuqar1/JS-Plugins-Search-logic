const apiKey = '61a37652adcc4c13a88202100231805';
const weatherContainer = document.querySelector(".weather-container");
const searchBar = document.querySelector(".search");
const searchBtn = document.querySelector(".search__button");

searchBtn.addEventListener("click", () => {
    const searchCity = searchBar.value.trim();
    getWeather(searchCity);
});

function getWeather(searchCity) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${searchCity}&aqi=no`)
        .then((x) => x.json())
        .then((x) => renderWeather(x));
}

function renderWeather(weather) {
    const country = weather.location.country;
    const city = weather.location.name;
    const date = weather.location.localtime;
    const tempC = weather.current.temp_c;
    const icon = weather.current.condition.icon;
    const windKph = weather.current.wind_kph;
    const humidity = weather.current.humidity;
    const feelsLike = weather.current.feelslike_c;
    const uv = weather.current.uv;

    const weatherInfo = document.querySelector('.weather-info');
    weatherInfo.innerHTML = '';

    const countrySpan = document.createElement('span');
    countrySpan.innerText = `Country: ${country}`;

    const citySpan = document.createElement('span');
    citySpan.innerText = `City: ${city}`;

    const dateSpan = document.createElement('span');
    const time = date.split(' ')[1]; 
    dateSpan.innerText = `Local Time: ${time}`;

    const tempCSpan = document.createElement('span');
    tempCSpan.innerText = `Temperature: ${tempC}`;

    const img = document.createElement('img');
    img.src = icon;
    img.alt = 'Weather Icon';

    const windKphSpan = document.createElement('span');
    windKphSpan.innerText = `Wind Speed: ${windKph}`;

    const humiditySpan = document.createElement('span');
    humiditySpan.innerText = `Humidity: ${humidity}`;

    const feelsLikeSpan = document.createElement('span');
    feelsLikeSpan.innerText = `Feels Like: ${feelsLike}`;

    const uvSpan = document.createElement('span');
    uvSpan.innerText = `UV: ${uv}`;

    weatherInfo.appendChild(countrySpan);
    weatherInfo.appendChild(citySpan);
    weatherInfo.appendChild(dateSpan);
    weatherInfo.appendChild(tempCSpan);
    weatherInfo.appendChild(img);
    weatherInfo.appendChild(windKphSpan);
    weatherInfo.appendChild(humiditySpan);
    weatherInfo.appendChild(feelsLikeSpan);
    weatherInfo.appendChild(uvSpan);
}
