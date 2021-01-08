const weatherForm = document.querySelector("form");
const locationPara = document.querySelector(".location");
const forecastPara = document.querySelector(".forecast");
const humidityPara = document.querySelector(".humidity");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const address = document.querySelector("input").value;
  locationPara.textContent = "Loading...";
  forecastPara.textContent = "";
  humidityPara.textContent = "";
  fetch(`/weather?address=${address}`).then((response) => {
    response.json().then(({ error, dataHumidity, forecast, location } = {}) => {
      if (error) {
        locationPara.textContent = error;
      } else {
        locationPara.textContent = location;
        forecastPara.textContent = forecast;
        humidityPara.textContent = dataHumidity;
      }
    });
  });
});
