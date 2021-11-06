import React from "react";

export default function WeatherInfo({ state }) {
  return (
    <div className="WeatherInfo">
      {state.error && (
        <div className="WeatherInfo-alert">
          <p className="WeatherInfo-alert__paragraph">{state.error}</p>
        </div>
      )}
      {state.temperature ? (
        <div className="weatherInfo-card">
          <p className="WeatherInfo-card__data">
            Location: {state.city}, {state.country}{" "}
          </p>
          <p className="WeatherInfo-card__data">
            Temperature: {state.temperature} C°, {state.description}
          </p>
          <p className="WeatherInfo-card__data">humidity: {state.humidity} g/m3</p>
          <p className="WeatherInfo-card__data">
            wind_speed: {state.wind_speed} m/s
          </p>
        </div>
      ) : state.error ? (
        ""
      ) : (
        <p className="WeatherInfo-text">No Request Yet</p>
      )}
    </div>
  );
}
