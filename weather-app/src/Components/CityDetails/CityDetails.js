import React, { Component } from "react";
import "./CityDetails.css";

class CityDetails extends Component {
  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {
    const coord = this.props.cityWeather.weather.coord;
    const main = this.props.cityWeather.weather.main;
    const weather = this.props.cityWeather.weather.weather;
    const windSpeed = this.props.cityWeather.weather.windSpeed;

    return (
      <div>
        <div className="main sectionTitle">
          <h2>{this.props.cityWeather.weather.name}</h2>
          <hr />
          <h2>{this.capitalize(weather.description)}</h2>
          <h1>{Math.floor(main.currentTemp - 273.15)}°C</h1>
        </div>
        <hr /> <h3 className="sectionTitle">At the Moment</h3>
        <div className="tableView">
          <h3>
            Min <br /> {Math.floor(main.minTemp - 273.15)}°C
          </h3>
          <h3>
            Max <br /> {Math.floor(main.maxTemp - 273.15)}°C
          </h3>
        </div>
        <hr />
        <React.Fragment>
          <h3 className="sectionTitle">Other Info</h3>
          <div className="other">
            <h5>
              Cloudiness
              <br /> {this.props.cityWeather.weather.clouds}
            </h5>
            <h5>
              Wind Speed
              <br /> {windSpeed}
            </h5>
            <h5>
              Humidity
              <br /> {main.humidity + "%"}
            </h5>
            <h5>
              Atmospheric Pressure
              <br /> {main.pressure + " mbar"}
            </h5>
          </div>
        </React.Fragment>
        <hr />
        <React.Fragment>
          <h3 className="sectionTitle">Coordinates</h3>
          <div className="tableView">
            <h5>
              Latitude: <br /> {coord.lat}
            </h5>
            <h5>
              Longitude: <br /> {coord.lat}
            </h5>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

export default CityDetails;
