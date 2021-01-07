const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=2f20661bc166bf1c6e0dfa9ff521329e&query=${latitude},${longitude}&units=s`;
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      const data = `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} Kelvin out. It feels like ${body.current.feelslike} Kelvin out.`;
      callback(undefined, data);
    }
  });
};

module.exports = forecast;
