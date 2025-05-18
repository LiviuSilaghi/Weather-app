/** @format */

document.getElementById(`search-button`).addEventListener(`click`, function () {
  const city = document.getElementById(`city-input`).value;
  if (city) {
    fetchWeather(city);
  } else {
    alert(`Please enter a city name`);
  }
});

async function fetchWeather(city) {
  const apiKey = `c43e8a6cc6bbaf782777b666ddedee58`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`City not found`);
    }
    const data = await response.json();
    displayweather(data);
  } catch (error) {
    alert(error.message);
  }
  // Add your fetch logic here
}

function displayweather(data) {
  const weatherinfo = document.getElementById(`weather-info`);
  document.getElementById(`city-name`).textContent = data.name;
  document.getElementById(
    `temperature`
  ).textContent = `Temperature: ${data.main.temp}`;
  document.getElementById(
    `description`
  ).textContent = `Description: ${data.weather.description}`;
  document.getElementById(
    `humidity`
  ).textContent = `Humidity: ${data.main.humidity}`;
  document.getElementById(
    `wind-speed`
  ).textContent = `Wind Speed: ${data.wind.speed}`;

  const iconCode = data.weather[0].icon;

  const iconUrl = `https://openweathermap.org/img/wh/${iconCode}@2x.png`;
  document.getElementById(`weather-icon`).src = iconUrl;

  weatherinfo.style.display = `block`;
}
