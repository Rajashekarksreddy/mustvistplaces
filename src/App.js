import React, { useState } from "react";
import "./styles.css";

var placesDb = {
  andhrapradesh: [
    { name: "vijayawada", rating: "4.5/5" },
    { name: "kurnool", rating: "4/5" }
  ],
  TamilNadu: [
    { name: "Ooty", rating: "4.5/5" },
    { name: "Kodaikanal", rating: "4.5/5" }
  ],
  Kerala: [
    { name: "Alleppey", rating: "5/5" },
    { name: "Munnar", rating: "4.5/5" }
  ]
};

var listOfStates = Object.keys(placesDb);

export default function App() {
  var [selectedState, setState] = useState("andhrapradesh");
  function onClickHandler(selectedState) {
    setState(selectedState);
  }
  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="beach">
          {" "}
        </span>
        best places in south in india
      </h1>
      <hr />
      <h2>my favorite places in south india and best summer visit places.</h2>
      <h3> Choose the states to know my favourite places.</h3>
      <div>
        {listOfStates.map((state) => {
          return (
            <button className="buttons" onClick={() => onClickHandler(state)}>
              {state}
            </button>
          );
        })}
      </div>
      <hr />
      <div className="lowerArea">
        <ul>
          {placesDb[selectedState].map((place) => (
            <li className="visit" key={place.name}>
              <div className="name">{place.name} </div>
              <div>{place.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
