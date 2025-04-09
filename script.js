/*************************************/
/********* Rainikka Corprew *********/
/*********** JAVASCRIPT ************/
/************ SBA 308A ************/
/*********************************/

/***********************************/
/*** *API Fetch,Async & Await *****/
/******** with JavaScript ********/
/********* 08-APR-2025 **********/

/******* Open Weather API Site ********/
// https://home.openweathermap.org

/******* Open Weather API Site ********/
// API key cd51884d9897a04d51888d2ca1ef202d

/******* Example of API Call: ********/
// https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cd51884d9897a04d51888d2ca1ef202d

/*** Knowledge Inspiration: FreedCodeCamp: API for Beginners ***/

/**** Accessing DOM Elements ****/
const body = document.querySelector('body');
const date = document.getElementById('date');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const tempImage = document.getElementById('tempImage');
const descript = document.getElementById('descript');
const tempMax = document.getElementById('tempMax');
const tempMin = document.getElementById('tempMin');

/**** Setting Up Date Element  ****/
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

/**** Accessing APP Elements ****/
const app = document.getElementById('app');

/*********** TESTING AREA ************/
// document.getElementById('test0');
// test0.innerHTML = getWeather();
// document.getElementById('test1');
// test1.innerHTML = "";
/************************************/

/********** SET UP FUNCTION TO FETCH API DATA **********/
const getWeather = async () => {
  try {
    const cityName = document.getElementById('searchBarInput').value;
    const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=cd51884d9897a04d51888d2ca1ef202d`,
      {
        headers: {
          Accept: "application/json"
        }
      });

    const weatherData = await weatherDataFetch.json();
    console.log(weatherData)
    city.innerHTML = `<h2>${weatherData.name}</h2>`;
    descript.innerHTML = `${weatherData.weather[0].main}`;
    tempImage.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" />`;

    // Convert Kelvin to Celsius to Fahrenheit
    const tempF = Math.round((weatherData.main.temp - 273.15) * 9 / 5 + 32);
    const tempMinF = Math.round((weatherData.main.temp_min - 273.15) * 9 / 5 + 32);
    const tempMaxF = Math.round((weatherData.main.temp_max - 273.15) * 9 / 5 + 32);

    temp.innerHTML = `<h2>${tempF} \u00B0F</h2>`;
    tempMin.innerHTML = `<h3>${tempMinF} \u00B0F</h3>`;
    tempMax.innerHTML = `<h3>${tempMaxF} \u00B0F</h3>`;
  }
  catch (error) {
    console.log(error)
  }
}



/************************************************
 * Dear Customer!
 * 
 * Thank you for subscribing to Free OpenWeatherMap!
 * API key:
 * - Within the next couple of hours, your API key 
 * will be activated and ready to use:
 * 
 * API Key:
 * cd51884d9897a04d51888d2ca1ef202d 
 * 
 * - You can later create more API keys on your account  page
 * - Please, always use your API key in each API call
 * 
 * Endpoint:
 * - Please, use the endpoint api.openweathermap.org for
 * your API calls
 * 
 * Example of API call:
 * api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cd51884d9897a04d51888d2ca1ef202d
 * 
 * Useful links:
 * - API documentation https://openweathermap.org/api
 * - Details of your plan https://openweathermap.org/price
 * - Please, note that 16 - days daily forecast and
 * History API are not available for Free subscribers
 /*********************************************************/