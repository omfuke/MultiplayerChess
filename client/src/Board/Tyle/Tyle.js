import React from "react";
import { Socket } from "socket.io-client";
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
  chance,
  promoteWhite,
  promoteBlack,
  popup,
  res,
}) {
  // console.log(detail, position);

  // const [click, setClick] = useState(false);

  const clickHandler = (checking, detail, position) => {
    if (detail.jump) {
      if (detail.name === "king") {
        res();
        return;
        // popup(true);
      }
      goToLocation(position);

      return;
    }

    if (detail.color === piece) {
      selected(position);
      allFalse();
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
        ...(promoteWhite && { pointerEvents: "none" }),
        ...(promoteBlack && { pointerEvents: "none" }),
      }}
    >
      <div
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
//detail.color === piece

