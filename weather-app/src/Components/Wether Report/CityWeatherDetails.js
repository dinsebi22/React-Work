class cityWeather {}
const cityWeatherInstance = new cityWeather();

export function getCityWeatherData(index) {
  return cityWeatherInstance.cities[index].value;
}

export function setCityWeatherData(index, dataValue) {
  cityWeatherInstance.cities[index].value = dataValue;
}

export function getCityWeatherName(index) {
  return cityWeatherInstance.cities[index].name;
}

export function setCityWeatherName(index, value) {
  cityWeatherInstance.cities[index].name = value;
}

export function getCities() {
  return cityWeatherInstance.cities;
}

export function setCities(value) {
  cityWeatherInstance.cities = value;
}
