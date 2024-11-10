document.addEventListener("DOMContentLoaded", () => {

    // Grabbing all the elements
    const weatherInput = document.getElementById("weatherInput");
    const getWeatherBtn = document.getElementById("weatherBtn");
    const weatherInfo = document.getElementById("weatherInfo");
    const cityNameDisplay = document.getElementById("cityName");
    const temperatureDisplay = document.getElementById("temperature");
    const descriptionDisplay = document.getElementById("description");
    const errorDisplay = document.getElementById("errorMessage");

    // My API key
    const API_KEY = "2c4b02009c115be329cf2a2baf25fc1c";

    // Function to fetch and display weather data
    async function getWeatherData(city) {
        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData);
        } catch (error) {
            showError();
        }
    }

    // Adding event listener to the button 
    getWeatherBtn.addEventListener("click", () => {
        let city = weatherInput.value.trim();
        if (!city) return;
        getWeatherData(city);
    });

    // Adding event listener for Enter key press
    weatherInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            let city = weatherInput.value.trim();
            if (!city) return;
            getWeatherData(city);
        }
    });

    // Creating functions for Fetch data and display data
    async function fetchWeatherData(city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
        let response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        return data;
    }

    function displayWeatherData(data) {
        console.log(data);
        weatherInfo.classList.remove('hidden');  
        errorDisplay.classList.add('hidden');

        const { name, main, weather } = data;  
        cityNameDisplay.textContent = name;
        temperatureDisplay.textContent = `Temperature of ${name} is ${main.temp}`;
        let description = weather[0].description;
        descriptionDisplay.textContent = description.toUpperCase();
    }

    function showError() {
        weatherInfo.classList.add('hidden');
        errorDisplay.classList.remove('hidden');
    }
})