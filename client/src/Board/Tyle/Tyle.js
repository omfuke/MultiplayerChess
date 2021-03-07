import React, { useState } from "react";
import "./Tyle.css";

function Tyle({
  tyle,
  detail,
  position,
  checking,
  selected,
  allFalse,
  goToLocation,
  piece,
  location,
}) {
  const clickHandler = (checking, detail, position) => {
    if (detail.jump) {
      goToLocation(position);
      console.log(location, position);

      return;
    }

    if (detail.color === piece) {
      allFalse(position);
      //console.log("clickable");
      checking(detail, position);

      return;
    }

    return;
  };

  return (
    <div
      className="Tyle"
      style={{
        backgroundColor: tyle ? "#D68910" : "#ffcc99",

        ...(detail.selected
          ? {
              boxShadow: "inset 0 0 10px #311b0b",
            }
          : {}),
        ...(detail.jump && { boxShadow: "inset 0 0 15px #0f0" }),
        ...(detail.check && { boxShadow: "inset 0 0 15px red" }),
      }}
    >
      <div
        className={detail.transition && "tyleAnimation"}
        onClick={() => clickHandler(checking, detail, position)}
        style={{
          width: "50px",
          height: "50px",
          ...(detail.color === piece || detail.jump
            ? { cursor: "pointer" }
            : { cursor: "auto" }),
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
