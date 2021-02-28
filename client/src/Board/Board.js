import React, { useState } from "react";
import "./Board.css";
import Tyle from "./Tyle/Tyle";

function Board() {
  const [board, setBoard] = useState([
    [
      { name: "rook", color: "black" },
      { name: "knight", color: "black" },
      { name: "bishop", color: "black" },
      { name: "king", color: "black" },
      { name: "queen", color: "black" },
      { name: "bishop", color: "black" },
      { name: "knight", color: "black" },
      { name: "rook", color: "black" },
    ],
    [
      { name: "pawn", color: "black" },
      { name: "pawn", color: "black" },
      { name: "pawn", color: "black" },
      { name: "pawn", color: "black" },
      { name: "pawn", color: "black" },
      { name: "pawn", color: "black" },
      { name: "pawn", color: "black" },
      { name: "pawn", color: "black" },
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      { name: "pawn", color: "white" },
      { name: "pawn", color: "white" },
      { name: "pawn", color: "white" },
      { name: "pawn", color: "white" },
      { name: "pawn", color: "white" },
      { name: "pawn", color: "white" },
      { name: "pawn", color: "white" },
      { name: "pawn", color: "white" },
    ],
    [
      { name: "rook", color: "white" },
      { name: "knight", color: "white" },
      { name: "bishop", color: "white" },
      { name: "king", color: "white" },
      { name: "queen", color: "white" },
      { name: "bishop", color: "white" },
      { name: "knight", color: "white" },
      { name: "rook", color: "white" },
    ],
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
            if (index % 2 === 0) {
              if (ind % 2 === 0) {
                tyle = true;
              } else {
                tyle = false;
              }
            } else {
              if (ind % 2 === 0) {
                tyle = false;
              } else {
                tyle = true;
              }
            }

            return <Tyle tyle={tyle} detail={j}></Tyle>;
          });
        })}
      </div>
    </div>
  );
}

export default Board;
