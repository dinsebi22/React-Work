import React, { Component } from "react";
import { getWeather } from "../../Services/WeatherApi";
import Grid from "../UI/Grid/Grid";
import WeatherCard from "../WeatherCard/WeatherCard";

class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [],
    };
  }

  getCities = () => {
    const displaidCities = ["Pitesti", "Constanta", "Tulcea", "Voluntari"];

    displaidCities.forEach((city) => {
      getWeather(city)
        .then((result) => {
          return { name: city, value: result };
        })
        .then((result) => {
          const newCityList = this.state.cities;
          newCityList.push(result);
          this.setState({ cities: newCityList });
        });
    });
  };

  componentDidMount() {
    this.getCities();
    setInterval(() => {
      this.setState({ cities: [] });
      this.getCities();
    }, 600000);
  }

  render() {
    console.log(this.state);
    return (
      <React.Fragment>
        <Grid>
          {this.state.cities.length > 0 &&
            this.state.cities.map((city) => (
              <WeatherCard
                key={city.value.id}
                weather={city.value}
              ></WeatherCard>
            ))}
        </Grid>
      </React.Fragment>
    );
  }
}

export default Weather;
