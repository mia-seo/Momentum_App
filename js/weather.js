const API_KEY = "903788abbc9c63621aa6a1e3bb5f42c3";
const cityContainer = document.querySelector("#weather span:first-child");
const weatherContainer = document.querySelector("#weather span:last-child");

const onGeoOk = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then(({ name, weather, main }) => {
      cityContainer.innerText = name;
      weatherContainer.innerText = `${weather[0].main} / ${main.temp} ℃`;
    });
};

const onGeoError = () => {
  alert("Can't find you");
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
