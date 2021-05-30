const API_KEY = "fb7188a947c09a8f0c2b36bd981b06de";

export const getWeatherEndpoint = (city) =>
  `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
