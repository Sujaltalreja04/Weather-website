function getWeather() {
    const apiKey = 'bd5e378503939ddaee76f12ad7a97608'; // Replace with your actual API key
    const cityInput = document.getElementById('city-input');
    const weatherInfo = document.getElementById('weather-info');
    const city = cityInput.value;

    if (city === '') {
        alert('Please enter a city');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const iconCode = data.weather[0].icon;

            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

            const weatherHTML = `<p>Temperature: ${temperature} &#8451;</p>
                                <p>Description: ${description}</p>
                                <img class="weather-icon" src="${iconUrl}" alt="Weather Icon">
                                <p>Humidity: ${humidity}%</p>
                                <p>Wind Speed: ${windSpeed} m/s</p>`;

            weatherInfo.innerHTML = weatherHTML;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherInfo.innerHTML = '<p>Error fetching weather data. Please try again.</p>';
        });
}
