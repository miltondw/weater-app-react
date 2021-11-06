import React, { useState } from "react";
import "./scss/styles.scss";
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/Weatherinfo";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function App() {
  const [state, setState] = useState({
    temperature: "",
    description: "",
    humidity: "",
    wind_speed: "",
    city: "",
    country: "",
    error: null,
  });
  const getWheater = async (e) => {
    e.preventDefault();
    const { city, country } = e.target.elements;
    const cityValue = city.value;
    const countryValue = country.value;
    const API_KEY = "7d3d3228c00a8672cca18bb03f2ed045";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${API_KEY}&units=metric`;
    if (cityValue || countryValue) {
      const res = await fetch(API_URL);
      const data = await res.json();
      if (data.cod !== "404") {
        setState({
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          city: data.name,
          country: data.sys.country,
          error: null,
        });
      } else {
        setState({
          error: "The City Name is Wrong",
        });
      }
    } else {
      setState({
        error: "Please Enter a city and a Country",
      });
    }
  };
  return (
    <div className="app">
      <Header />
      <WeatherForm getWheater={getWheater} />
      <WeatherInfo state={state} />
      <Footer />
    </div>
  );
}
