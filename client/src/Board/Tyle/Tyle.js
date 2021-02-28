import React from "react";
import "./Tyle.css";

function Tyle({ tyle }) {
  return (
    <div
      className="Tyle"
      style={{ backgroundColor: tyle ? "#D68910" : "#F6DDCC" }}
    ></div>
  );
}

export default Tyle;
