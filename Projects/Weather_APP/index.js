document.addEventListener("DOMContentLoaded", ()=>{


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


    // Adding event listener to the button 
    getWeatherBtnc.addEventListener("click" , () => {
        let city = weatherInput.value.trim();
        if (!city) return;
        // Alway remember when make requests on the other servers from Sir hitesh
        // Data will take some times
        // It may throw some errors 
        // Servers/database always in the other country 
    
        try {
            fetcWeatherData(city)
        } catch (error) {
            showError
        }


    });


    // Creating functions for Fetch data and display data
    function fetcWeatherData(city) {


    };

    function displayWeatherData (weatherData) {

    };


    // In the below function we add the hidden to the weather Info data in case we show the error and remove the hidden class from the error message in case of error 
    function showError() {
        weatherInfo.classList.add('hidden');
        errorDisplay.classList.remove('hidden');

    }




})