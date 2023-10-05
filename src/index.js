import React from "react";
import ReactDOM from "react-dom";

let fName = "Saba";
let lName = "Azeem";
let luckyNumber = 7;

ReactDOM.render(
  <>
    <h1>Hello {`${fName} ${lName}`}</h1>
    <p>Your lucky number is: {luckyNumber} </p>
  </>,
  document.getElementById("root")
);
