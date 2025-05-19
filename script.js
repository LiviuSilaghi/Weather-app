/** @format */

const weatherform = document.querySelector(".weatherform");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "c43e8a6cc6bbaf782777b666ddedee58";

weatherform.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;

  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayweatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city name");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    city
  )}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("City not found");
  }
  return await response.json();
}

function displayweatherInfo(data) {
  console.log(data);
}

function getweathermoji(weatherid) {}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
