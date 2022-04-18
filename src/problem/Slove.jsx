import React, { useEffect } from "react";

const Slove = (props) => {
  const [weatherState, setWeatheState] = React.useState("");
  const { weathermood } = props.weatherInfo;

  console.log(props);

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  return <div>Slove</div>;
};

export default Slove;
