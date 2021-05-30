import Weather from "./Components/Wether Report/Weather";
import * as dataUtil from "./Components/Wether Report/CityWeatherDetails";
import { getWeather } from "./Services/WeatherApi";

function App() {
  // Used To save in memory (RAM)
  // if (!dataUtil.getCities()) setUp();

  return (
    <div>
      <Weather />
    </div>
  );
}

function setUp() {
  console.log("Setup Called");
  const cityNames = ["Bucharest", "Arges"];
  let cityDetails = [];

  cityNames.forEach((city) => {
    getWeather(city).then((result) =>
      cityDetails.push({ name: city, value: result })
    );
  });

  dataUtil.setCities(cityDetails);
  console.log(dataUtil.getCities());
}

export default App;
