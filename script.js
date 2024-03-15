const inputBox = document.getElementById("input-box");
const searchBtn = document.getElementById("searchBtn");
const weather_img = document.getElementById("weather-img");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windspeed");


async function checkweather(city)
{
    const api_key = "fe9dfc206b1635bd21a32ccc93a4e02f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    
    const weather_data = await fetch(`${url}`).then(response=> response.json());
    const location_not_found = document.querySelector('#location-not-found');
    const weather_body = document.querySelector("#weather-body")
    if(weather_data.cod ===`404`){
        location_not_found.style.display="flex";
        weather_body.style.display = "none";
        console.log("Error");
        return ;
    }

    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML =`${weather_data.weather[0].description}`;
    
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed}Km/hr`;
    
    switch(weather_data.weather[0].main)
    {
        case "Clouds":
            weather_img.src = "assets/cloud.png";
            break;
        case 'Clear' :
            weather_img.src = "assets/clear.png";
            break;
        case "Rain" :
            weather_img.src = "assets/rain.png";
            break;
        case "Mist" :
            weather_img.src = "assets/mist.png";
            break;
        case "Snow" :
            weather_img.src = "assets/snow.png";
            break;   
    }
    
}


searchBtn.addEventListener('click', ()=>{
    checkweather(inputBox.value);
});