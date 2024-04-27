const APIkey = "954cf47a8e8a2c6d785eef20bcde8c5d"
const APIurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const serchBox = document.querySelector('.search input');
const serchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWheater(city) {
    const response = await fetch(APIurl + city + `&appid=${APIkey}`)
    const data = await response.json()

    if (response.status === 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + 'ºc';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';

        if (data.weather[0].main === 'Clear') {
            weatherIcon.src = 'imgs/clear.png'
        }
        else if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = 'imgs/clouds.png'
        }
        else if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = 'imgs/drizzle.png'
        }
        else if (data.weather[0].main === 'Mist') {
            weatherIcon.src = 'imgs/mist.png'
        }
        else if (data.weather[0].main === 'Rain') {
            weatherIcon.src = 'imgs/rain.png'
        }
        else if (data.weather[0].main === 'Snow') {
            weatherIcon.src = 'imgs/snow.png'
        }

        document.querySelector('.weather').style.display = 'block';
        document.querySelector('.error').style.display = 'none'
    }
}

serchBtn.addEventListener('click', () => {
    checkWheater(serchBox.value)
})

