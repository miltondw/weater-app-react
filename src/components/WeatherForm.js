import React from "react";

export default function WatherForm({ getWheater }) {
  return (
    <form onSubmit={(e) => getWheater(e)} className="weatherForm">
      <input
        type="text"
        name="city"
        autoFocus
        placeholder="Your City Name"
        className="weatherForm__input"
      />
      <input
        type="text"
        name="country"
        placeholder="Your Country Name"
        className="weatherForm__input"
      />
      <button className="weatherForm__btn">Get Weather</button>
    </form>
  );
}
