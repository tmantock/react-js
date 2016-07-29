import React, { Component } from 'react';
import { connect } from 'react-redux';
import Charts from '../components/chart';
import GoogleMap from '../components/google-map';


class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat} = cityData.city.coord;
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td>
          <Charts data={temps} color="blue" units="°F" />
        </td>
        <td>
          <Charts data={humidity} color="yellow" units="hPa" />
        </td>
        <td>
          <Charts data={pressure} color="red" units="%" />
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
