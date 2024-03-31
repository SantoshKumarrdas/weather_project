
const apikey=`922e0b5b70666565e35b7798a8745531`;
async function fetchWeatherData(city){
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&units=metric&appid=${apikey}`);
    const data= await response.json();
    console.log(data);
    updateWeatherUI(data);

}
  const cityElement=document.querySelector(".city");
  const temperature=document.querySelector(".temp");
  const windspeed=document.querySelector(".wind");
  const humidity=document.querySelector(".humidity");
  const visibilityy=document.querySelector(".visibility-distance");
  const descriptiontext=document.querySelector(".description-text");
  const date=document.querySelector(".date")
function updateWeatherUI(data){
     cityElement.textContent=data.name;
     temperature.textContent=`${data.main.temp}°`;
     windspeed.textContent=`${data.wind.speed} Km/h`;
     humidity.textContent=`${data.main.humidity} %`;
     visibilityy.textContent=`${data.visibility/1000} km`;
     descriptiontext.textContent=data.weather[0].description;
     const currentDate=new Date();
     date.textContent=currentDate.toDateString();
};
const formElement=document.querySelector(".search-form");
const inputElement=document.querySelector('.city-input');
formElement.addEventListener('submit',function(e){
    e.preventDefault();
    const city=inputElement.value;
    if(city!==""){
        fetchWeatherData(city);
    }
})