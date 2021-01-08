const weatherForm = document.querySelector("form");
const locationPara = document.querySelector(".location");
const forecastPara = document.querySelector(".forecast");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const address = document.querySelector("input").value;
  locationPara.textContent = "Loading...";
  forecastPara.textContent = "";
  fetch(`/weather?address=${address}`).then((response) => {
    response.json().then(({ error, forecast, location } = {}) => {
      if (error) {
        locationPara.textContent = error;
      } else {
        locationPara.textContent = location;
        forecastPara.textContent = forecast;
      }
    });
  });
});
