/** @format */

const weatherform = document.querySelector(".weatherform");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = "c43e8a6cc6bbaf782777b666ddedee58";

weatherform.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value;

  if (city) {
  } else {
    displayError("Please enter a city name");
  }
});

async function getWeatherData(city) {}

function displayweatherinfo(data) {}

function getWeatheremoji(weatherid) {}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");
}
