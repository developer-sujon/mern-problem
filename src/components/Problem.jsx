import React, { Component } from "react";

export class Problem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weathermood: "",
      weatherStatus: "",
    };

    console.log(this.props);
  }

  componentDidUpdate = () => {};

  render() {
    const {
      temp,
      humidity,
      pressure,
      weathermood,
      name,
      speed,
      country,
      sunset,
    } = this.props;

    return (
      <>
        <article className="widget">
          <div className="weatherIcon">
            <i className={`wi ${this.state.weatherStatus}`}></i>
          </div>

          <div className="weatherInfo">
            <div className="temperature">
              <span>{temp}&deg;</span>
            </div>

            <div className="description">
              <div className="weatherCondition">{weathermood}</div>
              <div className="place">
                {name}, {country}
              </div>
            </div>
          </div>

          <div className="date"> {new Date().toLocaleString()} </div>

          {/* our 4column section  */}
          <div className="extra-temp">
            <div className="temp-info-minmax">
              <div className="two-sided-section">
                <p>
                  <i className={"wi wi-sunset"}></i>
                </p>
                <p className="extra-info-leftside">
                  {sunset} PM <br />
                  Sunset
                </p>
              </div>

              <div className="two-sided-section">
                <p>
                  <i className={"wi wi-humidity"}></i>
                </p>
                <p className="extra-info-leftside">
                  {humidity} <br />
                  Humidity
                </p>
              </div>
            </div>

            <div className="weather-extra-info">
              <div className="two-sided-section">
                <p>
                  <i className={"wi wi-rain"}></i>
                </p>
                <p className="extra-info-leftside">
                  {pressure} <br />
                  Pressure
                </p>
              </div>

              <div className="two-sided-section">
                <p>
                  <i className={"wi wi-strong-wind"}></i>
                </p>
                <p className="extra-info-leftside">
                  {speed} <br />
                  Speed
                </p>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default Problem;
