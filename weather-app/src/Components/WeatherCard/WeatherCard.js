import React, { Component } from "react";
import Card from "../UI/Card/Card";
import "./WeatherCard.css";
import weatherIcons from "../../Services/weatherHelper";
import "./WeatherCard.css";
import CityDetails from "../CityDetails/CityDetails";

class WeatherCard extends Component {
  getWeatherIcon = (mainWeather) => {
    switch (mainWeather) {
      case "Clouds":
        return weatherIcons.cloudy();
      case "Rain":
        return weatherIcons.rainy();
      case "Sun":
        return weatherIcons.sunny();
      case "Wind":
        return weatherIcons.windy();
      case "Clear":
        return weatherIcons.clear();
    }
  };

  render() {
    return (
      <div className="weatherCardCont">
        <Card>
          {this.getWeatherIcon(this.props.weather.weather.main)}
          <CityDetails cityWeather={this.props}></CityDetails>
        </Card>
      </div>
    );
  }
}

export default WeatherCard;
