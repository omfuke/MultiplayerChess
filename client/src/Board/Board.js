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

  const [location, setLocation] = useState(null);

  if (location) {
    console.log(location);
  }

  const checking = (detail, position) => {
    const newboard = board.map(function (arr) {
      return arr.slice();
    });
    newboard[position[0]][position[1]] = {
      ...board[position[0]][position[1]],
      selected: true,
    };
    newboard.map((i, index) =>
      i.map((j, ind) => {
        if ((index !== position[0] || ind !== position[1]) && j !== null) {
          j.selected = false;
        }
      })
    );

    setBoard(newboard);
  };
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

            return (
              <Tyle
                key={[index, ind]}
                checking={checking}
                tyle={tyle}
                detail={j}
                position={[index, ind]}
                selected={setLocation}
              ></Tyle>
            );
          });
        })}
      </div>
    </div>
  );
}

export default Board;
