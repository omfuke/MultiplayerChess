import React, { useState } from "react";
import "./Tyle.css";

function Tyle({ tyle, detail, position, checking, selected }) {
  // console.log(detail, position);

  const clickHandler = (checking, detail, position) => {
    checking(detail, position);
    // selected(position);
  };

  return (
    <div
      className="Tyle"
      style={{ backgroundColor: tyle ? "#D68910" : "#ffcc99" }}
    >
      <div
        onClick={() => clickHandler(checking, detail, position)}
        style={{
          width: "50px",
          height: "50px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "7.5px",
        }}
      >
        <i
          style={{
            color: detail && `${detail.color}`,
          }}
          className={detail && `fas fa-chess-${detail.name} fa-2x`}
        ></i>
      </div>
    </div>
  );
}

export default Tyle;
