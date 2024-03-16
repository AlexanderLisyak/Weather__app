const container = document.querySelector('.container');
const search = document.querySelector('.search-box .search');
const weatherBox = document.querySelector('.weather-box');
const weatherDes = document.querySelector('.weather__description');
const error = document.querySelector('.error');


search.addEventListener('click', () => {
    
    const APIKey = '9588e84db52e991825385554af4733ee';
    const city = document.querySelector('.search-box  input').value;


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if(data.cod == '404'){
                container.style.height = '550px';
                weatherBox.classList.remove('active')
                weatherDes.classList.remove('active')
                error.classList.add('active')
                return;
            }

            container.style.height = '550px';
            weatherBox.classList.add('active')
            weatherDes.classList.add('active')
            error.classList.remove('active')



            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.humidity__percent');
            const wind = document.querySelector('.wind__speed')
            
                switch(data.weather[0].main){
                    case 'Clear': 
                        image.src = 'images/clear.png';
                        break;
                    case 'Clouds': 
                        image.src = 'images/cloud.png';
                        break;
                    case 'Rain': 
                        image.src = 'images/rain.png';
                        break;
                    case 'Snow': 
                        image.src = 'images/snow.png';
                        break;
                    case 'Mist': 
                        image.src = 'images/mist.png';
                        break;
                    case 'Drizzle':
                        image.src = 'images/drizzle.png'
                        break;

                    default: 
                        image.src = 'images/cloud.png';
                }
            temperature.innerHTML = parseInt(data.main.temp) + '<span>°C</span>';
            description.innerHTML = (data.weather[0].description);
            humidity.innerHTML = parseInt(data.main.humidity) + '<span>%</span>';
            wind.innerHTML = parseInt(data.wind.speed) + '<span>Km/h</span>';
        })
        



    })
