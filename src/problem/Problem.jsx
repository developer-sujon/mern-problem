import React, { Component } from "react";

class Problem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weathermood: "",
      weatherStatus: "",
    };

    console.log(this.props);
  }

  componentDidMount = () => {
    if (this.state.weathermood) {
      switch (this.state.weathermood) {
        case "Clouds":
          this.setState({ weatherStatus: "wi-day-cloudy" });
          break;
        // case "Haze":
        //   setWeatheState("wi-fog");
        //   break;
        // case "Clear":
        //   setWeatheState("wi-day-sunny");
        //   break;
        // case "Mist":
        //   setWeatheState("wi-dust");
        //   break;

        default:
          this.setState({ weatherStatus: "wi-day-sunny" });
          // setWeatheState("wi-day-sunny");
          break;
      }
    }
  };

  render() {
    return <div>Problem</div>;
  }
}

export default Problem;
