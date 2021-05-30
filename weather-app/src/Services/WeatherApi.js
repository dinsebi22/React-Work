import axios from "axios";
import { getWeatherEndpoint } from "./apiHelper";

export const getWeather = (city) => {
  return axios({
    method: "get",
    url: getWeatherEndpoint(city),
    responseType: "json",
  }).then((response) => {
    return {
      id: response.data.id,
      name: response.data.name,
      windSpeed: response.data.wind.speed + " m/s",
      clouds: response.data.clouds.all + "%",
      weather: {
        description: response.data.weather[0].description,
        main: response.data.weather[0].main,
      },
      main: {
        humidity: response.data.main.humidity,
        currentTemp: response.data.main.temp,
        maxTemp: response.data.main.temp_max,
        minTemp: response.data.main.temp_min,
        pressure: response.data.main.pressure,
      },
      coord: {
        lon: response.data.coord.lon,
        lat: response.data.coord.lat,
      },
    };
  });
};
