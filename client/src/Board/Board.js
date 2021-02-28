import React, { useState } from "react";
import "./Board.css";
import Tyle from "./Tyle/Tyle";

function Board() {
  const [board, setBoard] = useState([
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ]);
  let tyle;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="Board">
        {board.map((i, index) => {
          console.log(index);

          return i.map((j, ind) => {
            if (index % 2 == 0) {
              if (ind % 2 == 0) {
                tyle = true;
              } else {
                tyle = false;
              }
            } else {
              if (ind % 2 == 0) {
                tyle = false;
              } else {
                tyle = true;
              }
            }

            return <Tyle tyle={tyle}></Tyle>;
          });
        })}
      </div>
    </div>
  );
}

export default Board;
